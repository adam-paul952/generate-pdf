const mysql = require("mysql2");

/**
 * @file db.js
 * @description Creates the connection to the MySQL database
 * @module connection
 */

/**
 * Connection object with env variables from .env file
 */
const connection = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
});

connection.connect((error) => {
  if (error) throw error;
  console.log(`Successfully connected to database`);
});

module.exports = connection;
