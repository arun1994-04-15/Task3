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
    var arr = userInput[0].split(" ");
    (function(arr)
    {
        let count = 0;
        for( let i in arr)
            {
               count += +arr[i];
            }
            console.log(count);
    })(arr);
    
});