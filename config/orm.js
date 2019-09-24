var connection = require('./connection');

var tableName = "burgers_tb";

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

var orm = {
    selectAll: function (tableInput, cb) {
        var q = "SELECT * FROM " + tableInput + ";";
        connection.query(q, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function (table, cols, vals, cb) {
        var q = "INSERT INTO " + table;

        q += " (";
        q += cols.toString();
        q += ") ";
        q += "VALUES (";
        q += printQuestionMarks(vals.length);
        q += ") ";

        console.log(q);

        connection.query(q, vals, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    updateOne: function (table, objColVals, condition, cb) {
        var q = "UPDATE " + table;

        q += " SET ";
        q += objToSql(objColVals);
        q += " WHERE ";
        q += condition;

        console.log(q);
        connection.query(q, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    delete: function(table, condition, cb) {
        var q = "DELETE FROM " + table;
        q += " WHERE ";
        q += condition;
    
        connection.query(q, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
    }
};

module.exports = orm;