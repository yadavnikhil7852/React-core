import "./App.css";
import UserCard from "./userCard";

function App() {
  // const [count, setCount] = useState(0);
  // const greetWithState = [
  //   "andhra pradesh-namaskaram",
  //   "arunachal pradesh-tashi delek",
  //   "assam-nomoskar",
  //   "bihar-kaisan ba",
  // ];
  const Employeeintro = [
    { id: 1, name: "Nikhil Yadav 😎", age: "20" },
    { id: 2, name: "Samne office wali ladki 😒", age: "~25" },
    { id: 3, name: "Bus wali crush 😘", age: "~23" },
    { id: 4, name: "meri one sided story wali 💔", age: "20" },
  ];
  //array of arrays
  // const ArrofArrs = [
  //   ["html", "css", "js", "react"],
  //   ["java", "Springboot", "MySql", "Postman"],
  // ];

  // console.log(greetWithState);

  return (
    <>
      <h3>hello</h3>
      {/* <ul>
        {greetWithState.map((greet, index) => (
          <li key={index}>{greet}</li>
        ))}
      </ul> */}

      {/* <ul style={{fontSize :'22px', backgroundColor : 'pink'}}>
          {
          Employeeintro.map((user)=>{
            return(
              <li key={user.id}>
                {user.name}-{user.age} years old
              </li>
            )
          })
        }
        </ul>
       */}
      {/* {ArrofArrs.map((Arrs, i) => {
        return (
          <ul key={i}>
            {Arrs.map((val, j) => {
              return <li key={j}>{val}</li>;
            
            })}
          </ul>
        );
      })} */}

      {Employeeintro.map((user) => {
        return <UserCard key={user.id} userDetails={user} />;
      })}
    </>
  );
}

export default App;
