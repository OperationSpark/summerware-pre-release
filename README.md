Summerware Pre-Release Boilerplate
===

## Socrata Wrapper

The template app has some very basic routes orangized by the available pre-prelease data:

    /emergency
    /non-emergency

More resources to follow shortly...

Given that the pre-release data is private, we need to use Basic auth _and_ provide an app token to make http requests to Socrata.  We've wrapped this process in the lib at:

    socrata = require('./server/util/socrata'),

**NOTE:** You will require a config file to be located at:

    ~/.opspark/socrata-app.json
    
Please contact Operation Spark for this super secret information.

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

## Start Developing

1. Fork this repo on GitHub
2. From your forked GitHub repo, using the SSH clone url option, clone into a new workspace on Cloud9 (c9.io).
3. Once in your workspace, from the root directory, run the command:

        npm install

4. Next, cd into the client directory, and run the command:

        bower install
    
5. Finally, upload the socrata-app.json config file (ask Operation Spark in our Slack room), and move this file to:

        ~/.opspark/socrata-app.json

## Running the Server

This is a client/server app, the server is written in express.js and currently has a brief angular.js client.  To run the server and develop:

1) Open `app.js` and start the app by clicking on the "Run" button in the top menu.

2) Alternatively you can launch the app from the Terminal:

    $ node app.js

3) Once the server is running, open the project in the shape of 'https://projectname-username.c9.io/'.  We recommend popping this tab out from Cloud9 into a separate Chrome browser so that you can make use of the Chrome debugger tools!

4) Restart or Stop and Start the server on iterations.

## Endpoints

Hit the various endpoints, for example, for my Cloud9 user: 

    https://summerware-template-jfraboni.c9.io/non-emergency?$limit=10&issue_type=Street%20Flooding%2FDrainage

Or:

    https://summerware-template-jfraboni.c9.io/emergency?$limit=10&TypeText=DISCHARGING%20FIREARMS