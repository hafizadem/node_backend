const path = require('path')
const pathName = path.join('/src','sorce','more.txt')
const joinThem = path.basename(pathName)
console.log(joinThem)


const resolve = path.resolve(__dirname,'/src','sorce','more.txt')
console.log(resolve)