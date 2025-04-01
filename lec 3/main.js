const { error } = require("console");
const fs = require("fs")

console.log("starting");
// fs.writeFileSync("ahmed.txt", "music 2024.") //synchronus
fs.writeFile("ahmed2.txt", "music 2025" , () => {   //async
    console.log("done")
    fs.readFile("ahmed2.txt", (error,data) => {
        console.log(error, data.toString());
        
    })
})

fs.appendFile("ok.txt", "test 123", (error,data) => {
    console.log(error,data);
})

console.log("ending");
