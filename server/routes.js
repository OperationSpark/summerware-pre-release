'use strict';

module.exports = function(app) {
    console.log('initializing express routes...');
    
    var 
        socrata = require('./util/socrata')(app.get('config')),
        emergency = require('./routes/emergency')(socrata),
        nonEmergency = require('./routes/non-emergency')(socrata);
    
    app.get('/emergency', emergency.get);
    app.get('/non-emergency', nonEmergency.get);
    
    app.get('*', function (req, res) {
        res.send('Bad Request');
    });
  
};