import React, { useState } from 'react'
import questions from './questions.json'
function Questions({setIsOver ,setScore ,}) {
  const[currentIndex , setCurrentIndex]=useState(0)
 
    
// console.log(questions[currentIndex])
 const handleOptionClick = (selectedOption)=>{
console.log(selectedOption)
if (selectedOption == questions[currentIndex].answer){
  setScore(prev=> prev+1)
}
if(currentIndex < questions.length-1){
  setCurrentIndex(prev=> prev+1)
}else{
  setIsOver(true)
}
 }
 
  return (
    <div>
      
      <p className='text-xl mt-3'>{questions[currentIndex].question}</p>
      <div className='flex flex-col  gap-3 mt-5'> 

      {
        questions[currentIndex].options.map((option )=>{
          return <button key={option} onClick={()=>handleOptionClick(option)}> {option}</button>
        })
      }
      </div>
    </div>
    
  )
}

export default Questions