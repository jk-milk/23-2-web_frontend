import React,{useState,useEffect} from 'react';

const CounterEffect =(props)=>{
  const [num,setNum] = useState(props.count);
  const [oneHundred,setOneHundred] = useState(100);
  const [oneThousand, setOneThousand] = useState(1000);
  useEffect(
    ()=>{console.log('Effect호출함');}
    //,[]
    ,[num]
    //,[num,oneHundred,oneThousand]
  );
  useEffect(
    ()=>{console.log('100이상의 Effect호출함');}
    //,[]
    //,[num]
    ,[oneHundred,oneThousand]
  );
  return(
    <>
      <h1>{num}</h1>
      <button onClick={(e)=>{setNum(num+1);}}>1 증가</button> &nbsp;&nbsp;
      <button onClick={(e)=>{setNum(num-1);}}>1 감소</button>
      <hr />
      <h1>{oneHundred}</h1>
      <button onClick={(e)=>{setOneHundred(oneHundred+100);}}>100 증가</button> &nbsp;&nbsp;
    
      <hr />
      <h1>{oneThousand}</h1>
      <button onClick={(e)=>{setOneThousand(oneThousand+100);}}>1000 증가</button> &nbsp;&nbsp;
      <hr />

    </>
  );
};

export default CounterEffect;