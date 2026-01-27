import React from "react";

function Result({ score }) {
  let color = "";
  if (score < 5) {
    color = "red";
  } else {
    color = "green";
  }
  return (
    <div>
      <h2 className="text-xl bg-blue-900 m-5 text-white flex items-center justify-center w-50 ml-20">
        Results
      </h2>
      <h2 style={{ color: color }} className=" text-xl p-2">
        Your score : {score}
      </h2>
    </div>
  );
}

export default Result;
