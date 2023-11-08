import React,{useState} from 'react';
import Travel from '../components/Travel';


/* const travels =[
  {id:'1', name:'한국',imglink:'https://cdn.pixabay.com/photo/2020/08/09/11/31/business-5475283_1280.jpg'},
  {id:'2',name:'미국',imglink:'https://cdn.pixabay.com/photo/2018/08/15/17/17/mount-rushmore-3608620_1280.jpg'},
  {id:'3',name:'일본',imglink:'https://cdn.pixabay.com/photo/2017/01/28/02/24/japan-2014619_1280.jpg'},
];  */

const exptravels =[
  {id:'1', name:'korea',imglink:'https://cdn.pixabay.com/photo/2020/08/09/11/31/business-5475283_1280.jpg'},
  {id:'2',name:'america',imglink:'https://cdn.pixabay.com/photo/2018/08/15/17/17/mount-rushmore-3608620_1280.jpg'},
  {id:'3',name:'japan',imglink:'https://cdn.pixabay.com/photo/2017/01/28/02/24/japan-2014619_1280.jpg'},
];

function Travels(){
  const [travels,setTravels] = useState([]);
//  const name='한국'
//  const img='https://cdn.pixabay.com/photo/2020/08/09/11/31/business-5475283_1280.jpg'

async function clickHan(e){
  const response = await fetch("http://localhost:3100/travels");
  const jsonData = await response.json();
  setTravels([...jsonData]);  
}
  return(<div className='container mt-5'>
    <button 
    onClick={clickHan} 
    className='btn btn-outline-primary'>
      여행지 데이터 불러오기
    </button>
    <hr />
    {/* <Travel name={name} img={img} />
    <Travel name={name} img={img} />
    <Travel name={name} img={img} /> 
    jsx에서 js코드 실행코드는 {}내에서 작성
      key props는 리액트에서 성능 이슈로 사용
      일반적인 props로 사용 불가
    */}
    {
      travels.map((t)=>{
        return (
          <Travel key={t.id} idn={t.id} name={t.name} img={t.imglink} />
        );
      })
    }

  </div>);
}
export  {Travels as default, exptravels};