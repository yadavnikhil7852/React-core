import React, { useState, useEffect } from "react";

function Timer({ setIsOver }) {
  const [leftTime, setLeftTime] = useState(180);
  const [displayTime, setDisplayTime] = useState("");

  //left time logic
  useEffect(() => {
    let intervalId = setInterval(() => {
      setLeftTime((prev) => {
        if (prev <= 1) {
          clearInterval(intervalId);
          return 0;
        }
        return prev - 1;
      });
      //lefttime -1 -> 5->4 but uske baad nahi
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  //time format logic
  useEffect(() => {
    if (leftTime === 0) {
      setIsOver(true);
    }
    let formattedTime = `${Math.floor(leftTime / 60)
      .toString()
      .padStart(2, 0)} : ${(leftTime % 60).toString().padStart(2, "0")}`;
    setDisplayTime(formattedTime) //we should use usememo hook to avoid this problem
  }, [leftTime]);

  return (
    <div className="mt-5">
      <p className="text-xl">Time left ⏱️: {displayTime} </p>
    </div>
  );
}

export default Timer;
