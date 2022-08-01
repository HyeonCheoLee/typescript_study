let 이름 = 'kim';   //브라우저는 typescript는 읽을수 없고 javascript를 인식한다. 따라서 변환해줘야한다. tsc -w 를 입력해주면 저절로 자바스크립트 파일로 변환해준다.(컴파일)

//타입을 지정가능
let 이름1 :string = 'kim';
let 이름s :string[] = ['bbb', 'abc']    //string 타입의 배열
let 이름obj :{name? : string} = {name : 'kim'}   //object 생성 , ?는 name변수가 들어갈수도 있고 안들어갈수도 있다는 의미 없으면 에러발생함
let 이름st :string | number = 123;  //문자와 숫자타입모두 올수 있다.

//type을 만들어놓고 사용할수도 있음
type Name = string | number;
let 이름types :Name = 123;

//함수만들때 파라미터 타입을 정한다. 또한 리턴타입도 정할수 있다.
function 함수(x :number) : number{
    return x*2
}

type Member = [number, boolean];    //배열 첫번째에는 숫자, 두번째에는 불리언값만 와야한다 = tuple타입
let john:Member = [123, true];


type MemberObj = {  //name에는 무조건 string 타입만 들어가야한다.
    name : string
}
let johnson :MemberObj = { name : 'kim'}

type MemberObjs = {  //name에는 무조건 string 타입만 들어가야한다.
    [key :string] : string  //string으로 들어오는 object 속성은 무조건 string만 와야한다는 의미
}
let johnsons :MemberObjs = { name : 'kim', sex : "man"};

//클래스문법
class User{
    name :string    //미리 타입을 지정해야한다.
    constructor(name :string){
        this.name = name;
    }
}
