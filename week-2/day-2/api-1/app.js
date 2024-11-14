// this allows our application to draw from the .env file and get its properties
require('dotenv').config();

const express = require('express');
const app = express();
app.use(express.json());

//CORS = cross-origin resource sharing
// using CORS protection, you can ensure that frontend requests are only allowed from specific "whitelist" IP addresses
// you can enable this per endpoint or per router, but we are gonna do it gloablly
const cors = require('cors');
app.use(cors({origin: process.env.CORS_WHITELIST.split(',')}));

const logger = require('./middleware/request-logger');
app.use(logger);

const salespersonLogger = require('./middleware/salesperson-middleware');
//app.use(salespersonLogger);

const salespersonRouter = require('./controllers/salesperson-controller');
app.use('/salesperson', salespersonRouter, salespersonLogger);

// we're routing requests to other files for processing
const saleRouter = require('./controllers/sale-controller');
app.use('/sale', saleRouter);

// uses the .env variable to initialize our port number
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`App is up and running on Port ${port}!`);
});