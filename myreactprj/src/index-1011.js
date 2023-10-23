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
      <ul style={{listStyle:'none', paddingLeft:'0px', lineHeight:'2.6rem'}}>
        <li>Lorem.</li>
        <li>Veritatis?</li>
        <li>Et!</li>
        <li>Nam!</li>
        <li>Sit?</li>
        <li>Ipsa.</li>
        <li>Vel.</li>
        <li>Nostrum!</li>
        <li>Temporibus.</li>
        <li>Praesentium.</li>
        <li>Repellendus.</li>
        <li>Illo!</li>
        <li>A?</li>
        <li>Ea.</li>
        <li>Ab!</li>
      </ul>


     </div>
    </>
  );

}

const App = (props)=>{
  //const showMenu = props.showMenu;
  const {showMenu} = props;

  return(
    <>
     {showMenu && <SideMenu  direction ='left'/>}
    </>
  );

}



ReactDOM.createRoot(document.querySelector('#root')).render( 
  <>
    <App showMenu={true} />
  </>
);