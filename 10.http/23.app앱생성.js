const http = require('http');
const url = require('url');
const qs = require('querystring');
const fs = require('fs');
const view = require('./view/index');
const tpl = require('./view/template.js');
const template = require('./view/template.js');

http.createServer(function(req,res) {
    let pathname = url.parse(req.url).pathname;
    let query = url.parse(req.url,true).query;
    console.log(pathname, query.id)
    switch(pathname) {
    case '/':
        if (query.id === undefined) {   // qureyid가 없는경우 초기값이 나오게, id가 들어가면 id값이 화면에 나오게
            fs.readdir('data', function(error, filelist) {
                let list = template.listGen(filelist);
                let content = template.HOME_CONTENTS;
                let control = template.buttonGen();
                let html = view.index('Web 기술', list, content, control); // content를 넣을 수 있게된다.
                res.end(html);
            });
        } else {
            fs.readdir('data', function(error, filelist) {
                let list = template.listGen(filelist);
                let title = query.id;
                let control = template.buttonGen(title);
                let filename = 'data/' + title + '.txt';
                fs.readFile(filename, 'utf8', (error, buffer) => {
                    let html = view.index(title, list, buffer, control);
                    res.end(html);
                });
            });
        }
        break;
    case '/create':     // 사용자가 입력 할 수 있는 입력 폼을 보여준다.
        fs.readdir('data', function(error, filelist) {
            let list = template.listGen(filelist);
            let content = template.createForm();
            let control = template.buttonGen();
            let html = view.index('글 생성', list, content, control);
                res.end(html);
            });
        break;
    case '/create_proc':    // 사용자가 폼에 입력 후 실행시키면 데이터 처리
        let body = '';
        req.on('data', function(data) {
            body += data;
        })
        req.on('end', function() {
            let param = qs.parse(body);     // let body 부터 이곳까지는 사용자의 데이터를 불러오기 (쿼리 스트링으로 제목과 내용을 나눈다.)
            // console.log(param.subject, param.description);   // template화면의 name으로 준 값 (subject, descirption)
            let filepath = 'data/' + param.subject + '.txt' // 파일명
            fs.writeFile(filepath, param.description, error => {    // 저장할 위치+파일명, 파일내용, 콜백함수
                res.writeHead(302, {'Location': `/?id=${param.subject}`});  
                res.end();
            });
        });
        break;
        default:
        res.writeHead(404);
        res.end();
    }
}).listen(3000, () => {
    console.log('Server Running at http://localhost:3000')
});