// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    var str = userInput[0].toLowerCase().split(" ")
    var Titlecase = function(str)
    {
        for( let i in str)
        {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
        return str;
    }
    let res = Titlecase(str);
    console.log(res);
    
});