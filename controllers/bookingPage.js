const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    knex("doctors").where("id", req.params.id).then((results)=>{
      res.render("bookingPage", {results: results[0]});

    })
  },

  create: function(req, res) {
    knex("appts").insert({
      doctor_id: req.params.id,
      patient_name: req.body.patient_name,
      date: req.body.date,
      reason: req.body.reason,
      details: req.body.details,
      status: "unconfirmed"
    }).then(()=>{
      res.redirect("/")
    })
  }

}
