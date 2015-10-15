//references to controllers go here
var index = require('../controllers/index');
var mmwrCase = require('../controllers/mmwrcase');
var umlserve = require('../controllers/umlserve');
// var users = require('../controllers/users');
// var auth = require('./auth');
// var mongoose = require('mongoose'),
//     User = mongoose.model('User');



module.exports = function(app) {

  // app.get('/api/users', auth.requiresRole('admin'), users.getUsers);
  // app.post('/api/users', users.createUser);
  // app.put('/api/users', users.updateUser);
  app.get('/api/umlserve/CuisByNSTR/:nstr',umlserve.getCUISByNSTR);
  app.get('/api/umlserve/getDefinitionsByAUI/:aui',umlserve.getDefinitionsByAUI);
  // app.get('/api/mmwrcase/currentCase/',mmwrCase.getCurrentCase);
  // app.get('/api/mmwrcase/getCasesByStatus/:devStatus/:displayStatus',mmwrCase.getCasesByStatus);
  // app.get('/api/mmwrcase/getCaseById/:caseId',mmwrCase.getCaseById);
  // app.get('/api/mmwrcase/getAllAvailCases/',mmwrCase.getAllAvailCases);
  // app.get('/api/mmwrcase/checkQuestionExist/:caseId/:questionId',mmwrCase.checkQuestionExist);
  // app.get('/api/mmwrcase/checkAnswerExist/:caseId/:questionId/:answerId',mmwrCase.checkAnswerExist);
  // app.get('/api/mmwrcase/checkCaseExist/:caseId',mmwrCase.checkCaseExist);
  // app.get('/api/mmwrcase/getAnswerStatistic/:caseId/:questionId',mmwrCase.getAnswerStatistic);
  // app.get('/api/mmwrcase/getDevStatus',mmwrCase.getDevStatus);
  // app.get('/api/mmwrcase/getDisplayStatus',mmwrCase.getDisplayStatus);
  // app.get('/api/mmwrcase/getRating/:caseId', mmwrCase.getRating);
  // app.get('/api/mmwrcase/getTopRatedCases/:numberToGet', mmwrCase.getTopRatedCases);
  
  // app.post('/api/mmwrcase/updateHitCounter/:caseId/:questionId/:answerId', mmwrCase.updateHitCounter);
  // app.post('/api/mmwrcase/createCase',mmwrCase.createCase);
  // app.post('/api/mmwrcase/updateCase',mmwrCase.updateCase);
  // app.post('/api/mmwrcase/createQuestionAnswer',mmwrCase.createQuestionAnswer);
  // app.post('/api/mmwrcase/createQuestion',mmwrCase.createQuestion);
  // app.post('/api/mmwrcase/createAnswer',mmwrCase.createQuestion);
  // app.delete('/api/mmwrcase/deleteCase/:caseId', mmwrCase.deleteCase);
  // app.post('/api/mmwrcase/updateRating',mmwrCase.updateRating);



  // app.get('/partials/*', function(req, res) {
  //   res.render('../../public/app/views/' + req.params);
  //});

  // app.post('/login', auth.authenticate);

  // app.post('/logout', function(req, res) {
  //   req.logout();
  //   res.end();
  // });

  app.all('/api/*', function(req, res) {
    res.send(404);
  });

  //catchall for everything not defined above
  app.get('/*',  function(req, res) {
    res.send(404);
  });
}