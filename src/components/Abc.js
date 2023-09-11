//import { Fragment } from "react";

import { Fragment } from "react";
import Welcome from "./Welcome";

function Abc(){
  // return (<h2 style='border: 1px solid'>열심히 React해봅시다.</h2>);
 /*  <h2>
  열심히 React해봅시다.
 </h2> */
 /* <div>열심히 React해봅시다.</div>*/
/*  <Fragment>
 열심히 React해봅시다.
</Fragment> */
  return (    
   /*  <>열심히 React해봅시다.</> */
   // <Fragment></Fragment>
   <> 
   {/* 주석문 */}
    <Welcome city='Seoul' population='940'/>
    <Welcome city='Daegu' population='230'></Welcome>
   </>

  );}

export default Abc;