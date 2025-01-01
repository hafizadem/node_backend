

// const { readFile,writeFile } = require("fs");
// const first= readFile('./src/second.txt')



// readFile('./src/first.txt','utf8', (err,result)=>{
//     if (err) {
//         console.log(err)
//         return;
//     }                                                           
//    const first = result



// writeFile('./src/sorce/more.txt',`send by the callback method: ${first} , ${first}`,(err , result)=>{
//     if (err) {
//         console.log(err)
//         return
//     }
//     const second = result
// })

// })



 
//async method with live server

const lofi = require('./fs_sync.js')
const http = require('http')


const server = http.createServer((req,res)=>{
    if (req.url === '/home') {
        res.end('this is our home page')
    
    
    if (req.url === '/') 
        res.end('nothing is hear')
        
  
 
 }
 else{
    res.end('nothing')
 }
   
})
console.log('jjj')
server.listen(9000)



