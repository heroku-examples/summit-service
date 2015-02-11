// Modules

var logger = require('logfmt');
var jackrabbit = require('jackrabbit');
var weather = require('weather-js');

// Config

var RABBIT_URL = process.env.CLOUDAMQP_URL || 'amqp://localhost';
var SERVICE = 'weather.get';

// Startup

logger.log({ type: 'info', message: 'starting' });

var broker = jackrabbit(RABBIT_URL, 1)
  .once('connected', onBroker)
  .once('disconnected', onBrokerLost);

// Provide the service

function handle(message, respond) {
  logger.log({ type: 'info', message: 'request', service: SERVICE });
  weather.find({ search: message.zip, degreeType: 'F' }, function onWeather(err, result) {
    var temp = result && result[0] && result[0].current.temperature;
    var ok = !err && result;
    var res = ok ? "It's currently " + temp + " degrees in " + message.zip : undefined;
    logger.log({ type: 'info', message: 'response', service: SERVICE, response: res });
    respond(res);
  });
}

// Glue

function onBroker() {
  logger.log({ type: 'info', message: 'connected', service: 'broker' });
  broker.create(SERVICE, register);
}

function register() {
  logger.log({ type: 'info', message: 'registering', service: SERVICE });
  broker.handle(SERVICE, handle);
}

function onBrokerLost() {
  loggerl.log({ type: 'error', message: 'disconnected', service: 'broker' });
  process.exit();
}
