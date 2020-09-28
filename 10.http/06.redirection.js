const http = require('http');

// 서버 만들기
let server = http.createServer(function(request, response) {
    response.writeHead(302,     //  Redirection Found
        {'Location': 'http://www.hanbit.co.kr'});
    response.end();
});

server.listen(3000, () => {
    console.log('Server Running at http://localhost:3000')
});