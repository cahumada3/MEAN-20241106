require('dotenv').config();

const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

// we're sending back the whole Promise and unpacking the success or failure in the controller
const getAllSales = async () => {
    connection.connect();
    return await connection.promise().query('SELECT * FROM sale');
} 

const createSale = async (sale) => {
    connection.connect();
    return await connection.promise().query('INSERT INTO sale(customer_first_name, customer_last_name, date, total, salesperson_id) '
                                          + 'VALUES(?,?,?,?,?)', [ sale.customer_first_name, sale.customer_last_name, sale.date, sale.total, sale.salesperson_id ]);
}

const updateSale = async (id, sale) => {
    connection.connect();
    return await connection.promise().query('UPDATE sale SET id = ?, customer_first_name = ?, customer_last_name = ?, date = ?, total = ?, salesperson_id = ? '
                                          + 'WHERE id = ?',
        [ sale.id, sale.customer_first_name, sale.customer_last_name, sale.date, sale.total, sale.salesperson_id, id ]);
}

const deleteSale = async (id) => {
    connection.connect();
    return await connection.promise().query('DELETE FROM sale WHERE id = ?', [ id ]);
}


module.exports = { getAllSales, createSale, updateSale, deleteSale };