var http=require('http');
var server=http.createServer(function(req,res)
{
if(req.url=='/')
{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<html><body><h1>MERN STACK<h1></body></html>');
    res.end();
}else if(req.url=='/student')
{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<html><body><h1>This is student page</body></html>');
    res.end();
}else if(req.url=='/admin')
{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<html><body><h1>This is admin page</body></html>');
    res.end();
}else{
    res.end('Invalid Request!');
}
});
server.listen(5000);
console.log("Node js web server at port 5000 is running...");