//import the ORM and create interactive functions

var orm = require('../config/orm.js');

var burger = {
  selectAll: function(cb)
  {
      orm.selectAll("burgers", function(res)
      {
          cb(res);
      });
  },
  insertOne: function(name, cb)
  {
      orm.insertOne("burgers", [
        "burger_name", "devoured"
      ], [
        name, false
      ], cb);
  },
  updateOne: function(id, cb)
  {
    var condition = "id=" + id;
    orm.updateOne("burgers", { devoured: true
  }, condition, cb);
},
deleteOne: function(id, cb)
{
  var condition = "id=" + id;
  orm.deleteOne("burgers", { devoured: true
    }, condition, cb);
  },
};
//export database for controllers
module.exports = burger;
