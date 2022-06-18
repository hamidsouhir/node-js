var fs = require('fs')
const http= require('http')
const mult=require('./math')
console.log(mult)
const server=http.createServer((req,res)=>{
     console.log(res)
     res.statusCode=200;
     res.setHeader('content-type','text-plain')
     res.write('<h1>welcome\n</h1>')
     res.write('<h2>may I help you\n</h2>')
     res.write('<h3>souhir</h3>')
    
     res.end()



})
fs.readFile('./exemple.txt','utf8',function(err,data){
    if(err){console.log(err)}
    console.log(data);
    
})
server.listen(5000,()=>{console.log('server running')})