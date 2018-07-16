const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    knex("doctors").where("id", req.params.id).then((results) => {
      knex("appts").where("doctor_id", req.params.id).then((apptResults) => {
        res.render("doctorHome", {
          results: results[0],
          appts: apptResults
        });

      })
    })
  },


}
