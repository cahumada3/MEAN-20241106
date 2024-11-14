// this class is used to route requests for different handler methods
// those methods can be fully implemented here, but are often impemented in other classes like repositories
// ideally, a controller wont have much of any logic in it, just the "dispatcher"- type behaviour
const express = require('express');

// this creates our router which allows us to route incoming requests
const router = express.Router();

// importing our repo
const repo = require('../repositories/salesperson-repo');

// get All
router.get('/', async (req, res) => {
    res.status(200).send(await repo.getAllSalesPersons());
});  

// get by ID
router.get('/:id', async (req, res) => {
    let response = await repo.getSalesPersonById(req.params.id);
    if(response)
        res.status(200).send(response);
    else
        res.status(404).send(`No Saleperson with ID ${req.params.id} exists!`)
});  


// create
router.post('/create', async (req, res) => {
    res.status(201).send(await repo.createSalesPerson(req.body));
}); 

// update
router.put('/update/:id', async (req, res) => {
    res.status(200).send(await repo.updatedSalesPerson(req.body, req.params.id));
}); 

// delete
router.delete('/:id', async (req, res) => {
    await repo.deleteSalesPerson(req.params.id);
    res.status(204).send();
}); 

// make sure you export your router!!
module.exports = router;