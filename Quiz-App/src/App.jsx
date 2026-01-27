import { useState } from "react";

import "./App.css";
import Timer from "./components/Timer";
import Questions from "./components/Questions";
import Result from "./components/Result";

function App() {
  const [isOver, setIsOver] = useState(false);
  const [score, setScore] = useState(0);
  const [quizKey, setQuizKey] = useState(0);
  console.log(score);
  function resetQuiz() {
    setScore(0);
    setIsOver(false);
    setQuizKey((prev) => prev + 1); // forces remount
  }
  return (
    <>
      <h1 className="bg-blue-500 ">this is a quiz app</h1>
      {!isOver ? (
        <>
          <Timer key={quizKey} setIsOver={setIsOver} score={score} />
          <Questions
            key={quizKey + 1}
            setIsOver={setIsOver}
            setScore={setScore}
          />
        </>
      ) : (
        <Result score={score} />
      )}
      <button
        onClick={resetQuiz}
        style={{ backgroundColor: "red", color: "whitesmoke" }}
        className="mt-10 bg-red-600"
      >
        Reset
      </button>
    </>
  );
}

export default App;
