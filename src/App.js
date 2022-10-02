import "./App.css";
import pauseMobile from "./images/pattern-divider-mobile.svg";
import pauseDesktop from "./images/pattern-divider-desktop.svg";
import dice from "./images/icon-dice.svg";
import { useEffect, useState } from "react";
function App() {
  const [advice, setAdvice] = useState([]);

  const fetchData = async () => {
    const data = await fetch("https://api.adviceslip.com/advice");
    const result = await data.json();
    if (result.slip === undefined) {
      return;
    }
    setAdvice(result.slip);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1>Advice #{advice.id}</h1>
        <p>
          <q>{advice.advice}</q>
        </p>
        <picture>
          <source media="(min-width: 768px)" srcSet={pauseDesktop} />
          <img src={pauseMobile} alt="mobile pause icon" />
        </picture>
        <div className="button__container">
          <button>
            <img src={dice} alt="dice icon" onClick={fetchData} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
