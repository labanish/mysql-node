const conn = require('./db');
console.log("Deleting a Row");
var connection;
var sql = `DELETE FROM process_status WHERE id = ?`;

let data = 8;

function deleteRowDb(sql) {

    try {

        connection = conn.dbConnection();
        
connection.query(sql, data, (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    console.log(`Deleted Row(s): `+ results.affectedRows);
  });
        connection.end();


    } catch (err) {
        console.log(err);
    }
}

deleteRowDb(sql);