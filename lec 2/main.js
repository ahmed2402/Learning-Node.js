// const { createServer } = require('node:http'); //common js way

// import http from "http"  module way


// import {a,b,c,d,e} from "./mymodule.js"   named import
// console.log(a,b,c,d,e)

// import anything from "./mymodule.js"  //default export
// console.log(anything)


//commonjs way
const a  = require("./mymodule2.js")
console.log(a, __dirname, __filename);
