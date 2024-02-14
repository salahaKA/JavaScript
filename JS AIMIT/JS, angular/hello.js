var http= require('http')
http.createServer(function(req,res){
    res.writeHead(200,{'content_type':'text/html'});
    res.write('Mangalore');
    res.end('welcome to aimit');
}).listen(8000);
console.log('Server runnng');