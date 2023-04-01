const fs = require("fs")
let text = fs.readFileSync("tut.txt", "utf-8");
text = text.replace("dipak", "subhash")
console.log("The content of the file is");
console.log(text);


console.log("creating a new file....")
fs.writeFileSync("subhash.txt", text);