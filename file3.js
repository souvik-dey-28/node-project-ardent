const fs=require("fs");
const data="This is a new content";
fs.writeFile('bcet.txt',data,function(err)
{
if(err)
{
console.log("error occured");
}
console.log("Data written successfully");
});