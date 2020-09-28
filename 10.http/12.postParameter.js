const http = require('http');
const url = require('url');
const qs = require('querystring');
const fs = require('fs');

http.createServer(function(req,res) {
    let pathname = url.parse(req.url).pathname;
    if (pathname === '/') {
        fs.readFile('view/12.form.html', 'utf8', (error, html) => {
            res.end(html);
        });
    } else if (pathname === '/proc') {  // 데이터를 이벤트로 처리한다.
        let body = '';
        req.on('data', function(data) {
            body += data;       //데이터가 들어오면 body에 데이터를 추가
        })
        req.on('end', function() {
            let param = qs.parse(body);
            console.log(param);
            console.log(param.uid, param.pwd);  //찾고자하는 ID와 PWD 끌어 낼 수 있음
            res.end(`<h1>${JSON.stringify(param)}</h1>`);   // 화면에 나오게함
        })
    }
}).listen(3000, () => {
    console.log('Server Running at http://localhost:3000')
});