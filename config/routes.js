//Update the name of the controller below and rename the file.
const homepage = require("../controllers/homepage.js")
module.exports = function(app){

const bookingPage = require("../controllers/bookingPage.js")

const loginPage = require("../controllers/loginPage.js")

const doctorHome = require("../controllers/doctorHome.js")

const confirmed = require("../controllers/confirmed.js")

const completed = require("../controllers/completed.js")

const viewPage = require("../controllers/viewPage.js")

//home
  app.get('/', homepage.index);

  //booking
  app.get('/bookingPage/:id', bookingPage.index);
  app.post('/bookingPage/:id', bookingPage.create);

app.use(authenticateUser)
  //login/register
  app.get('/loginPage', loginPage.index);
  app.post('/login', loginPage.login);
  app.post('/register', loginPage.register)

  //doctorHome
  app.get('/doctorHome/:id', doctorHome.index);

  //Confirmed
  app.get('/confirmed/:id', confirmed.index)

  //Completed
  app.get('/completed/:id', completed.index)

  //viewPage/notes
  app.get('/viewPage/:id', viewPage.index);
  app.post('/viewPage', viewPage.createNote);
}








function authenticateUser(req, res, next){
  if(!req.session.user){
    res.redirect('/');
  } else {
    next();
  }
}
