// import { option } from "framer-motion/client";
import React from "react";
import { useState } from "react";

function selectDropdown() {
  // const [paymentOption, setPaymentOption] = useState('');
  // console.log(paymentOption)
  // const[language , setLanguage]=useState('java')
  // const languages =["html " , "css" , "js ","react" , "node" , "express ","mongodb " , "python" , "java"]
  const data = {
    India: ["delhi", "mumbai", "pune", "bengaluru", "noida", "Hydreabad"],
    USA: ["New York", "Los Angles", "Chicago"],
    Japan: ["Tokyo", "Osaka", "Kyoto"],
    Germany: ["Berlin", "Munich", "Hamburg"],
  };
  const [Country, setCountry] = useState("");
  const[state , setState] =useState('')
  console.log(Country , state);
  // console.log(state)
  return (
    <>
      <select
        value={Country}
        onChange={(e) => {
          setCountry(e.target.value);
          setState('')
        }}
        name=""
        id=""
      >
        <option value="">--select Country--</option>
        {Object.keys(data).map((item) => {
          return (
            <option key={item} value={item}>
              {item.toUpperCase()}
            </option>
          );
        })}
      </select>
      {Country && (
        <select value={state} 
        onChange={(e) => {
          setState(e.target.value);
        }}
        name="" id="">
          <option value="">--select State--</option>
          {data[Country].map((item) => {
            return (
              <option key={item} value={item}>
                {item.toUpperCase()}
              </option>
            );
          })}
        </select>
      )}
      <p>Country:{Country} , State :{state}</p>
    </>
  );
}

export default selectDropdown;
