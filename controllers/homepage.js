const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    knex("doctors").then((results)=>{
      res.render("homepage", {results: results});

    })
  },

}
