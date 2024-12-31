const OS = require('os')

// const { uptime } = require('process')

const user = OS.userInfo()
console.log(user)
console.log(    `suer up time should be ${OS.uptime()}`)

const surrentStatus = {
    type: OS.type(),
    user: OS.release(),
    freem: OS.freemem(),
    usedm:OS.totalmem()
}
console.log(surrentStatus)

module.exports = surrentStatus