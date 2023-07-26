import "./App.css";
import { useState } from "react";
import sentence from "./real-sentence";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
function App() {
  let [quote, setQuote] = useState(sentence);
  let [btnCount, setBtnCount] = useState(0);

  return (
    <div className="App">
      <DaySentence quote={quote} btnCount={btnCount} />
      <button
        onClick={() => {
          {
            btnCount == 0 ? setBtnCount(btnCount) : setBtnCount(btnCount - 1);
          }
        }}
      >
        ⬅️
      </button>
      <button
        onClick={() => {
          {
            btnCount <= quote.length
              ? setBtnCount(btnCount + 1)
              : setBtnCount(btnCount(quote.length));
          }
        }}
      >
        ➡️
      </button>
    </div>
  );
}
function DaySentence(props) {
  return (
    <div className="day-sentence">
      <h4>{props.quote[props.btnCount].sentence}</h4>
      <h4>{props.quote[props.btnCount].interpretation}</h4>
    </div>
  );
}
export default App;
