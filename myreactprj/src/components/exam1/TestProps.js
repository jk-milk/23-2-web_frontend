
import PropTypes from 'prop-types';
//export default function TestProps(props){
  //console.log(typeof(props.third));
  export default function TestProps({first, second, third,fourth='미입력'}){  
  return (
    <>
      <p>첫 번째 Props: {first}</p>
      <p>두 번째 Props: {second}</p>
      <p>세 번째 Props: {third}</p>
     {fourth? <p>네 번째 Props: {fourth}</p>: null }
      {/* <p>세 번째 Props: {props.third?"true":"false"}</p> */}
      <hr />
    </>
  );
}

TestProps.propTypes ={
  //first:PropTypes.string.isRequired, // first라는 props값은 string(문자열)이고 필수 props이다.
  //second:PropTypes.string.isRequired,
  first:PropTypes.string.isRequired,
  second:PropTypes.string.isRequired,
  
  third:PropTypes.string.isRequired,
  //third:PropTypes.any      // any: 모든 type
  //third:PropTypes.bool      // bool:true, false

  //fourth:PropTypes.string,
  fourth:PropTypes.oneOf(['남','여']),
}

TestProps.defaultProps={
  first:'영진',
  second:'영진 컴정',
  third:'영진 컴정 일본IT',
}