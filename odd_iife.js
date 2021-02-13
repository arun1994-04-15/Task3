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
        for( let i in arr)
            {
                if(arr[i]%2 != 0)
                {
                    console.log(arr[i]);
                }
                else
                {
                    continue;
                }
            }
    })(arr);
});