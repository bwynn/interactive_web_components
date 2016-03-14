var path = require('path');

module.exports = function(app) {
  var weather = require('./controllers/weather_controller');
  var words = require('./controllers/words_controller');

  app.get('/api/weather', weather.getWeather);
  //app.get('/api/words', words.getWords);

  // front end routing
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './public/views/rich_ui.html'));
  });
};
