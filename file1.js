var fs=require("fs");
//Asynchronous
fs.readFile('data.txt',function(err,data)
{
if(err)
{
    return console.error(err);
}
console.log("Asynchronous reading: "+data.toString());
});

//Synchronous
var data=fs.readFileSync('data.txt');
console.log("Synchronous reading: "+data.toString());
console.log("Program ended");