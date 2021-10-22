import { useState } from "react";
import "./styles.css";

export default function App() {
  const [visible, setVisible] = useState(false);

  const summonGhosts = () => {
    setVisible(true);
  };

  const cancel = () => {
    setVisible(false);
  };

  return (
    <div className="App">
      <h2>Summon the ghosts?</h2>
      <div className="buttons">
        <button onClick={summonGhosts}>Summon</button>
        <button onClick={cancel}>Cancel</button>
      </div>
      <div style={{ display: visible ? "contents" : "none" }}>
        <div className="ghost">
          <div className="face">
            <div className="eyes">
              <span></span>
              <span></span>
            </div>
            <div className="feet">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div className="ghost">
          <div className="face">
            <div className="eyes">
              <span></span>
              <span></span>
            </div>
            <div className="feet">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div className="ghost">
          <div className="face">
            <div className="eyes">
              <span></span>
              <span></span>
            </div>
            <div className="feet">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
