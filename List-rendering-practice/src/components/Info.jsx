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
                  <div className="w-1/4">
                    <img className="" src={item.image} alt="" srcSet="" />
                  </div>
                  <div className="flex flex-col items-start gap-2 w-full">
                    <h1>{item.title}</h1>
                    <h2 className="text-gray-600"> ⭐{item.rating} | {item.reviews}</h2>
                    
                    <ul className="list-disc pl-6">
                      {item.details.map((detail, index) => (
                        <li className="text-start" key={index}>{detail}</li>
                      ))}
                    </ul>
                    <p className="ml-4 text-green-600">{item.offers.bankOffer}</p>
                     <p className="ml-4 text-green-400">{item.offers.exchangeOffer}</p>
                  </div>
                  <div className="flex flex-col gap-1 pr-3">
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
