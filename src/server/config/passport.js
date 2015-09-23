var passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;
var properties = require('../lib/envProperties');

var db = require('../lib/dbConnection');

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
  
  //====================================================================
  // local login
  //====================================================================

  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function(email, password, done) {
    knex.select().from('user').where({email:email})
    .then(function(user) {
      //console.log(user);
      if(user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    })
    .catch(function(e){
      return done(null,false);
      console.error(e);
    });
  }));

  //====================================================================
  // passport session setup
  // required for persistent login session
  //====================================================================

  passport.serializeUser(function(user,done) {
      done(null, user[0].user_id);
  });

  passport.deserializeUser(function(id,done) {
    knex.select().from('user').where({user_id:id})
      .then(function(user) {
        if(user) {
          return done(null, user[0]);
        }
      })
      .catch(function(e){
        return done(null, false);
      });
    // db.query("select * from user where user_id ="+id, function(err, user) {
    //     done(err, user[0]);
    // });
  });



}