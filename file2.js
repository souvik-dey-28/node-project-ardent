var fs=require("fs");
console.log("Opening file");
fs.open('data.txt','r+',function(err,df)
{
if(err)
{
    return console.error(err);
}
console.log("File opened successfully");
});