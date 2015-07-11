'use strict';

/*
 * Example:
 * 
 * Typical query:
 * https://summerware-template-jfraboni.c9.io/use-of-force?$limit=10&ForceType=Taser
 * 
 * Then, inside the get endpoint:
 * console.log(req.query) => {$limit: 10, ForceType: "Taser"}
 */
module.exports = function(socrata) {
    console.log('use-of-force route initialized');
    var url = socrata.url('use-of-force');
    
    return {
        get: function(req, res) {
            console.log('processing use-of-force get request...');
            
            socrata.get(url, req.query).then(function (data) {
              res.json(200, data);
            });
        }
    };
};
