Summerware Socrata Boiler Plate
===

## Socrata Wrapper

The template apps has some very basic routes orangized based on the available pre-prelease data:

    /emergency
    /non-emergency

Given the pre-release data, we need to use Basic auth _and_ provide an app token to make http requests to Socrata.  We've wrapped this process in the lib at:

    socrata = require('./server/util/socrata'),

Usage:

````javascript
var 
    env = require('./server/util/env'),
    config = _.find(require(env.home() + '/.opspark/socrata-app.json'), {'name': 'test'}),
    socrata = require('./server/util/socrata');

var url = _.result(_.find(config.resources, {'name': '311'}), 'url');
var qs = {$limit: 10, issue_type: "Street Flooding/Drainage"};

socrata.get(url, qs).then(function (data) {
  console.log(data);
});
````

## Socrata Query String Options

| Param | Description | Default |
|:------------|:-------------|:---------|
| $select | The set of columns to be returned |All columns |
| $where | Filters the rows to be returned | No filter |
| $order | Specifies the order of results | Unorder |
| $group | Column to group results on, similar to SQL Grouping | No grouping |
| $limit | Maximum number of results to return | 1000 (and a maximum of 1000) |
| $offset | Offset count into the results to start at, used for paging | Starts at 0 |
| $q | Performs a full text search for a value | No search |

## Running the server

1) Open `server.js` and start the app by clicking on the "Run" button in the top menu.

2) Alternatively you can launch the app from the Terminal:

    $ node server.js

3) Once the server is running, open the project in the shape of 'https://projectname-username.c9.io/'.  We recommend popping this tab out into a separate Chrome browser.

## Endpoints

Hit the various endpoints, for example, for my Cloud9 user: 

    https://summerware-template-jfraboni.c9.io/non-emergency?$limit=10&issue_type=Street%20Flooding%2FDrainage

Or:

    https://summerware-template-jfraboni.c9.io/emergency?$limit=10&TypeText=DISCHARGING%20FIREARMS