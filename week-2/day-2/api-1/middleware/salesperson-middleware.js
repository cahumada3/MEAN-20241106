const express = require('express');
const router = express.Router();

const log = (req, res, next) => {
    console.log('Salesperson request received!');
    next();
}

router.use(log);

module.exports = router;