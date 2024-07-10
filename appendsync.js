var fs=require("fs");
var data="\nLet's start";
fs.appendFileSync('data.txt',data,'utf8');
console.log('Data is appended to file successfully');