// exit 이벤트를 연결
process.on('exit', function(code) {     //function과 =>는 같은 역할을 한다.
    console.log('프로세스가 종료되었습니다.');
    console.log('exit code:', code);
});

// uncaughtException 이벤트를 연결
process.on('uncaughtException', error => {
    console.log('예외가 발생했습니다.');
    console.log('uncaughtException 매개변수\n', error);
});

// 임의의 이벤트를 연결 -> 해당 이벤트가 발생 하지 않았기때문에, 이 이벤트는 없는상태로 흘러간다.
process.on('message', () => {
    console.log('message event');
});

// 예외 강제발생
error.error.error();

/* 예외가 발생되어, 이전에 해놓은 발생된 경우의 예외가 불러와짐.
예외발생메세지로 이벤트가 종료되었기때문에 exit 이벤트가 작동한다. */