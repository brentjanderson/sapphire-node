# Node Backbone Sample Project #

It is a sample project for a Node/HTML5 application optimized separately for desktop browsers (web), generic mobile platforms using jQuery Mobile (jquerymobile) and iPhone (iphone). Its server side project is based on [robrighter / node-boilerplate](https://github.com/robrighter/node-boilerplate) and its client side projects are based on [ccoenraets / backbone-directory](https://github.com/ccoenraets/backbone-directory).

### [Try It Here](http://nodebackbone-vinkaga.dotcloud.com/) ###
Try it out for different devices using Google Chrome's built-in user-agent switcher. [Read more.](http://www.learnwithnirab.com/2012/01/how-to-use-google-chromes-built-in-user.html)

## Goals ##
1. Quickly get started with a Node/Backbone application
2. Optimize separately for browsers, iphone and other mobile devices
3. Serve pages optimized for the client using the user agent string
4. Serve assets compressed in production but uncompressed during development
5. Chat capability (enabled on browsers)
6. BDD tests
7. Easily deployable on a Joyent Node SmartMachine

### Status ###
1. Browser version (/web) working
2. iPhone version (/iphone) working
3. Android/other mobile version (/jquerymobile) working
4. BDD tests - need more tests

## Technologies ##
### Server ###
1. Node
2. Express - web framework and router
3. Mongoose/MongoDB - for persistence
4. Redis - for sessions
5. Socket.io - for chat etc
6. Jade - only for error pages
7. EJS - for serving production/development index
8. Mocha - BDD testing framework

### Client ###
1. HTML5
2. Backbone
3. jQuery
4. Underscore
5. Twitter Bootstrap (on browsers)
6. jQuery Mobile (on generic mobile platforms)

## The Application ##

It is a simple Employee Directory application that allows you to look up employees by name, view the details of an employee, and navigate up and down the Org Chart by clicking the employee’s manager or any of his/her direct reports.

There are four versions of the application available in this repository:

1. Backbone.js + Twitter Bootstrap (located in the [/web](https://github.com/vinkaga/node-backbone/tree/master/web) directory). This version adds primitive chat to the pages.
	- Read more about original MySQL version [here](http://coenraets.org/blog/2012/02/sample-app-with-backbone-js-and-twitter-bootstrap/)
2. Backbone.js + jQuery Mobile (located in the [/jquerymobile](https://github.com/vinkaga/node-backbone/tree/master/jquerymobile) directory).
	- Read more about original MySQL version [here](http://coenraets.org/blog/2012/03/employee-directory-sample-app-with-backbone-js-and-jquery-mobile/)
3. Backbone.js + native-looking iPhone skins (located in the [/iphone](https://github.com/vinkaga/node-backbone/tree/master/iphone) directory).
	- Read more about original MySQL version [here](http://coenraets.org/blog/2012/03/crafting-native-looking-ios-apps-with-html-backbone-js-and-phonegap/)
4. Backbone.js + native-looking iPhone skins and a local database implementation (located in the [/localdb](https://github.com/vinkaga/node-backbone/tree/master/localdb) directory).
    - NOT DEBUGGED
	- Read more about original MySQL version [here](http://coenraets.org/blog/2012/04/building-mobile-apps-with-html-and-a-local-database/)
	- Try original MySQL version [here](http://coenraets.org/backbone/directory/localdb/)

### Set Up ###

1. Install and run MongoDB
2. Install and run Redis.io
3. Edit config.js if you are running MongoDB or Redis.io from another machine or non-default port
4. Start server by typing "node server.js"

### Trying Out ###
You can try out different versions of this application using Google Chrome's built-in user-agent switcher. [Read more.](http://www.learnwithnirab.com/2012/01/how-to-use-google-chromes-built-in-user.html)