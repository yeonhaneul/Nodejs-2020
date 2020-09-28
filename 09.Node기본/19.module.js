module.exports = {
    randInt: function (from, to) {
    return Math.floor(Math.random()*(to - from + 1) + from);
    },       

    area: function (radius) {  //radius는 반지름
    return Math.PI * radius * radius;
    }
}

// 모듈 이름을 아예 객체로 만든 경우
