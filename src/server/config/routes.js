var umlserve = require('../controllers/umlserve');

module.exports = function(app) {

  app.get('/api/umlserve/CuisByNSTR/:nstr',umlserve.getCUISByNSTR);
  app.get('/api/umlserve/DefinitionsByAUI/:aui',umlserve.getDefinitionsByAUI);
  

  app.all('/api/*', function(req, res) {
    res.send(404);
  });

  //catchall for everything not defined above
  app.get('/*',  function(req, res) {
    res.send(404);
  });
}