var knex = require('knex')({
	client:'mysql',
	connection: {
		host: properties.mysqlhost,
		user: properties.mysqluser,
		password: properties.mysqlpassword,
		database: properties.mysqldatabase,
		charset: 'utf8'
	}
});

module.exports require('bookshelf')(knex);