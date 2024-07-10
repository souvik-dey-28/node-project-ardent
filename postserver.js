const http=require('http');
const {parse} =require('querystring');
const server=http.createServer(function(req,res)
{
    if(req.method==='POST')
    {
        let body='';
        req.on('data',chunk=>
        {
            body+=chunk.toString();
        });
        req.on('end',()=>{
            console.log(parse(body));
        });
    }else{
res.end(`
<!DOCTYPE html>
<html>
<body>
<form action="/" method="post">
<input type="text" id="fname" name="fname" placeholder="Enter First Name">
<br/>
<input type="number" id="age" name="age" placeholder="Enter Age">
<br/>
<button>Save</button>
`);
    }
});
server.listen(5000);
console.log("Node js web server at port 5000 is running...");