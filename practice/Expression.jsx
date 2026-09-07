//JSX에서 자바스크립트 표현식을 구성하는 변수, 
//연산자(AND, OR, 삼항, 스프레드) 사용방법
//---------------------------------------
import '../Style01.css'

const Expression = () => {
    const name='Chris';
    const age = 30;
    const job = 'Programer';
    const isLogin=true;
    const stu = {name, age};
    const person = {...stu, job};
    return (
        <div className='box'>
            <h1>변수값 출력</h1>
            <h3>이름: {name} age: {name} job: {job}, 
                {isLogin.toString()} </h3>
            <h1>삼항 연산자</h1>
            <div>{isLogin ? <button>Logout</button>:<button>Login</button>}</div>
            <h1>AND 연산자</h1>
            <div>{isLogin && <h3>Login name:{name}</h3>}</div>
            <div>{!isLogin &&<h3>Please Login</h3>}</div>
            <h1>OR 연산자</h1>
            <div>{name || 'NO NAME'}</div>
            <h1>스프레드 연산자</h1>
            <h3>{person.name},{person.age},{person.job}</h3>
        </div>
    )
}
export default Expression