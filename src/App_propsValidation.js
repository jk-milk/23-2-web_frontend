import TestProps from "./components/exam1/TestProps"

const App = (props) => {
  return(
    <>
      {/* <TestProps first='한글' second='🎨📍⏳' third='テスト'/>
      <TestProps first='ㄷㄹ' second='🎨📍⏳' third='{1000}'/>
      <TestProps first='ㄷㄹ' second='🎨📍⏳' third={1000}/> */}
      {/* <TestProps first='ㄷㄹ' second='🎨📍⏳' third={true}/> */}
      {/* 숫자, 부울형(true/false)를 프롭스로 전달시에는 주의 필요: {110} {true} */}
      <TestProps />
      <TestProps first='한글' />
      <TestProps first='한글' second='🎨📍⏳' />
      <TestProps first='한글' second='🎨📍⏳' third='english' />
    </>
  )
}
export default App;