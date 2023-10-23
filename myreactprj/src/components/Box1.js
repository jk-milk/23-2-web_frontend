
export default function Box1(props){
  console.log(props.children);
  return (
    <>
      {/* <div style='background-color:red'></div> 에러*/}
      <div 
        className='box'
        style={
          {backgroundColor:props.color}
        }
      >
        {props.name}
        {props.children}
        
      </div>
    </>
  )
}

Box1.defaultProps ={
  name:'기본상자',
  color:'yellow'
};
