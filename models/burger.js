var orm = require('../config/orm');

var tableName = "burgers_tb";

var burger = {
    selectAll: function (cb) {
        orm.selectAll(tableName, function (res) {
            cb(res);
        });
    },
    insertOne: function (cols, vals, cb) {
        orm.insertOne(tableName, cols, vals, function (res) {
            cb(res);
        });
    },
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne(tableName, objColVals, condition, function (res) {
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete("burgers_tb", condition, function(res) {
          cb(res);
        });
      }

};

module.exports = burger;