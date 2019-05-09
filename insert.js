const conn = require('./db');
console.log("Inserting in DB");
var connection;
var sql = `INSERT INTO process_status(name,status) VALUES ('Peter Njoroge', 'updated')`;

function insertDb(sql) {

    try {

        connection = conn.dbConnection();
        
connection.query(sql, (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    console.log(results.affectedRows);
  });
        connection.end();


    } catch (err) {
        console.log(err);
    }
}


insertDb(sql);
