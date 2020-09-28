const myModule = require('./19.module');

for (let i=0; i<5; i++) {
    console.log(myModule.area(myModule.randInt(1, 5)));  //1에서부터 5까지에 관한 결과값을 뽑기 원함
}
