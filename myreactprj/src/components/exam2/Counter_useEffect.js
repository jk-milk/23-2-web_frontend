import React,{useState,useEffect} from 'react';

const CounterEffect =(props)=>{
const [num,setNum] = useState(props.count);

/* [1] 빈배열이 없는 경우
useEffect(()=>{
  console.log('useEffect 호출');
}); */

/* [2] 빈배열이 있는 경우
useEffect(()=>{
  console.log('useEffect 호출');
  fetch()처리, axios처리 - ajax통신
},[]); */

// [3] dependency list가 있는 경우
useEffect(()=>{
  console.log('useEffect 호출');
},[num]);

console.log(num);
const inCrease = ()=>{
  setNum(num+1);
};
const deCrease = ()=>{
  if (num === 0){
    console.log('0 이하로는 불가');
    return;
  }
  setNum(num-1)
};
return(
  <>
    <h1>{num}</h1>
    <button onClick={inCrease}>1 증가</button> &nbsp;&nbsp;
    <button onClick={deCrease}>1 감소</button>
  </>
);
};

export default CounterEffect;