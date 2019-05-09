
const conn = require('./db');
console.log("Selecting from DB");
var connection;
var sql;

function callDb(sql) {

    try {

        connection = conn.dbConnection();
        
connection.query(sql, (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    console.log(results);
  });
        connection.end();


    } catch (err) {
        console.log(err);
    }
}

 sql = 'SELECT * FROM process_status';

callDb(sql);
