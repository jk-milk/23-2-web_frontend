import React,{useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';

// useState, useEffect 예시

const Info  = (props)=>{
  const [name,setName] = useState('');
  const [pwd, setPwd] = useState('');

  useEffect(
    ()=>{
      console.log('렌더링 완료됨');
      console.log(
        {name,pwd}
        // {name:name, pwd:pwd}
      );
      // 로그인처리---> 성공하면
      return (  // cleanup
        ()=>{
          console.log('뒷처리');
          console.log(
            {name,pwd}
          );
        }
      );
    }
    //,[]
    ,[name]
  );


  const changeName = (e)=>{
    setName(e.target.value);
  };
  const changePwd = (e)=>{
    setPwd(e.target.value);
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

const App = ()=>{
  const [visible,setVisible] = useState(false);
  return (
    <>
      <div 
        onClick={
          ()=>{
            setVisible(!visible);
          }
        }
      >
        <button>
          {visible?'숨기기':'보이기'}
        </button>
      </div>
      <hr />
      {visible && <Info />}
    </>
  )

};

ReactDOM.createRoot(document.querySelector('#root')).render( 
  <>
    <App />
  </>
);

