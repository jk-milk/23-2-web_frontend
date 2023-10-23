import './App.css';
import Abc from './components/Abc'
import Box from './components/Box';
import Box1 from './components/Box1';
import Box2 from './components/Box2';
//import Welcome from './components/Welcome';

function App() {
  // 작업처리
  return (
    // JSX
    <div className='App'>
      <h1>일본IT과 AI소프트웨어반(2JI-A) 화이팅🎉🎉🧨🧨</h1>
      <Abc />
      {/* <Welcome /> */}
      <Box name='붉은상자' color='red' />
      <Box name='녹색상자' color='green' />
      <Box name='푸른상자' color='#0000FF' />
      <Box name='??색상자' color='rgb(200,140,45)' />
      <Box name='??색상자' color='rgba(255,0,0,0.2)' />
      <Box />
      <hr/>
      <Box1 name='무명상자' color='rgba(111,111,111,0.8)' >
        어떤게 나타나나?
        <p>잘 보일까요?</p>
      </Box1>

      <Box2 name='상자' color='rgba(255,85,51,0.6)' />
    </div>
  );
}

export default App;
