import React from 'react';
import ReactDOM from 'react-dom/client';
import "./App.css";

// // [1] with JSX
// const element1 = (
//   <>
//     <h1 className="App">
//       영진 컴정 일본IT JI-A(AI SW)반
//     </h1>
//   </>
// );

// // [2] Non JSX
// const element2 = React.createElement(
//   'h1',
//   {className: 'App', name: '김영진'},
//   '영진 컴정 일본IT JI-A(AI SW)반 화이팅', 'a', 'b', 'c'
// )

// console.log(typeof element1);
// console.log(typeof element2);
// console.log(element1.props.className);
// console.log(element2.props.className);
// console.log(element1.children);
// console.log(element2.children);
// console.log(element2.props.name);
// console.log(element1);
// console.log(element2);

// ReactDOM.createRoot(document.querySelector('#root')).render(
//   // <>{element1}</>
//   // element1
//   // element2

//   <>
//     {element1}
//     {element2}
//   </>
// );

// [1] Function style - non JSX

const Greeting = (props)=>{
  const ch = ['안녕','영진', '컴정', props.name, '님']
  return(
    React.createElement('div',{id:'hello'},[...ch])
  );
};

// [2] Class style - non JSX
class Greeting2 extends React.Component{
  render() {
    const ch = ['안녕','영진', '컴정', this.props.name, '님']
    return(
      React.createElement('div',{id:'hello2'},[...ch])
    );
  }
}

// [3] Function style - with JSX
const Greeting3 = (props)=>{
  return(
    <>
      <div id='hello3'>
        {`안녕 영진 컴정${props.name}님`}
      </div>
    </>
  )
}

ReactDOM.createRoot(document.querySelector('#root')).render(
  // <>{element1}</>
  // element1
  // element2

  <>
    <Greeting name='김영진' />
    <Greeting2 name='이영진' />
    <Greeting3 name='최영진' />
  </>
);