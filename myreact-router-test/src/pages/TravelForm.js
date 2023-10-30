import React, { useState, useEffect } from 'react';
// import './TravelForm.css'
import styles from './TravelForm.module.css'

import Travels, { exptravels } from './Travels';

export default function TravelForm() {
  const [travels, setTravels] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:3001/travels") //Promise 처리, GET /travels Read
    .then((response)=>response.json())
    .then((jsonData) => setTravels([...jsonData]));
  },[])

  const clickHandlerModify = (data, event)=>{
    console.log(data, event);
  }
  
  return (
    <div className='container mt-5'>
      {/* container는 내부에 내용을 포함한다는 의미
      mt: margin top */}
      <h3>TravelForm페이지</h3>
      <hr />
      {/* <form action="">
        <p><input className={styles.inputbox} type="text" name='name' placeholder='여행지 국가이름' autoComplete='off'/></p>
        <p><input className={styles} type="text" name='name' placeholder='여행지 대표이미지' autoComplete='off'/></p>
      </form> */}

      <form className={styles}
        onSubmit={
          (event)=>{
            event.preventDefault(); //reload 방지
            const id = event.target.id.value; // name이 id인 것의 value
            const name = event.target.name.value;
            const image = event.target.image.value;

            const newArticle = {
              id,                 // key명과 value의 변수명이 같으면 생략가능
              name,
              imglink:image
            }
            // exptravels.push(newArticle); // 단순 배열 변경으로 렌더링 못함--> useState처리
            // console.log(exptravels);

            setTravels([  // useState의 setter를 이용
              // travels,    // 에러 발생하지 않고 배열에 추가되지만, 렌더링 안됨
              ...travels,
              newArticle
            ]);
            // event.target.id.value='';
            // event.target.name.value='';
            // event.target.image.value='';
            event.target.reset();
            // event.target --> <form></form>의 엘리먼트 객체
            // console.log(event.target)

            // fetch로 POST /travels (Create하는 엔드포인트)로 newArticle을 전송하여 서버에 반영
            fetch(
              'http://localhost:3001/travels',
              { // Option객체
                method:'POST', // PUT, PATCH, DELETE
                headers:{"Content-type":"application/json",}, // HTTP Request Header설정
                body:   // body, params(:data), query(url에서 ?뒤에 key=value&...)
                      JSON.stringify(newArticle), // 직력화(Serialization) - 문자열로 변경
              }
            ).then((response)=>{console.log(response)});
          }
        }
      >
        <div className='input-group input-group-lg mb-2'>
          
          {/* lg: large sm:small         mb: margin bottom */}
          <span className='input-group-text'>인덱스번호</span>
          <input className='form-control' type="text" name='id' autoComplete='off'/>
        </div>
        <div className='input-group input-group-lg mb-2'>
          {/* lg: large         mb: margin bottom */}
          <span className='input-group-text'>여행지 국가</span>
          <input className='form-control' type="text" name='name' autoComplete='off'/>
        </div>
        <div className='input-group input-group-lg mb-2'>
          {/* lg: large         mb: margin bottom */}
          <span className='input-group-text'>대표 이미지</span>
          <input className='form-control' type="text" name='image' autoComplete='off'/>
        </div>
        <input type="submit" className='btn btn-primary' value='여행정보입력' />
        <hr />
        

        <ul style={{ listStyle: 'none', paddingLeft:'40px' }}>
          {travels.map(
            (t)=>(
              <li key={t.id} style={{position:'relative'}}>
                <span style={{ display: 'inline-block', width: '140px' }}>
                  {t.id}.
                </span>
                <span style={{ display: 'inline-block', width: '140px', fontWeight: 'bolder', marginBottom:'70px', textTransform:'capitalize'}}>
                  {t.name}
                </span>
                <img height='140px' width='30%' src={t.imglink} alt="" />
                <div>
                  <button
                    className='btn btn-outline-success'
                    style={{
                      position: 'absolute', // 자식엘리먼트 absolute면 부모를 기준
                      top: '50px',
                      right: '102px',
                      zIndex:'2'
                    }}
                    onClick={(ev)=>{
                      clickHandlerModify(t,ev);
                    }}
                  >수정</button>
                </div>
              </li>
            )
          )}
        </ul>
      </form>
    </div>
  );
}