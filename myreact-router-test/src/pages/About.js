import React from 'react';
import styles from './About.module.css';

export default function About(){
  return(<div className='container mt-5'>
    <h3>About페이지</h3>
    <p><input className={styles.inputBox}
        type="text" name='test' placeholder='test' autoComplete='off'/></p>
  </div>);
}