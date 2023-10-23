import React from 'react';
import ReactDOM from 'react-dom/client';


/* 옛날방식
const name = 'dr.hong';
const element = <h1>안녕하세요?{name}</h1>;

ReactDOM.render(
  element,   // 컴포넌트
  document.querySelector('#root') // 표시될 위치
);
*/
// 최신방식
/* const name = 'dr.hong';
const element = <h1>안녕하세요?{name}</h1>;
ReactDOM.createRoot(document.querySelector('#root')).render(
  <>{element}</>
); */

/* 
const person = {
  name:'홍박사',
  address:'대구시',
  age:25
}
const name = 'dr.hong';
function printPerson({name,address,age}){
  //const {name,address,age} = person;
  return (`${name} 입니다. ${address}에서 살고, 나이는 ${age}살 입니다.`);
}

const element = <h1>안녕하세요?{printPerson(person)}</h1>;


const App = (props)=>{
  return (
    <>
      name
      <hr />
      {name}
      <hr />
      {element}

    </>
  )

};



ReactDOM.createRoot(document.querySelector('#root')).render(
  //<>{element}</>
  // <App />
  //3+4
  //person.age+10
  element

);
 */

// function printPerson({name,address,age}){
//   //const {name,address,age} = person;
//   return (`${name} 입니다. ${address}에서 살고, 나이는 ${age}살 입니다.`);
// }

// const person = {
//   name:'홍박사',
//   address:'대구시',
//   age:25
// }

// const element = (
//   <h1>
//     안녕하세요? {printPerson(person)}
//   </h1>
// );

// const photoUrl = 'https://cdn.pixabay.com/photo/2017/05/09/10/59/mount-fuji-2297961_1280.jpg'

// const element1 = <a href='https://www.google.com/'>클릭</a>
// const element2 = <img src={photoUrl} />


const MyObj = {
  ColorPicker: function ColorPicker(props){
    return (
      <div style={{backgroundColor:props.color}}> 
        선택한 색상은: 
        <b>
          {props.color}
        </b>
      </div>
    );
  }
}

function BlueColorPicker(){
  return <MyObj.ColorPicker color ='skyblue' />
}

function RedColorPicker(){
  return <MyObj.ColorPicker color ='red' />
}


ReactDOM.createRoot(document.querySelector('#root')).render(
  // <>
  //   {element1}
  //   <hr />
  //   {element2}
  // </>
  <>
    <BlueColorPicker />
    <RedColorPicker />    
  </>

);