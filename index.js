var 이름 = 'kim'; //브라우저는 typescript는 읽을수 없고 javascript를 인식한다. 따라서 변환해줘야한다. tsc -w 를 입력해주면 저절로 자바스크립트 파일로 변환해준다.(컴파일)
//타입을 지정가능
var 이름1 = 'kim';
var 이름s = ['bbb', 'abc']; //string 타입의 배열
var 이름obj = { name: 'kim' }; //object 생성 , ?는 name변수가 들어갈수도 있고 안들어갈수도 있다는 의미 없으면 에러발생함
var 이름st = 123; //문자와 숫자타입모두 올수 있다.
var 이름types = 123;
//함수만들때 파라미터 타입을 정한다. 또한 리턴타입도 정할수 있다.
function 함수(x) {
    return x * 2;
}
var john = [123, true];
var johnson = { name: 'kim' };
var johnsons = { name: 'kim', sex: "man" };
//클래스문법
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
