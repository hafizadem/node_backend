const http = require('http')


const server = http.createServer((req,res)=>{
    if (req.url === '/home') {
        res.end('this is our home page')
    
    }
    if (req.url === '/') {
        res.end('nothing is hear')
        
   
 
 }
   
})

server.listen(9000)