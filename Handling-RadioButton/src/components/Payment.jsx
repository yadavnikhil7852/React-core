import React from "react";
import { useState } from "react";

function Payment() {
  const [selectedMode, setSelectedMode] = useState('');
 


  const payments = [
    { id: "UPI", info: "Instant transfer via UPI apps" },
    { id: "Card", info: "pay using credit or debit card" },
    { id: "COD", info: "Pay when the order arrives" },
  ];
  console.log(payments.find(obj=>obj.id ===selectedMode)?.info)
  //  const selectedPayment = payments.find(obj=> obj.id === selectedMode)
  return (
    <>
      {payments.map((item) => {
        return (
          <label key={item.id} htmlFor={item.id}>
            <input type="radio" 
            name={item} 
            id={item.id} 
            checked={selectedMode === item.id}d
            value={item.id}
            onChange={(e)=>setSelectedMode(e.target.value)}
            />
            {item.id}
          </label>
        );
      })}
      <p>Mode of Payment : {selectedMode}</p>
      <p>Details :{payments.find(obj=>obj.id ===selectedMode)?.info} </p>
      {/* <p>Details : {selectedPayment?.info}</p> */}
    </>
  );
}

export default Payment;
