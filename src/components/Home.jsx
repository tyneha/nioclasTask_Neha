import React from 'react'
import { Navigate } from 'react-router-dom';
import  {quesId } from "../Constants/Questions";
import {useNavigate} from 'react-router-dom';


export default function Home() {
     const navigate=useNavigate();

   // console.log(quesId);
  return (
    <div className='home'>
    
    {
        quesId.map((item)=>{
           return  <button className="button-55"key={item.id} onClick={()=>navigate(`/question/${item.value}`)}>{item.label}&rarr;</button>
        })
    }
  
    </div>
  )
}
