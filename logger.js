// Uncomment this line to demonstrate Module Wrapper function in NodeJS
// var x=;
var url = "http://mylogger.io/log";

function log(message) {
    console.log(message);
}

module.exports.log = log;
module.exports.url = url;