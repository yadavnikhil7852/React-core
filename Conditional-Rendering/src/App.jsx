import { useState } from "react";
import "./App.css";

function IsDone({ name, isChecked }) {
  //1st method
  // if (isChecked) {
  //   return <li className="isDone">{name} ✅</li>;
  // }
  // return <li className="isDone">{name}‼️</li>;

  //2nd method
  //  return(
  //   <li className="IsDone">
  //     {isChecked ? name + "✅" : name + "‼"}
  //   </li>
  //)

  //3rd method

  return (
    <li className="IsDone">
      {name}
      {(isChecked && "✅") || "‼️"}
    </li>
  );
}
function Button({ children }) {
  return (
    <button type="button" className="ButtonDisplay">
      {children}
    </button>
  );
}

function ButtonDisplay({name ,isVisible}){

if(isVisible){
  return <Button className="ButtonDisplay">{name}</Button>
  
}
return <h1>Error </h1>

}

function App() {
  const[isVisible , setIsVisible]= useState(false);
  return (
    <>
      <h1>My to-do list</h1>
      <ul>
        <IsDone name="React 3 videos " isChecked={true} />
        <IsDone name="Code Review " isChecked={true} />
        <IsDone name="Java DSA Explore " isChecked={false} />
        <IsDone name="Reels + yt " isChecked={false} />
{/* 
       <ButtonDisplay name='show info' isVisible={true}/>
   <ButtonDisplay name='Hide info' isVisible={true}/> */}

      </ul>

     <h3>Agar button pe click kiya toh aerohyre ka production udd jayega</h3>
{
  !isVisible && (
    <button onClick={()=>{setIsVisible(true)}}>
      mt kr lala mt kr🤯
    </button>
  ) 
}
{
  isVisible && (
    <button onClick={()=>{setIsVisible(false)}}>
      bacha le jldi!
    </button>
  ) 
}{
  isVisible &&(
    <p>le udd gya tera production , jaa raghav bhai ko bula pipe m tape mare</p>
  )
}
   </>
  );
}

export default App;
