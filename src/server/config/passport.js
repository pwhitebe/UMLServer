var passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;
var db = require('../lib/dbConnection');

module.exports = function() {
  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
    function(email, password, done) {
      // User.findOne({email:email}).exec(function(err, user) {
      //   if(user && user.authenticate(password)) {
      //     return done(null, user);
      //   } else {
      //     return done(null, false);
      //   }
      // })
      db.query('select * from user where email = "' + email + '"' , function(err, rows) {
        console.log(rows);
        if(rows[0]  && password === rows[0].hash_password) {
          return done(null, rows[0]);
        } else {
          return done(null,false);
        }
      });
    }
  ));

  passport.serializeUser(function(user, done) {
    if(user){
      done(null, user.user_id);
    }
  });

  passport.deserializeUser(function(id, done) {
    db.query("select * from user where user_id = "+id, function(err,rows) {
      done(err, rows[0]);
    });
  });

}