const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    knex("notes").where("appt_id", req.params.id).then((results) => {
      knex("appts").where("id", req.params.id).then((apptResults) => {
        res.render("viewPage", {
          results: results,
          appts: apptResults[0]
        });
      })
    })
  },

  //cannot get proper appt_id assigned to the note. other than that it works fine.
  createNote: function(req, res) {
    knex("notes").insert({
      doctor_id: req.session.user.id,
      appt_id: req.params.id,
      note_body: req.body.note_body
    }).then(() => {
      res.redirect(`/doctorHome/${req.session.user.id}`)
    })
  },

  status: function(req, res) {
    knex("appts").where("id", req.params.id).update({
      status: req.body.status
    }).then(() => {
      res.redirect(`/doctorHome/${req.session.user.id}`)
    })
  },

  delete: function(req, res) {
    knex("appts").where("id", req.params.id).del()
      .then(() => {
        res.redirect(`/doctorHome/${req.session.user.id}`)
      })
  }



}

// status: function(req, res) {
//   knex("appts").where("id", req.params.id).then((results)=>{
//     if(results[0].status === 'unconfirmed'){
//       knex("appts").where("id", req.params.id).update({
//         status: req.body.set_status
//       })
//     } else if(results[0].status === 'confirmed'){
//       console.log(results[0].status === 'confirmed');
//       knex("appts").where("id", req.params.id).update({
//         status: "completed"
//       })
//     } else {
//       console.log(results[0].status === 'completed');
//
//       knex("appts").where("id", req.params.id).del()
//     }
//   }).then(()=>{
//     res.redirect(`/doctorHome/${req.session.user.id}`)
//   })
//
// <% if(appts.status === "unconfirmed"){ %>
//   <a href='/viewPage/status/<%=appts.id%>' name="status">Confirm Appointment</a>
// <% } else if(appts.status === "confirmed"){%>
//     <a href='/viewPage/status/<%=appts.id%>'>Mark as Completed</a>
//   <% } else { %>
//     <a href='/viewPage/status/<%=appts.id%>'>Delete Appointment</a>
//     <% } %>
