const http = require('http');
const url = require('url');

let server = http.createServer((req, res) => {
    let pathname = url.parse(req.url).pathname; //클라이언트가 요청하는 서버 주소를 잡아낼 수 있다.
    console.log(pathname);
    let html;
    if (pathname === '/')
        html = '/';
    else if (pathname === '/file')
        html = '/file';
    else
        html = pathname;
    res.end(`<h1>${html}</h1>`);
    });
server.listen(3000, () => {
    console.log('Server Running at http://localhost:3000')
});