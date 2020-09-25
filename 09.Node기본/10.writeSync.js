// 동기적으로 파일 쓰기

const fs = require('fs');

let buffer = `동기적으로 파일 쓰기
동기적으로 파일 쓰기
`;
fs.writeFileSync('tmp/sync.txt', buffer);   // (저장할곳)/파일명, 저장할 문구

// 기존 파일에 데이터를 추가하는 경우
buffer = '추가 데이터입니다.\n';
fs.writeFileSync('tmp/sync.txt', buffer, {flag: 'a'});
// 마지막에 flag append를 준다. 파일이 없으면 새로 만들고, 있으면 뒤에다가 추가해준다.