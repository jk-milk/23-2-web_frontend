import TestProps from "./components/exam1/TestProps"

const App = (props) => {
  return(
    <>
      <TestProps first='한글' second='🎨📍⏳' third='テスト'/>
      <TestProps first='ㄷㄹ' second='🎨📍⏳' third={1000}/>
      {/* 숫자를 프롭스로 전달시에는 주의 필요: {110} */}
    </>
  )
}
export default App;