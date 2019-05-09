
const mysql = require('mysql');

var connection;

module.exports = {

    dbConnection: function () {

        connection = mysql.createConnection({
            host: "127.0.0.1",
            user: "root",
            password: "",
            database: "ecitizen"
        });
        connection.connect(function(err){

            if (err){
                return console.error('error: '+ err.message);
            }
                console.log('Connected to Mysql sever');
        });

        return connection;
    }

    };


