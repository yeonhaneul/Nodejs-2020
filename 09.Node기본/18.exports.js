exports.randInt = function (from, to) {
    return Math.floor(Math.random()*(to - from + 1) + from);
}       //randInt를 외부에서도 쓸 수 있도록 만든다.

exports.area = function (radius) {  //radius는 반지름
    return Math.PI * radius * radius;
}