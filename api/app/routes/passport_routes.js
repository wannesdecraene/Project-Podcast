// API Loggin Routes
const db = require('../models')
module.exports = (app, passport) => {

    // process the login form
    app.post("/login", passport.authenticate('local-login'), (req, res) => {
        res.json(req.user);
      });
  
      // handle logout
      app.post("/logout", (req, res) => {
        req.logOut();
        res.send(200);
      })
  
      // loggedin
      app.get("/loggedin", (req, res) => {
        res.send(req.isAuthenticated() ? req.user : '0');
      });
  
      // signup
      app.post("/signup", (req, res) => {
        db.User.findOne({
          username: req.body.username
        }, (err, user) => {
          if (user) {
            res.json(null);
            return;
          } else {
            var newUser = new db.User();
            newUser.username = req.body.username.toLowerCase();
            newUser.password = newUser.generateHash(req.body.password);
            newUser.save((err, user) => {
              req.login(user, (err) => {
                if (err) {
                  return next(err);
                }
                res.json(user);
              });
            });
          }
        });
      });
};