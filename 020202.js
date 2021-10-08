const http = require("http");
var fs = require("fs");

const hostname = "localhost";

const port = 3000;
var solan = 0;

const server = http.createServer(
    (req, res) => {
        res.statusCode = 200;
        res.setHeader("Content-Type","text/html");
        console.log("--- request !!!", solan++ , req.url);

        switch(req.url) {
            case "/home": {
                res.writeHead(200);
                var data = fs.readFileSync("./home.html");
                res.end(data.toString());
                break;
            }
            case "/order": {
                res.writeHead(200);
                res.end("<h1> Order page ! </h1>");
                break;
            }
            case "/products": {
                res.writeHead(200);
                res.end("<h1> Products page ! </h1>");
                break;
            }
            case "/about": {
                res.writeHead(200);
                res.end("<h1> About page ! </h1>");
                break;
            }
            case "/login": {
                res.writeHead(200);
                res.end("<h1> Login page ! </h1>");
                break;
            }
            case "/signin": {
                res.writeHead(200);
                res.end("<h1> Signin page ! </h1>");
                break;
            }
            case "/logout": {
                res.writeHead(200);
                res.end("<h1> logout page ! </h1>");
                break;
            }
            case "/contact": {
                res.writeHead(200);
                res.end("<h1> Contact page ! </h1>");
                break;
            }
            default: {
                res.writeHead(200);
                res.end("<h1> ... ERROR ! </h1>");
                break;
            }
        }
    }
)

function XuLyThongTinServerDuocBat() {
    console.log("Listen !!!" , hostname , port );
}

server.listen( port, hostname,  XuLyThongTinServerDuocBat );
