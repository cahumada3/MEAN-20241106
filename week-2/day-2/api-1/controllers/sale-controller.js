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

module.exports = router;