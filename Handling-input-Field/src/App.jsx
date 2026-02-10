import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  function inputhandler(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  return (
    <div className="page">
      <section className="hero">
        <div className="hero__content">
          <div className="kicker">Visual handshake</div>
          <h1>Two Divs, One Hold</h1>
          <p className="subtitle">
            Ek bold UI jahan dono portraits ek dusre ke card ko “hold” karte
            dikhte hain — dramatic lighting, textured background, aur strong
            contrast ke saath.
          </p>

          <div className="form">
            <h2>Handling input field</h2>
            <div className="form__row">
              <input
                type="text"
                name="name"
                onChange={inputhandler}
                value={data.name}
                placeholder="Enter your name"
              />
              <input
                type="text"
                name="email"
                value={data.email}
                onChange={inputhandler}
                placeholder="Enter your email"
              />
              <button
                type="button"
                onClick={() =>
                  setData({
                    name: "",
                    email: "",
                  })
                }
              >
                Clear
              </button>
            </div>
            <div className="form__output">
              <span>{data.name}</span>
              <span>{data.email}</span>
            </div>
          </div>

          <div className="stage stage--empty" />

          <div className="meta">
            Background: Indian Parliament • Lighting: soft vignette • Style:
            cinematic
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
