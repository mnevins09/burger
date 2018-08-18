var connection = require('../config/connection.js');

var orm = {
  selectAll: function (table, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function (err, res) {
      if (err) throw (err);
      cb(res);
    });
  },
  insertOne: function (table, column, value, cb) {
    var queryString = "INSERT INTO ?? (??) VALUES (?)";
    connection.query(queryString, [table, column, value], function (err, res) {
      if (err) throw (err); 
      cb(res);
    });
  },

  updateOne: function (table, tfVar, tfValue, idVar, idValue, cb) {
    var queryString = "UPDATE ?? SET ?? = ?  WHERE ?? = ?";

    connection.query(queryString, [table, tfVar, tfValue, idVar, idValue], function (err, res) {
      if (err) throw (err); 
      cb(res);
    });
  }
};

//Export
module.exports = orm;