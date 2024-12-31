

const { readFile,writeFile } = require("fs");
const first= readFile('./src/second.txt')



readFile('./src/first.txt','utf8', (err,result)=>{
    if (err) {
        console.log(err)
        return;
    }
   const first = result



writeFile('./src/sorce/more.txt',`send by the callback method: ${first} , ${first}`,(err , result)=>{
    if (err) {
        console.log(err)
        return
    }
    const second = result
})

})



 
// console.log(monday.first)



