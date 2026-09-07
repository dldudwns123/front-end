import React from 'react'

//rafce 함수형 컴포넌트 단축키

const Expression = () => {
    const name='';
    const age= 20;
    const job = '학생';
    const isLogin = true;
    return (
        <div>
            <h1>자바 스크립트 표현식</h1>
            <h2>이름:{name},나이:{age-1},직업:{job}</h2>
            {isLogin ? <button>로그아웃</button> : <button>로그인</button>}
            <h2>{isLogin && name}</h2>
            <h2>{name || '무기명'}</h2>

        </div>
  )
}

export default Expression