const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    knex("notes").where("appt_id", req.params.id).then((results)=>{
      knex("appts").where("id", req.params.id).then((apptResults)=>{
        res.render("viewPage", {results: results, appts: apptResults[0]});

      })
    })
  },
  createNote: function(req, res) {
    knex("appts").then((results)=>{
      console.log(results);
      knex("notes").insert({
        doctor_id: req.session.user.id,
        appt_id: results[0].id,
        note_body: req.body.note_body

    })

    .then(()=>{
      res.redirect(`/doctorHome/${req.session.user.id}`)
    })
    })
  }


}
