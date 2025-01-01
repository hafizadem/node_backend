// filepath: /c:/Users/boos/Documents/js hindi/fs_sync.js
const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./src/first.txt','utf8')
const second = readFileSync('./src/second.txt','utf8')

writeFileSync('./src/sorce/more.txt',`this message is from app.js${  first}`)



console.log(first,second)