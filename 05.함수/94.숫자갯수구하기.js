let num = '';
for (let i=0; i<=1000; i++) {
        num += i
}
let count = (num.match(/1/g) || []).length;
let count2 = (num.match(/2/g) || []).length;
let count3 = (num.match(/3/g) || []).length;
let count4 = (num.match(/4/g) || []).length;
let count5 = (num.match(/5/g) || []).length;
let count6 = (num.match(/6/g) || []).length;
let count7 = (num.match(/7/g) || []).length;
let count8 = (num.match(/8/g) || []).length;
let count9 = (num.match(/9/g) || []).length;
let count0 = (num.match(/0/g) || []).length;

console.log(`1:${count}개, 2:${count2}개, 3:${count3}개, 4:${count4}개, 
5:${count5}개, 6:${count6}개, 7:${count7}개, 8:${count8}개,
9:${count9}개, 0:${count0}개`)
