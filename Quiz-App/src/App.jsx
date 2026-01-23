import { useState } from "react";

import "./App.css";
import Timer from "./components/Timer";
import Questions from "./components/Questions";
import Result from "./components/Result";

function App() {
  const [isOver, setIsOver] = useState(false);
  const [score, setScore] = useState(0);
  return (
    <>
      <h1 className="bg-blue-500 ">this is a quiz app</h1>
      {!isOver ? <>

<Timer setIsOver={setIsOver} score={score} />
      <Questions setIsOver={setIsOver} setScore={setScore} />
</>
       : <Result score={score} />}
    </>
  );
}

export default App;
