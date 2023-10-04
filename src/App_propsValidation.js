import TestProps from "./components/exam1/TestProps"

const App = (props)=>{
  return(
    <>
      {/* <TestProps first='한글' second='🎨🥊🥋' third='テスト'/>
      <TestProps first='dr.hong' second='홍박사' third='1234' />
      <TestProps first='dr.hong' second='홍박사' third={1234} /> */}
      {/* <TestProps first='dr.hong' second='홍박사' third={true}/> */}
      {/* 숫자, 부울형(true/false)를 프롭스로 전달시에는 주의 필요: {110} {true} */}
{/*       <TestProps />
      <TestProps first='dr.hong' />
      <TestProps first='dr.hong' second='홍박사' />
      <TestProps first='dr.hong' second='홍박사' third='🎨🥊🥋' /> */}


<TestProps first='dr.hong' second='홍박사' third='🎨🥊🥋' fourth='남' />
<TestProps first='dr.hong' second='홍박사' third='🎨🥊🥋' />
<TestProps first='dr.hong' second='홍박사' third='🎨🥊🥋' fourth='여'/>
<TestProps first='dr.hong' second='홍박사' third='🎨🥊🥋' fourth='놈'/>
    </>
  )

}
export default App;