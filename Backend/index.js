const http = require('http')
const fs = require('fs').promises;
const data=require("./fsmodule");
const port = 4010;

const server = http.createServer(async(req, res) => {
    if (req.url == "/msg" && req.method == 'GET') {
        res.setHeader('Content-Type', 'application/json');

        res.end(JSON.stringify({ msg: "hiiii....." }));
    }
    else if (req.url == '/jsondata' && req.method == "GET") {
        res.setHeader('Content-Type', 'application/json');
        const student = {
            "name": "kavya",
            "id": 3008,
            "branch": "cs",
        }
        res.end(JSON.stringify({ msg: student }));
    }
    else if (req.url == '/dataRead' && req.method == "GET") {
        res.setHeader('Content-Type', 'application/json');
       // const fdata=data();
       const fdata= await fs.readFile("student.json",{encoding:'utf-8'});
        const jsonData = JSON.parse(fdata);   // convert string → object

        res.end(JSON.stringify({ msg: jsonData }));
    }
    else {
        res.setHeader('Content-Type', 'text/html');

        res.end("<h2 style=color:red>Welcome to Node server</h2>");
    }
});

server.listen(port, () => {
    console.log(`Server is listening on ${port}`);
})