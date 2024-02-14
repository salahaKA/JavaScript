var http= require('http')
var fs= require('fs')
http.createServer(function(req,res){
    // fs.readFile('sample.txt',function(err,data){
    //     if(err) throw err;
    //     res.writeHead(200,{'content-Type':'text/html'});
    //     res.write(data)
    //     res.end()
    // })

    // fs.appendFile('sample.txt',"Append new content",function(err){
    //     if(err) throw err;
    //     console.log("File updated")
    // })

    // fs.writeFile('sample.txt',"New content added directly",function(err){
    //     if(err) throw err;
    //     console.log("Saved")
    // })

    // fs.rename('sample.txt','newfile.txt',function(err){
    //     if(err) throw err;
    //     console.log('File name canged successfuly')
    // })

    fs.unlink('newfile.txt',function(err){
        if(err) throw err;
        console.log("File deleted successfully!")
    })

}).listen(3001);