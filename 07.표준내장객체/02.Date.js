let date = new Date();
console.log(`현재 시간은 ${date} 입니다.`);

let unixDate = new Date(1600000000000);
console.log(`unixDate 시간은 ${unixDate} 입니다.`);

//let stringDate = new Date('Sun Sep 13 2020 21:26:40');
let stringDate = new Date('2020-09-23 14:50')               
console.log(`stringDate 시간은 ${stringDate} 입니다.`);

let elementDate = new Date(2020, 9-1, 23, 14, 50);
console.log(`요소로 만든 시간은 ${elementDate} 입니다.`);

/* string, 요소를 사용할 떄에는
 입력하는 사람이 편한대로 날짜구분을 써도 알아서 컴퓨터상 시간의 형식으로 바꿔준다.
 */