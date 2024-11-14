const express = require('express'); //this takes the dependency and brings it into this program
const app = express(); //this returns an object we can run critical methods on for app functionality
const port = 8080;  // this is the port on which our app will listen on

// we need to tell our app to handle JSON requests appropriately
app.use(express.json());

// import our function from another file
// functions must be in the same order that they were exported to from the other file
const [getAnimal, helloWorld] = require('./functions');
helloWorld();
console.log(getAnimal());

const sampleBody = {message: 'GET request processed successfully!'};

/**
 * get()
 *      - first parameter is the URL suffix that routes to this handler
 *      - second parameter is a lambda with 2 params for the request (req) and the response (res)
 *      - res.send() will include whatever we want to go back to the client
 *      - go to //localhost:8080/message to view message
 */
app.get('/message', (req, res) => {
    console.log(req.headers);

    res.status(200).send(sampleBody);
});

app.delete('/delete', (req, res) => {
    console.log(req.headers['user-agent']);
    res.status(204).send();
})

const animal = [getAnimal(), getAnimal(), getAnimal()];

// changing the first parameter routes the request to a different handler based on the URL suffix
app.get('/animal', (req, res) => {
    res.send(animal);
});

// we need the app to use express.json() for this incoming JSON to work
app.post('/post', (req, res) => {
    console.log(req.body);

    let outgoingBody = {...req.body, message: 'POST body received!'}

    res.status(201).send(outgoingBody);
});

let putObject = {
    id: 1,
    name: 'painting',
    price: 45
}

app.put('/put', (req, res) => {
    let temp = {...req.body}
    if(temp.id)
        putObject.id = temp.id;
    if(temp.name)
        putObject.name = temp.name;
    if(temp.price)
        putObject.price = temp.price;

    res.status(200).send(putObject);
});

let cats = [
    {
        id: 1,
        name: 'Rio',
        type: 'Tabby'
    },
    {
        id: 2,
        name: 'Lillith',
        type: 'Tabby'
    },
    {
        id: 3,
        name: 'Ivy',
        type: 'Calico'
    }
]

/**
 * route parameters
 *      - will look something like http://localhost:8080/cats/5 (where 5 is the parameter in this case)
 *      - and we have to specify the parameter we want with a (:)
 * 
 * query parameters
 *      - will look something like http://localhost:8080/cats?name=Ivy&type=Calico (where the name and type are the parameters)
 */

app.get('/cats/:id', (req, res) => {
    for(let cat of cats) {
        if(cat.id == req.params.id) {
            res.status(200).send(cat);
            return;
        }
    }
    res.status(404).send({errorMessage: `No cat with id ${req.params.id}`})
});


app.get('/cats', (req, res) => {
    if(req.query.id) {
        for(let cat of cats) {
            if(cat.id == req.query.id) {
                res.status(200).send(cat);
                return;
            }
        }
    }
    if(req.query.name) {
        for(let cat of cats) {
            if(cat.name == req.query.name) {
                res.status(200).send(cat);
                return;
            }
        }
    }
    if(req.query.type) {
        for(let cat of cats) {
            if(cat.type == req.query.type) {
                res.status(200).send(cat);
                return;
            }
        }
    }
    res.status(404).send({errorMessage: `No cat with id ${req.query.id} or name ${req.query.name} or type ${req.query.type}`})
});









//sets up our app to accept requests on a particular port
//the callback function will run when the app starts
app.listen(port, () => {
    console.log(`My first express app is up and running on port ${port}! WOOOOO!!`)
})

