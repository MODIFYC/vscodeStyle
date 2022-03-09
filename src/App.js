import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import AudioSample from './AudioSample';

function App() {
  //name 정의
  const name = 'react';
  // const name1 = 'abc';

  // name 스타일 설정
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, // 기본 단위 px
    padding: '1rem' // 다른 단위 사용 시 문자열로 설정
  }

  return (
    <>
      <Hello />
      <div style={style}>{name}</div>
      {/* 중괄호 안에 있는 내용은 자바스크립트임. 주석하려면 꼭 중괄호 안에 */}
      {/* <div style={style}>{name1}</div> */}

      <Wrapper>
      <Hello name="react" color="red" isSpecial/>
      <Hello color="pink" />
      <Counter /> 
      </Wrapper>
      <InputSample />
      <hr />
      <AudioSample />
    </>
  );
}

export default App;

// props는 부모컴포넌트에서 자식컴포넌트에게 전달. 
// 프레임만 같고 콘텐츠는 다르게