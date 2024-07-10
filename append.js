var fs=require("fs");
var data=".This is the class for web developemnt.";
fs.appendFile('data.txt',data,'utf8',function(err)
{
if(err)
{
    throw err;
}
console.log('Data is appended to file successfully');
});