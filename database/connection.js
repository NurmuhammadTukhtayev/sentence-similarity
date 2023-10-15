const mysql = require("mysql2")

module.exports = mysql.createPool({
    host: '212.86.108.223',
    user: 'tech_awards',
    password: 'Tech_awards@2023',
    database: 'tech_award',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    multipleStatements: true
});