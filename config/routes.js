module.exports = function routingConfig(app) {
  app.get('/', function(req, res, next) {
    res.render('app', { title: 'Bitcoin Scripter' });
  });
}
