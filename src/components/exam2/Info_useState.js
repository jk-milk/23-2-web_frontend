import React,{useState} from 'react';

const Info  = (props)=>{
  const [name,setName] = useState('');
  const [pwd, setPwd] = useState('');
  // useState는 primitive type만 사용하여야 하나?
  // array, object형 사용가능한가? Yes
  // 주의사항
  // array, object의 사용시 setter함수의 사용 주의
  
  const [user,setUser] = useState({name:'',pwd:''});

  const changeName = (e)=>{
    setName(e.target.value);
  };
  const changePwd = (e)=>{
    setPwd(e.target.value);
  };

  const changeUser = (e)=>{
    setUser(/*  실습과제  */);  // rest 패턴
  };

  return (<>
    <input value={name} onChange = {changeName} />
    <input value={pwd} onChange = {changePwd} />
    <hr />
    <div>
      <div><b>이름:</b>{name}</div>
    </div>
    <div>
      <div><b>패스워드:</b>{pwd}</div>
    </div>

  </>);
};

export default Info;