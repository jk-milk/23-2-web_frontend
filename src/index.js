import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App_propsValidation';
// import App from './App';
// import App from './App.js'; //상기 소스코드와 같은 효과

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  //   JSX
    <>
      {/* {<App />} */}
      {/* <App></App> */}
      {/* <h1>일본반 화이팅</h1> */}
      <App />

    </>  
);

