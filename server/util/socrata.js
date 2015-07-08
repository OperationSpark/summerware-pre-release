'use strict';

var
  _ = require('lodash'),
  rp = require('request-promise');
  

module.exports = function(config) {
    var auth = "Basic " + new Buffer(config.username + ":" + config.password).toString("base64");
    
    function makeOptions(url, qs) {
        return {
          url: url,
          headers: {
            "X-App-Token" : config.appToken,
            "Authorization" : auth
          },
          qs: qs
       };
    }
    
    return {
        config: config,
        
        get: function (url, qs) {
            return rp(makeOptions(url, qs))
                .then(function (body) {
                    return JSON.parse(body);
                })
                .catch(console.error);
        },
        
        url: function(key) {
            return _.result(_.find(config.resources, {'name': key}), 'url');
        }
    };
};
