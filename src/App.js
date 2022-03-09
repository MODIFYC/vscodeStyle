import React, { useRef, useState } from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import AudioSample from './AudioSample';
import UserList from './UserList';
import CreateUser from './CreateUser';

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

  // user create
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  // user list
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ]);

  // user set
  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers([...users, user]);
    // setUsers(users.concat(user));

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  };
  

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
      <hr />
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
    </>
  );
}

export default App;
