var orm = require("../config/orm.js");

//selectAll function
var burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  //insertOne function
  insertOne: function (name, cb) {
    orm.insertOne("burgers", "burger_name", name, function (res) {
      cb(res);
    });
  },
  //updateOne function
  updateOne: function (id, cb) {
    orm.updateOne("burgers", "devoured", true, "id", id, function (res) {
      cb(res);
    });
  }
}

//Export
module.exports = burger;
