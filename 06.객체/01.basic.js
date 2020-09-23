// 배열(Array)
let arrayPersonInfo = ['홍길동', '남자', 29];
console.log(arrayPersonInfo[0], arrayPersonInfo[1], arrayPersonInfo[2]);

// 객체(object) - key, value 쌍으로 구성되어 있음
let personInfo = {
    'name':'홍길동',
    'gender':'남자',
    'age':29
}
console.log(personInfo['name'], personInfo['gender'], personInfo['a'+'ge'])

let person = {
    name: '홍길동', gender:'남자', 나이:29
}
console.log(person.name, person.gender, person.나이)

console.log(process.env.JAVA_HOME);