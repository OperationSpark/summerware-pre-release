'use strict';

/*
 * Example:
 * 
 * Typical query:
 * https://summerware-template-jfraboni.c9.io/field-interviews?$limit=10&StopDescription=Flagged%20Down
 * 
 * Then, inside the get endpoint:
 * console.log(req.query) => {$limit: 10, ForceType: "Taser"}
 */
module.exports = function(socrata) {
    console.log('field-interviews route initialized');
    var url = socrata.url('field-interviews');
    
    return {
        get: function(req, res) {
            console.log('processing use-of-force get request...');
            
            socrata.get(url, req.query).then(function (data) {
              res.json(200, data);
            });
        }
    };
};
