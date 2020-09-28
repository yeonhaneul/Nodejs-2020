const http = require('http');

// 서버 만들기
let server = http.createServer(function(request, response) {
    console.log(request.headers.cookie);
    let cookie = request.headers.cookie;
    response.writeHead(200, {    // Status code, OK
        'Content-Type': 'text/html',
        'Set-Cookie': ['breakfast = toast', 'dinner = chicken']
        });
    response.end(`<h1>${cookie}</h1>`);
});

server.listen(3000, () => {
    console.log('Server Running at http://localhost:3000')
});

// 클라이언트가 갖고있는 쿠키는 request에 항상 딸려있다.
// 쿠키값을 지운 후 새로고침하면 undefined가 발생된다.
