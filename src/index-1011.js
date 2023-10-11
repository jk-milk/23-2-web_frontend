import React from 'react';
import ReactDOM from 'react-dom/client';

const SideMenu =(props)=>{
  console.log(props.showMenu);
  return(
    <>
      <div
        style={{
          border:'1px solid rgba(244,67,54,1.0)',
          width:'200px',
          height:'94vh', // viewport height, vw : viewport width
          padding:'10px',
          textAlign:props.direction,
          textTransform:'uppercase',
        }}
      >
        {props.direction}
        <ul style={{listStyle:'none', paddingLeft:'0px', lineHeight:'1.6rem'}}>
          <li>Lorem.</li>
          <li>Aliquid?</li>
          <li>Fuga?</li>
          <li>Sed.</li>
          <li>Provident?</li>
        </ul>
      </div>
    </>
  );
}

const App = (props)=>{
  // const showMenu = props.showMenu;
  const {showMenu} = props;

  return(
    <>
    {showMenu && <SideMenu direction='left'/>}
    </>
  );
}


ReactDOM.createRoot(document.querySelector('#root')).render(
  <>
  <App showMenu={false} />
  </>

);