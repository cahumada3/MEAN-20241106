// this file will contain all the methods that actually access the database records 

require('dotenv').config();

// here we are setting up our database connection 
const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

const Salesperson = require('../models/salesperson');

//getting all the salespeople
const getAllSalesPersons = async () => {
    let salespersons;

    //this opens the connection to the DB
    connection.connect();
    //query our database, where the first parameter takes in a string of the SQL query
    await connection.promise().query('SELECT * FROM salesperson')
        .then(rows => {
        salespersons = rows[0].map(row => new Salesperson(row.id, row.first_name, row.last_name, 
                                                          row.department, row.hire_date, row.salary))
        }).catch(error => console.log(error.sqlMessage)); 

    return salespersons;
} 

//get sales person by id
const getSalesPersonById = async (id) => {
    let salespersons;

    //this opens the connection to the DB
    connection.connect();
    //query our database, where the first parameter takes in a string of the SQL query
    // any ? character in the SQL string, will get filled in by values from the values array in order
    await connection.promise().query('SELECT * FROM salesperson WHERE id = ?', [id])
        .then(rows => {
            let sp = rows[0][0];
            if (sp)
                salespersons = new Salesperson(sp.id, sp.first_name, sp.last_name, 
                                               sp.department, sp.hire_date, sp.salary)
        })
    return salespersons;
} 

const createSalesPerson = async (body) => {
    const {first_name, last_name, department, hire_date, salary} = body;

    let newSalesPerson;

    connection.connect();
    await connection.promise().query('INSERT INTO salesperson(first_name, last_name, department, hire_date, salary)' 
                                    + 'VALUES(?, ?, ?, ?, ?)', [first_name, last_name, department, hire_date, salary])
                    .then(async response => newSalesPerson = await getSalesPersonById(response[0].insertId));

    return newSalesPerson;
}

const updatedSalesPerson = async (body, idToUpdate) => {
    const {first_name, last_name, department, hire_date, salary} = body;

    let updatedSalesPerson;

    connection.connect();
    await connection.promise().query('UPDATE salesperson SET first_name = ?, last_name = ?, department = ?, hire_date = ?, salary = ?' +
                                    ' WHERE id = ?', [first_name, last_name, department, hire_date, salary, idToUpdate])
                    .then(async response => updatedSalesPerson = await getSalesPersonById(idToUpdate));

    return updatedSalesPerson;
}

const deleteSalesPerson = async (id) => {
    connection.connect();
    await connection.promise().query('DELETE FROM salesperson WHERE id = ?', [id])
                    .then(response => console.log(response));
}


module.exports = { getAllSalesPersons, getSalesPersonById, createSalesPerson, updatedSalesPerson, deleteSalesPerson };