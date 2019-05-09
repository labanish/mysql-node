const conn = require('./db');
console.log("Updating DB");
var connection;
var sql = `UPDATE process_status
SET status = ?
WHERE id = ?`;

let data = ['completed', 3];

function updateDb(sql) {

    try {

        connection = conn.dbConnection();
        
connection.query(sql, data, (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    console.log(`Rows affected `+ results.affectedRows);
  });
        connection.end();


    } catch (err) {
        console.log(err);
    }
}

updateDb(sql);