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
const {readFile, writeFile} =require('fs').promises
const util = require('util')

// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)



// const getTheFile = (path)=>{
//     return new Promise((resolve, reject)=>{
//         readFile(path,'utf-8',(err, data)=>{
//             if(err){
//                 reject(err)
//             }
//             resolve(data)
//         })
//     })
// }

const start = async()=>{
    try{
        const first = await readFile('./src/first.txt','utf-8')
        const second = await readFile('./src/second.txt','utf-8')
        const thired = await readFile('./src/sorce/more.txt','utf-8')
        await writeFile('./src/sorce/more.txt',`this message is from app.js: ${  first } ${second}`)
        console.log(first,second, thired)
    }catch(err){
        console.log(err)
    }
}

start()




// getTheFile('./src/first.txt')
// .then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })

