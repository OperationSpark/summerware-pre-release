'use strict';

var 
  _ = require('lodash'),
  http = require('http'),
  env = require('./server/util/env'),
  path = require('path'),
  express = require('express'),
  app = module.exports = express(),
  server = http.createServer(app);

// TODO: Using express.js 3.x, switch to 4.x? //
app.set('config', _.find(require(env.home() + '/.opspark/socrata-app.json'), {'name': 'pre-release'}));
  
app.use(express.static(path.resolve(__dirname, 'client')));
require('./server/routes')(app);

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("server listening at", addr.address + ":" + addr.port);
});
