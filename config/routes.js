module.exports = function routingConfig(app) {
  app.get('/', function(req, res, next) {
    res.render('angular', { title: 'Bitcoin Scripter' });
  });
}
