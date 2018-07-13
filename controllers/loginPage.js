const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    res.render("loginPage");
  },

  login: function(req, res){
    knex('doctors').where('email', req.body.email).then((results)=>{
      let user = results[0];
      if(user.password === req.body.password){
        req.session.user = user;

        res.redirect(`/doctorHome/${user.id}`);
      } else {
        res.redirect("/loginPage");
      }
    })
  },
  register: function(req, res){
    knex('doctors').insert({
      name: req.body.name,
      email: req.body.email,
      bio: req.body.bio,
      img_url: req.body.img_url,
      password: req.body.password
    }).then(()=>{
      res.redirect('/loginPage')
    })
  },
}
