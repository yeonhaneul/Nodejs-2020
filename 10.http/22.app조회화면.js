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
    default:
        res.writeHead(404);
        res.end();
    }
}).listen(3000, () => {
    console.log('Server Running at http://localhost:3000')
});