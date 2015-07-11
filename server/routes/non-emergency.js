'use strict';

/*
 * Example:
 * 
 * Typical query:
 * https://summerware-template-jfraboni.c9.io/non-emergency?$limit=10&issue_type=Street%20Flooding%2FDrainage
 * 
 * Then, inside the get endpoint:
 * console.log(req.query) => {$limit: 10, issue_type: "Street Flooding/Drainage"}
 */
module.exports = function(socrata) {
    console.log('non-emergency route initialized');
    var url = socrata.url('311');
    
    return {
        get: function(req, res) {
            console.log('processing non-emergency get request...');
            
            socrata.get(url, req.query).then(function (data) {
              res.json(200, data);
            });
        }
    };
};
