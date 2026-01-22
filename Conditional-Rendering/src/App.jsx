import { useState } from "react";
import "./App.css";
import ComponentA from "./component/ComponentA";
import ComponentB from "./component/ComponentB";
import ComponentC from "./component/ComponentC";


function StatusMessage({status}){
    switch (status){
    case "loading":
      return <p>Loading...</p>
      case 'success':
        return <p>Result success</p> 
        case 'error':
        return <p>Error 404</p>
     default :
     return <p>Default h ye</p>
  }}

//function component for to do list
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
// function Button({ children }) {
//   return (
//     <button type="button" className="ButtonDisplay">
//       {children}
//     </button>
//   );
// }
function ButtonDisplay({ name, isVisible }) {
  if (isVisible) {
    return <button className="ButtonDisplay">{name}</button>;
  }
  return <h1>Error </h1>;
}
function App() {
  //usestate for button
  const [isVisible, setIsVisible] = useState(false);
  const options ='c';
  let content = <h1>Hello how are you</h1>
  if(options == 'a'){
    content =<ComponentA/>
  }
  else if(options == 'b'){
       content = <ComponentB/>
  }
  else  if(options =='c'){
    content = <ComponentC/>
  }
  else{
    content = <h1>component not displayed</h1>
  }
  //using switch case
  
  
  return (
    <>
      <h1>My to-do list</h1>
      <ul>
        <IsDone name="React 3 videos " isChecked={true} />
        <IsDone name="Code Review " isChecked={true} />
        <IsDone name="Java DSA Explore " isChecked={true} />
        <IsDone name="Reels + yt " isChecked={false} />
        {/* 
       <ButtonDisplay name='show info' isVisible={true}/>
   <ButtonDisplay name='Hide info' isVisible={true}/> */}
      </ul>
      <h3>Agar button pe click kiya toh aerohyre ka production udd jayega</h3>
      {!isVisible && (
        <button style={{backgroundColor : 'red'}}
          onClick={() => {
            setIsVisible(true); 
          }}
        >
          mt kr lala mt kr🤯
        </button>
      )}
      {isVisible && (
        <button
             style={{backgroundColor : 'green'}}
          onClick={() => {
            setIsVisible(false);
          }}
        >
          bacha le jldi!
        </button>
      )}
      {isVisible && (
        <p>
          le udd gya tera production , jaa raghav bhai ko bula pipe m tape mare
        </p>
      )}
      <h3>{content}</h3> 
      <StatusMessage status="loading" /> 
    </>
    
  );
}
export default App;
