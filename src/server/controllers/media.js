
var db = require('../lib/dbConnection');
var fs  = require('fs');
var config = require('../config/config');
var _ = require('lodash');


exports.uploadFile = function(req,res) {
	
	console.log('req ',req)
	var modifiedPath = req.files.file.path;
	// var re = new RegExp('[\/][i][m][g]\s*([^\n\r]*)');
	modifiedPath = modifiedPath.substring(modifiedPath.indexOf('/img'));
	console.log('modified path ' + modifiedPath);


	var uploadDoc = {};
	 	uploadDoc.case_id = req.body.case_id;
		uploadDoc.image_id = req.body.image_id;
		uploadDoc.sequence_id = req.body.sequence_id;
		uploadDoc.image_url = modifiedPath;
		uploadDoc.featured = req.body.featured;
		uploadDoc.title	= req.body.title;
		uploadDoc.caption = req.body.caption;
	//console.log('Uploaded Doc**', uploadDoc);
	db.query('insert into temp_image set ? ',[uploadDoc],function(err,insertResult){
		if(err) {
			console.log(err);
			res.send(err);
		} else {
				//console.log(result);
				res.send(uploadDoc);
		}
	})
};

exports.getFile = function(req,res) {
	var collection = mongo.mongodb.collection('uploads');
	var partialId = new RegExp('^'+req.params.id.split('-')[0]);
	collection.find({'eventId': {$regex: partialId}}).toArray(function(err,fileDoc){
		// console.log('before sort:', fileDoc);
		fileDoc = _.sortBy(fileDoc, 'date');
		fileDoc = fileDoc.reverse();
		// console.log('after sort:', fileDoc);
        res.send(fileDoc);
	});
};

exports.deleteFile = function(req,res) {
	var Id = req.body._id;
	var filePath = config.rootPath+'/public/'+req.body.filePath;
	var collection = mongo.mongodb.collection('uploads');
	//console.log(req.body);
	if (Id) { 

		collection.remove({
			"_id": ObjectID(Id)
		}, function(err, result) {
			if (err) {
				res.send(err);
				console.log(err);
			} else {
				//console.log("document deleted", result);
				fs.unlinkSync(filePath);
				res.send({
					success: true,
					result:result
				});
			}
		});
	}
};

exports.updateFileChecked = function(req,res) {
	var collection = mongo.mongodb.collection('uploads');
	//console.log(req.body);
	var files = req.body;

	for(var i = 0; i < files.length; i++) {

		var Id = req.body[i]._id;
		console.log(Id);
		collection.update({'_id':ObjectID(Id)}, { $set: {checked:req.body[i].checked}},function(err,result) {
			if(err) {
				res.send(err);
				console.log(err);
			} else {
				console.log("image checked updated", result);
				res.send({
					success: true,
					result: result
				});
			}

			
		});
	}
}