import React from 'react';
import style from './About.module.css'

export default function About(){
  return (
    <div className='contaner mt-5'>
      <h3>About페이지</h3>
      <p><input className={style.inputbox} type="text" name='name' placeholder='여행지 국가이름' autoComplete='off'/></p>
        <p><input type="text" name='name' placeholder='여행지 대표이미지' autoComplete='off'/></p>
    </div>
  );
}