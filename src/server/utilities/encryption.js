var bcrypt = require('bcrypt');

exports.hashPwd = function(pwd) {
  bcrypt.genSalt(10, function(err, salt) {
  	bcrypt.hash(pwd,salt,function(err,has) {
  		return hash;
  	});
  });
}