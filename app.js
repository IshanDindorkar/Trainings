
// First function in NodeJS app ...
/* function sayHello(name) {
    console.log("Hello " + name + "! Welcome to training session for NodeJS & ExpressJS");
}

sayHello("Ishan"); */

// Global objects ...
// console.log(global);

/* var message = "";
console.log(global.message); // this will return "undefined" as o/p
 */

// Modules ...
// console.log (module);

// Creating a new module ...
/* const logger = require("./logger");
logger.log("message");
 */

// Module Wrapper function ...
// (function (exports, require, module, __filename, __dirname) { }
/* console.log(exports);
console.log(module);
console.log(require);
console.log(__filename);
console.log(__dirname);
 */

// In-built modules -> https://nodejs.org
// Path module ...
/* const path = require("path");
const pathObj = path.parse(__filename);

console.log(pathObj); */

// OS module ...
/* const os = require("os");
const freeMem = os.freemem();
const totalMem = os.totalmem();

// Template string example (ECMA6 standard)
console.log(`Free Memory: ${freeMem} Total Memory: ${totalMem}`); */

// File System module ...
/* const fs = require("fs");
fs.readdir("./", (err, files) => {
    if (err) console.log("Error:" + err);
    console.log(files);
})
*/

// Events module ...
/* const EventEmitter = require("events");
const emitter = new EventEmitter();

// Register listner for event messageLogged
emitter.on("messageLogged", () => {
    console.log("listener called ...")
})

// Something has happened ...
emitter.emit("messageLogged");

// Register listner for event messageLogged with arguments
emitter.on("messageLogged", (arg) => {
    console.log("listener called ...", arg)
})

// Event arguments
emitter.emit("messageLogged", {id: 1, url: "http://"}) */

// HTTP module ...
const http = require("http");

// http is derived from EventEmitter class
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("Hello World");    
        res.end();    
    }

    if (req.url === "/api/courses") {
        res.write(JSON.stringify([1, 2, 3]));    
        res.end();    
    }
});

server.listen(3000);
console.log("Listening on port 3000 ...");




