var service = require('./services/service');

service.hello(function() {
  console.log('called callback');
});