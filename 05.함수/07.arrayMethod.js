// Array 생성
let cars = ['Saab', 'Volvo', 'BMW'];
let persons = new Array('John', 'Mary');
console.log(cars, persons);

console.log(cars.length, persons.length);
cars.sort();
console.log(cars)

// 맨 마지막 엘리먼트
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits[fruits.length - 1]);

let html = '';
html += '<ul>\n'
for (let fruit of fruits) {
    html += '\t<li>' + fruit + '</li>\n';
}
html += '</ul>\n';
console.log(html);

fruits[fruits.length] = 'Cherry';
console.log(fruits.join(','));

let popItem = fruits.pop();     //맨 끝 엘리먼트 제거
console.log(popItem, fruits);

let shiftItem = fruits.shift(); //처음 엘리먼트 제거
console.log(shiftItem, fruits);

fruits.unshift('Lemon');
console.log(fruits);            //처음 엘리먼트 추가

delete fruits[0];
console.log(fruits);

fruits = ["Banana", "Orange", "Apple", "Mango"];
let spliceItem = fruits.splice(2, 1);
console.log(spliceItem, fruits);

console.log(cars.concat(fruits));

fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruits.slice(2);
console.log(citrus);
citrus = fruits.slice(1, 3);
console.log(citrus);

console.log(fruits.toString());

fruits.forEach(function(value, index) {
    console.log(index, value)
})