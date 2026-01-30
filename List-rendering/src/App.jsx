import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const greetWithState = [
    "andhra pradesh-namaskaram",
    "arunachal pradesh-tashi delek",
    "assam-nomoskar",
    "bihar-kaisan ba",
    "chhattisgarh-ram ram",
    "goa-namaskar",
    "gujarat-kem cho",
    "haryana-ram ram",
    "himachal pradesh-namaskar",
    "jharkhand-johar",
    "karnataka-namaskara",
    "kerala-namaskaram",
    "madhya pradesh-ram ram",
    "maharashtra-namaskar",
    "manipur-khurumjari",
    "meghalaya-khublei",
    "mizoram-chibai",
    "nagaland-hello",
    "odisha-namaskar",
    "punjab-sat sri akal",
    "rajasthan-khamma ghani",
    "sikkim-tashi delek",
    "tamil nadu-vanakkam",
    "telangana-namaskaram",
    "tripura-namaskar",
    "uttar pradesh-namaste",
    "uttarakhand-namaskar",
    "west bengal-nomoshkar",
  ];

  console.log(greetWithState);

  return (
    <>
      <ul>
        {greetWithState.map((greet, index) => (
          <li key={index}>{greet}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
