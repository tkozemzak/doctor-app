const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {

      knex("appts").where("id", req.params.id).then((apptResults)=>{
        res.render("editPage", {appts: apptResults[0]});
        console.log(apptResults[0]);


    })
  },
  edit: function(req, res) {
    knex("appts").where("id", req.params.id).update({
      patient_name: req.body.patient_name,
      date: req.body.date,
      reason: req.body.reason,
      details: req.body.details
    }).then(()=>{
      res.redirect(`/doctorHome/${req.session.user.id}`)
    })

  }




}
