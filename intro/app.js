

const names = require('./names')
const obj = require("./objects")
const sayHi = require('./sayhi')
// require('./add')
// sayHi("tg")
// sayHi(names.jhon)
// sayHi(names.peter)
console.log(obj);

const os = require('os')

// const user = os.userInfo()
// console.log(user);
// console.log(`the system uptime is : ${os.uptime}`);
const path = require('path')
 console.log(path.sep);

const http = require('http')
 
const server = http.createServer((req, res) => {
    res.write('welcome to my new node')
    res.end()
})
server.listen(5000)
