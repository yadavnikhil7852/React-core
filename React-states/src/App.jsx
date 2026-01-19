import "./App.css";
import { useState } from "react";
import Card from "./components/Card";
function App() {
  const [Ticket, setTicket] = useState(0);
  const [price, setprice] = useState(0);
  let count = 1;

  //defining arr as a state
  const [arr, setArr] = useState(["stone", "paper", "scissor"]);
  function addOrange() {
    setArr((prev) => [...prev, "Code fat gaya NASA walo ko bulao 😭"]);
  }

  //defining object
  const [user, setUser] = useState({
    name: "nikhil yadav",
    age: 20,
    city: "New Delhi",
  });
  //function for object manipulating
  function updateCity() {
    setUser((prev) => ({
      ...prev,
      city: "Bengaluru",
    }));
  }

  return (
    <>
      <div className="flex gap-2">
        <div>
          <h1 className="text-4xl font-bold bg-blue-900 mb-2 text-amber-50 rounded-xl">
            Aerohyre
          </h1>
          <div>
            <img
              className="h-50 rounded-xl"
              src="https://www.disabledliving.co.uk/wp-content/uploads/2017/05/shutterstock_273041204-680x454.jpg"
              alt=""
            />
          </div>
          <div className="flex items-center justify-around pt-2">
            <button
              className="bg-blue-900 text-amber-50"
              onClick={() => {
                setTicket(Ticket + 1);
                setprice(price + 4500);
              }}
            >
              Book Ticket
            </button>
            <button
              className="bg-blue-900 text-amber-50"
              onClick={() => {
                setTicket(0);
                setprice(0);
              }}
            >
              Cancel Ticket
            </button>
          </div>
        </div>
        <div className="flex flex-col bg-blue-900 items-center justify-center gap-5 p-3 rounded-xl">
          <h3 className="text-xl text-white font-semibold">
            Total tickets : {Ticket}
          </h3>
          <h3 className="text-xl text-white font-semibold">
            Total Price :{price}
          </h3>
        </div>
      </div>
      <button
        onClick={() => {
          count++;
          console.log(count);
        }}
      >
        {count}
      </button>

      <Card />
      <p>{JSON.stringify(user)}</p>
      <p>{user.name}</p>
      <p>{user.age}</p>
      <p>{user.city}</p>

      <button onClick={updateCity}>Move to Bengaluru</button>

      <ul>
        {arr.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <button onClick={addOrange}>Add orange</button>
    </>
  );
}

export default App;
