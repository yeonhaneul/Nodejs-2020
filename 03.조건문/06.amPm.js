let today = new Date();
console.log(today);
console.log(today.getFullYear());  // 년
console.log(today.getMonth()+1);   // 월(은 +1)
console.log(today.getDate());      // 요일
console.log(today.getDay());       // 일
console.log(today.getHours());     // 시
console.log(today.getMinutes());   // 분
console.log(today.getSeconds());   // 초

// 오전/오후 구분하기
if (today.getHours() < 12 ) {
    console.log('오전입니다.');
} else {
    console.log('오후입니다.');
}

/* console.log(today.toLocaleString());
console.log(today.toISOString()); */

/* const moment = require('moment');
require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");
var date = moment().format('YYYY-MM-DD HH:mm:ss');
console.log(date); */