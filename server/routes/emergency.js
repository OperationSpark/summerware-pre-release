'use strict';

/*
 * Example:
 * 
 * Typical query:
 * https://summerware-template-jfraboni.c9.io/emergency?$limit=10&TypeText=DISCHARGING%20FIREARMS
 * 
 * Then, inside the get endpoint:
 * console.log(req.query) => {$limit: 10, TypeText: "DISCHARING FIREARMS"}
 */
module.exports = function(socrata) {
    var url = socrata.url('911');
    
    return {
        get: function(req, res) {
            console.log('processing emergency get request...');
            
            socrata.get(url, req.query).then(function (data) {
              res.json(200, data);
            });
        }
    };
};
