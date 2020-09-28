const http = require('http');
const view = require('./view/01.first');

// 서버 만들기
let server = http.createServer(function(request, response) {
    // console.log(request);
    let html = view.first();
    response.writeHead(200,     // Status code, OK
        {'Content-Type': 'text/html'});  // 객체타입
        //200, content-type은 현재 기재한값이 디폴트값으로 생략해도 된다.
    response.end(html);
});

server.listen(3000); // nodejs에서는 3000번 포트를 자주 사용한다.