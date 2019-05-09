
let mysql = require('mysql');
let connection =mysql.createConnection(
{
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ecitizen'
}
);

//Connect to the Database

connection.connect(function(err){
if (err){
    return console.error('error: '+ err.message);
}
    console.log('Connected to Mysql sever');
});

//Insert into the database

let sql = `INSERT INTO process_status(name,status) VALUES ('kimani njoroge', 'processing')`;

connection.query(sql);

module.exports = connection;

//Disconnect gracefully

connection.end(function(err){
    if (err){
        return console.error('error: '+ err.message);
    }
        console.log('Disconnected to Mysql sever');
    });
    