import { useState } from "react";
import "./App.css";
import Popup from "./components/Popup";

function App() {
  const [popupType, setPopupType] = useState(null);

  return (
    <>
      <div className="flex">
        <div>
          {popupType == null && (
            <div className="flex gap-5 text-white">
              <button
                className="bg-amber-500"
                onClick={() => setPopupType("edit")}
              >
                Edit
              </button>
              <button
                className="bg-red-500"
                onClick={() => setPopupType("delete")}
              >
                Delete
              </button>
            </div>
          )}

          {popupType === "edit" ? (
            <Popup heading="Edit" para="edit" />
          ) : popupType === "delete" ? (
            <Popup heading="Delete" para="delete" />
          ) : null}
        </div>
        <div>
          {popupType != null && (
            <div>
              <button onClick={() => setPopupType(null)}>❌</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default App;
