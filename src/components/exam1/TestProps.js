
import PropTypes from 'prop-types';
export default function TestProps(props){
  console.log(typeof(props.third));
  return (
    <>
      <p>첫 번째 Props: {props.first}</p>
      <p>두 번째 Props: {props.second}</p>
      <p>세 번째 Props: {props.third}</p>
    </>
  )
}

TestProps.propTypes = {
  first:PropTypes.string.isRequired, // first라는 props값은 string(문자열)이고 필수 props이다.
  second:PropTypes.string.isRequired,
  third:PropTypes.string,
  // third:PropTypes.any     // any: 모든 type
  // third:PropTypes.bool      // bool: true, false

  fourth:PropTypes.oneOf(['남', '여'])
}