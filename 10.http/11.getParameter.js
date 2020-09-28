const http = require('http');
const url = require('url');

// let server를 제외하고, .listen을 위로 붙일 수 있다.
http.createServer((req, res) => {
    let query = url.parse(req.url,true).query; // req에서 받은 url을 parse
    console.log(query.name, query.region);
    // GET 파라메타 출력(웹화면)
    // 웹화면 주소창에 입력되는 글자 localhost:3000?name=kim&region=seoul
    res.end(`<h1>${JSON.stringify(query)}</h1>`);
}).listen(3000, () => {
    console.log('Server Running at http://localhost:3000')
});