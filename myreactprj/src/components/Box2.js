
export default function Box2({color, name}){
  //const {color, name} = props;

  /* const color = props.color;
  const name = props.name; */
  
  return (
    <>
  
      <div 
        className='box'
        style={
          {backgroundColor:color,color}  //{backgroundColor:color,color:color}
        }
      >
        {name}
        
      </div>
    </>
  )
}
