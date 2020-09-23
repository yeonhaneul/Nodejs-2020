let today = new Date(2020, 9, 23);
let examDay = new Date(2020, 12, 3)

let diff = examDay.getTime() - today.getTime();
let dDay = diff / (1000 * 60 * 60 * 24);  // 천밀리세컨드*초*분*시
console.log(`오늘은 수능 D-${dDay}일 입니다.`);

//console.log(today.getTime()); //unixdate가 구해진다.