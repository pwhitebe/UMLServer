var mysql      = require('mysql');
var properties = require('../lib/envProperties');
var connection = mysql.createConnection({
  host     : properties.mysqlhost,
  user     : properties.mysqluser,
  password : properties.mysqlpassword,
  database : properties.mysqldatabase,
  port     : properties.port,
  multipleStatements : true
});

exports.getCUISByNSTR = function(req,res) {
	//connection.connect();
	var nstr = req.params.nstr;
	//var sqlStm = 'SELECT * FROM case_main where development_status = ? and display_status = ?',[devStatus,displayStatus];
	//console.log(sqlStm)
	if(true){
		connection.query('select distinct mrx.cui, mrh.AUI, mrc.* from MRXNS_ENG mrx join mrhier mrh on mrx.cui = mrh.cui and mrh.sab = \'NCI\' join mrconso mrc on mrh.AUI = mrc.AUI  where mrx.NSTR like  ?',[nstr],function(err,rows){
  		if(err) {
  			res.send(err);
  		} 
  		else {

  		 	   res.send(rows);
 		 	}
		});
	}
	else
	{
		console.log("DB connection failed");
	}
//	connection.end();

}

exports.getDefinitionsByAUI = function(req,res) {
	//connection.connect();
	var aui = req.params.aui;
	//var sqlStm = 'SELECT * FROM case_main where development_status = ? and display_status = ?',[devStatus,displayStatus];
	//console.log(sqlStm)
	if(true){
		connection.query('select cui, aui, atui, satui, sab, def, suppress, cvf  from mrdef where aui = ?',[aui],function(err,rows){
  		if(err) {
  			res.send(err);
  		} 
  		else {

  		 	   res.send(rows);
 		 	}
		});
	}
	else
	{
		console.log("DB connection failed");
	}
//	connection.end();

}