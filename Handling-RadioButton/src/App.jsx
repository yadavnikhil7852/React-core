import { useState } from "react";
import "./App.css";
import Payment from "./components/Payment";
import SelectDropdown from "./components/selectDropdown";

function App() {
  const [Airplanes, setAirplanes] = useState({
    AirIndia: false,
    SpiceJet: false,
    Indigo: false,
  });

  const handleCheck = (e) => {
    const { id } = e.target;
    setAirplanes((prev) => {
      const updated = {};
      Object.keys(prev).forEach((key) => {
        updated[key] = key === id;
      });
      return updated;
    });
  };

  const handleSubmit = () => {
    const selected = Object.keys(Airplanes).find(
      (key) => Airplanes[key],
      //short form upside
      //   (key) => {
      //   return Airplanes[key] === true;
      // }
    );
    if (selected) {
      alert(`I want to travel in ${selected} ✈️`);
    } else {
      alert("please Select an Aeroplane Company ✈️");
    }
  };
  console.log(Airplanes);

  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          border: "2px solid #2563eb", // blue border
          borderRadius: "12px",
          padding: "20px",
          width: "250px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)", // utha hua effect
          margin: "20px auto",
        }}
      >
        {Object.keys(Airplanes).map((item) => {
          return (
            <label key={`${item}`} htmlFor={item}>
              <input
                type="radio"
                name="Airplane"
                id={item}
                checked={Airplanes[item]}
                onChange={handleCheck}
              />
              {item} <br />
              <br />
            </label>
          );
        })}
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <Payment/>
     <SelectDropdown/>
    </>
  );
}

export default App;
