/*
 * A simple Node.js application to read a digital input.
 * Supported Intel IoT development boards are identified in the code.
 *
 * https://software.intel.com/en-us/html5/articles/intel-xdk-iot-edition-nodejs-templates
 */

// keep /*jslint and /*jshint lines for proper jshinting and jslinting
// see http://www.jslint.com/help.html and http://jshint.com/docs
/* jslint node:true */
/* jshint unused:true */

"use strict" ;


var APP_NAME = "IoT Digital Read" ;
var cfg = require("./cfg-app-platform.js")() ;          // init and config I/O resources

console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n") ;   // poor man's clear console
console.log("Initializing " + APP_NAME) ;


// confirm that we have a version of libmraa and Node.js that works
// exit this app if we do not

cfg.identify() ;                // prints some interesting platform details to console

if( !cfg.test() ) {
    process.exitCode = 1 ;
    throw new Error("Call to cfg.test() failed, check console messages for details.") ;
}

if( !cfg.init() ) {
    process.exitCode = 1 ;
    throw new Error("Call to cfg.init() failed, check console messages for details.") ;
}


// configure (initialize) our I/O pins for usage (gives us an I/O object)
// configuration is based on parameters provided by the call to cfg.init()

cfg.io = new cfg.mraa.Gpio(cfg.ioPin,cfg.ioOwner,cfg.ioRaw) ;
cfg.io.dir(cfg.mraa.DIR_IN) ;                   // configure the gpio as an input


// now we are going to read the digital input at a periodic interval
// connect a jumper wire to the sampled digital input and touch it to
// a +3.3V or GND input to change the state read by the digital input

var digIn ;
var periodicActivity = function() {
    digIn = cfg.io.read() ;                     // get the current state of the digital input
    process.stdout.write(digIn?'1':'0') ;       // write an unending stream of 1/0 states to the console
} ;
var intervalID = setInterval(periodicActivity, 1000) ;  // start the periodic read


// type process.exit(0) in debug console to see
// the following message be emitted to the debug console

process.on("exit", function(code) {
    clearInterval(intervalID) ;
    console.log("\nExiting " + APP_NAME + ", with code:", code) ;
}) ;
