var connection = require('./connection.js');

var orm = {
    selectAll: function(tableName){
        var queryString = 'SELECT * FROM' + tableName + ';';
        connection.query(queryString, function(err, result){
            if (err) throw err;
           
            console.log(result);
        })
    },
    insertOne: function(colName1, colName2, colValue1, colValue2){
        var queryString = 'INSERT INTO (?, ?) VALUES (?, ?)';
        connection.query(queryString, [colName1, colName2, colValue1, colValue2], function(err, result){
            if (err) throw err;
           
            console.log(result);
        })
    },
    updateOne: function(table, colName, colValue, colname, colvale){
        //update burgers table, set devoured = true where burger name = burger input
        var queryString = 'UPDATE ? SET ? = ? WHERE ? = ?';
        connection.query(queryString, [table, colName, colValue, colname, colvale], function(err, result){
            if (err) throw err;
           
            console.log(result);
        })
    }
}

module.exports = orm;