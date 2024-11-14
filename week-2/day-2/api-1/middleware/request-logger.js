//this middleware should execute for every request
const express = require('express');
const router = express.Router();

//this function will take in 3 parameters -- req, res, next
//where the next function will pass request on to whichever middleware or handler comes next in the list
//we then have access to the request to grab information
//and we also have access to the response to edit it however we need
//if we res.send() the request here, it will return to the user and not continue down the chain
//it will wait until the next() is called and then it moves on to the next  

//req - represents the HTTP requests and contains info like headers, parameters and body data
//res - represents the HTTP response and is used to send data back to the client
//next - is a function, when called will move onto the next middleware or handler to process the next request
//       if next() is not called, the request processing stops
function log(req, res, next) {
    //this line accesses a property of the request
    console.log(`Request received from ${req.headers['user-agent']} at ${new Date().toISOString()}`);
    //this is adding a header to the response
    res.append("Content-Type", "application/json");
    next();
}

router.use(log);

module.exports = router;