import React,{useState,useEffect} from 'react';
import {MathJax} from 'better-react-mathjax';
import {useNavigate,useParams} from 'react-router-dom';
import  {quesId } from "../Constants/Questions";


export default function Ques() {
 const [data,setData]=useState([]);
  const params=useParams();
  const navigate=useNavigate()

  
  const fetchData=()=>{
    fetch(`https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${params.que}`)
    .then(response=>{
      return response.json()
    })
    .then(val=>{
      setData(val[0].Question)
    })
  }



  let currentItem=quesId.find((item)=>{
   return  item.value==params.que;
  })

    
  useEffect(()=>{
    fetchData();
  },[params.que]);

 const prevClick= ()=>{

  let prevQuesVal=quesId[(currentItem.id-1)%3].value;
  
  navigate(`/question/${prevQuesVal}`)
 }

  const nextClick= ()=>{
 
  let nextQuesVal=quesId[(currentItem.id+1)%3].value;
  navigate(`/question/${nextQuesVal}`);
 }


 return (
    <div >
      <h1 style={{fontSize:"80px",color:"whitesmoke"}}>Question {currentItem.id+1} </h1>
      <div className='ques'>
      <MathJax>
         <h3>{data}</h3>

      
      <button className="prevnext" disabled={currentItem.id<=0} onClick={prevClick}>&larr;Prev</button>
      <button className="prevnext"  disabled={currentItem.id>=2} onClick={nextClick}>Next&rarr;</button>
      </MathJax>
      </div>
      
      
 

    </div>
  )
}
