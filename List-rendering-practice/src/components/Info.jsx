import React from "react";
// import data.json from  './components/data.json'import data from './data.json';
import data from "./data.json";
console.log(data);

function Info() {
  return (
    <div className="">
      {data.map((item, index) => {
        return (
          <div className="" key={index}>
            {
              <>
                <div className="flex items-center-safe justify-evenly gap-40 p-5 ">
                  <div className="">
                    <img src={item.image} alt="" srcset="" />
                  </div>
                  <div>
                    <ul className="list-disc pl-6">
                      {item.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="font-bold">{item.price}</p>
                    <p className="line-through">{item.originalPrice}</p>
                    <p className="text-green-500">{item.discount}</p>
                  </div>
                </div>
              </>
            }
          </div>
        );
      })}
    </div>
  );
}

export default Info;
