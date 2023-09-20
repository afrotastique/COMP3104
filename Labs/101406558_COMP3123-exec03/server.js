var http = require("http")
//console.log(http) = get info about the something

const SERVER_PORT = 8089

var server = http.createServer((req, res) =>{
    console.log(req.url)
    //res.write(req.url)
    if(req.url == "/"){
        res.write("<h1>Welcome to Node Server</h1>")
    }
    if(req.url == "/login"){
        res.write("<h1>Login Page</h1>")
    }
    if(req.url == "/student"){
        const stud = {
            sid: 1,
            snm: "Julien Byrnes"
        }
        res.write("<h1>Student Page</h1>")
        res.write(JSON.stringify(stud))
    }
    res.end()
})

server.listen(SERVER_PORT)
console.log(`Server running at ${SERVER_PORT}`)