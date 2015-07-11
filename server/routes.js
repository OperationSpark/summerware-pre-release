'use strict';

module.exports = function(app) {
    console.log('initializing express routes...');
    
    var 
        socrata = require('./util/socrata')(app.get('config')),
        emergency = require('./routes/emergency')(socrata),
        nonEmergency = require('./routes/non-emergency')(socrata),
        fieldInterviews = require('./routes/field-interviews')(socrata),
        useOfForce = require('./routes/use-of-force')(socrata);
    
    app.get('/emergency', emergency.get);
    app.get('/non-emergency', nonEmergency.get);
    app.get('/field-interviews', fieldInterviews.get);
    app.get('/use-of-force', useOfForce.get);
    
    app.get('*', function (req, res) {
        res.send('Bad Request');
    });
  
};