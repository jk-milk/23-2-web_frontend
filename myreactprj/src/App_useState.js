import './App.css';
import './common.css';
import Counter from './components/exam2/Counter_useState';
import Info from './components/exam2/Info_useState';
import CounterEffect from './components/exam2/Counter_useEffect';
import CounterEffect2 from './components/exam2/Counter_useEffect2';

const App =(props)=>{
  return (
    <>
{/*       <p>
        안녕하세요?
      </p>
      <br />
      <br />
      <div className='textBox'></div>
      <div className='textBox2'></div> */}

      <Counter count = {0} />
      <Counter count = {0} />
      <Counter count = {0} />
      {/* <Counter count = {111} />   */}
      {/* 논리적 오류 발생: 
          컴포넌트별로 상태관리가 안되어 있음: useState사용해야 함 */}

      <hr />
      <Info />  

      <hr />

      {/* useEffect 사용예시 */}
      <CounterEffect count = {0} />  

      <hr />

      <CounterEffect2 count = {0} /> 

    </>
  );
};

export default App;