const http = require('http');
const port = 3005

const server = http.createServer((req, res)=>{
    res.end("VOILA LA REPONSE");
});

server.listen(process.env.PORT || port);
