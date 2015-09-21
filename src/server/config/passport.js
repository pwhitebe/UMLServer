var passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;
var properties = require('../lib/envProperties');

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : properties.mysqlhost,
    user     : properties.mysqluser,
    password : properties.mysqlpassword,
    database : properties.mysqldatabase
  }
});

module.exports = function() {

  // passport.use(new LocalStrategy(
  //   function(username, password, done) {
  //     User.findOne({username:username}).exec(function(err, user) {
  //       if(user && user.authenticate(password)) {
  //         return done(null, user);
  //       } else {
  //         return done(null, false);
  //       }
  //     })
  //   }
  // ));
  
  //====================================================================
  // passport session setup
  // required for persistent login session
  //====================================================================

  passport.serializeUser(function(user, done) {
    if(user) {
      done(null, user._id);
    }
  });

  passport.deserializeUser(function(id, done) {
    knex.select().table('user').then(function(err,user){
      if(user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  });

  //====================================================================
  // local login
  //====================================================================

  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function(email, password, done) {
    knex.select().from('user').where({email:email}).then(function(err,user) {
      if(user && user.authenticate(password)) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  }));
}