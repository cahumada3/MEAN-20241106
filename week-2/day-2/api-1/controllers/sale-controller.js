const express = require('express');
const router = express.Router();

const Sale = require('../models/sale');
const repo = require('../repositories/sale-repo');

router.get('/other', (req, res) => {
    res.send('Sale router request received!');
});  

router.get('/getAll', async (req, res) => {
    await repo.getAllSales()
        .then(rows => res.status(200).send(rows[0].map (row => new Sale(row.id,
                                                                       row.customer_first_name,
                                                                       row.customer_last_name,
                                                                       row.date,
                                                                       row.total,
                                                                       row.salesperson_id))))
        .catch(error => {
            res.status(500).send(error.sqlMessage);
        });            
});

//create a new sale
router.post('/', async (req, res) => {
    await repo.createSale(req.body)
        .then(async data => {
                let temp;
                await repo.getSaleById(data[0].insertId).then(row => temp = new Sale(row[0][0].id,
                                                                             row[0][0].customer_first_name,
                                                                             row[0][0].customer_last_name,
                                                                             row[0][0].date,
                                                                             row[0][0].total,
                                                                             row[0][0].salesperson_id));
                res.status(201).send(temp);
        })
        .catch(error => res.status(400).send({ errorMessage: 'Sale improperly formatted!'}))
})

//update a sale
router.put('/:id', async (req, res) => {
    let temp;
    await repo.getSaleById(req.params.id).then(row => temp = new Sale(row[0][0].id,
                                                                      row[0][0].customer_first_name,
                                                                      row[0][0].customer_last_name,
                                                                      row[0][0].date,
                                                                      row[0][0].total,
                                                                      row[0][0].salesperson_id));
                                                                      
    if (req.body.id) temp.id = req.body.id;
    if (req.body.customer_first_name) temp.customer_first_name = req.body.customer_first_name;
    if (req.body.customer_last_name) temp.customer_last_name = req.body.customer_last_name;
    if (req.body.date) temp.date = req.body.date;
    if (req.body.total) temp.total = req.body.total;
    if (req.body.salesperson_id) temp.salesperson_id = req.body.salesperson_id;

    await repo.updateSale(req.params.id, temp)
        .then(async data => {
            let temp2;
            await repo.getSaleById(temp.id).then(row => temp2 = new Sale(row[0][0].id,
                                                                         row[0][0].customer_first_name,
                                                                         row[0][0].customer_last_name,
                                                                         row[0][0].date,
                                                                         row[0][0].total,
                                                                         row[0][0].salesperson_id));
            res.status(200).send(temp2);
        })
        .catch(error => res.status(400).send({ errorMessage: 'Update body improperly formatted!'}))
    
});

// delete a sale
router.delete('/:id', async (req, res) => {
    await repo.deleteSale(req.params.id)
        .then(() => res.status(204).send())
        .catch(error => res.status(500).send({ errorMessage: 'Something went wrong...' }));
})

module.exports = router;