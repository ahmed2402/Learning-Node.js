// ES6 Module Way
 import fs from "fs/promises"

let a = await fs.readFile("ahmed.txt")
console.log(a.toString());
let b = await fs.writeFile("promise.txt", "es6 module way")
console.log(b);

