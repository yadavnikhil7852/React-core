import "./App.css";
import { useState } from "react";
import Button from "./components/Button";
import ColorBox from "./components/ColorBox";

function App() {
  const colors = ["blue", "green", "yellow", "violet"];
  const [scol, setCol] = useState("transparent");
  return (
    <>
      <h1 className="text-2xl font-semibold text-blue-900">
        Color Switcher 🌈
      </h1>
      <div className="flex gap-2 items-center justify-center-safe mt-4">
        {colors.map((item) => {
          return (
            <Button setCol={setCol} key={item} color={item}>
              {item}
            </Button>
          );
        })}
      </div>

      <ColorBox color={scol} />
    </>
  );
}

export default App;
