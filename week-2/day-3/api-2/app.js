const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({
        source: 'API-2',
        method: 'GET',
        message: 'API request to API-2 was successful!'
    });
})

app.listen(8082, () => {
    console.log('API-2 is up and running on port 8082!');
})