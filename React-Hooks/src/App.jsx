import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [deccount, decsetCount] = useState(0);
  useEffect(() => {
    console.log("i am using useEffect hook");
  }, [count]);

  return (
    <>
      <h1>this is a react Hooks</h1>
      <h1>Count :{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Incriment
      </button>
      <h1>Negative : {deccount}</h1>
      <button
        onClick={() => {
          decsetCount(deccount - 1);
        }}
      >
        Incriment
      </button>
    </>
  );
}

export default App;
