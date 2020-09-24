function callThreeTimes(callback) {
    for (let i=0;i<3;i++) {
        try {
            callback();
        } catch (e) {
            console.log(e.name);
            console.log(e.message);
            console.log('콜백 함수를 정의하세요.');
        } finally {
            console.log('finally는 항상 실행됨.');
        }
    }
}

callThreeTimes(function() {
    console.log('호출')
});

callThreeTimes();