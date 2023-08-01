import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseCount, decreaseCount } from "./store";

import Recommend from "./recommend";
function Home() {
  let quote = useSelector((quote) => quote.conversation);

  let [modal, setModal] = useState(false);
  let [count, setCount] = useState(0);
  let dispatch = useDispatch();
  return (
    <>
      <div className="day-sentence">
        <h3>{quote[count].sentence}</h3>
        <h3>{quote[count].interpretation}</h3>
      </div>
      <button
        className="prev"
        onClick={() => {
          {
            count == 0 ? setCount(count) : setCount(count - 1);
          }
        }}
      >
        prev
      </button>
      <button
        className="next"
        onClick={() => {
          {
            0 < count < quote.length
              ? setCount(count + 1)
              : count == quote.length
              ? setCount(count)
              : setCount(count - 1);
          }
        }}
      >
        next
      </button>
      <div className="interpretation-container">
        {quote.map((a, i) => {
          return (
            <button
              id={i}
              className="interpretation-btn"
              onClick={(e) => {
                alert(quote[e.currentTarget.id].sentence);
              }}
            >
              {quote[i].interpretation}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default Home;
