import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseCount, decreaseCount } from "./store";
function LocalEnglish() {
  let state = useSelector((state) => state.conversation);
  // let count = useSelector((count) => count.btnCount);
  let [count, setCount] = useState(0);
  let dispatch = useDispatch();
  return (
    <>
      <div className="day-sentence">
        <h3>{state[count].sentence}</h3>
        <h3>{state[count].interpretation}</h3>
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
            0 < count < state.length
              ? setCount(count + 1)
              : count == state.length
              ? setCount(count)
              : setCount(count - 1);
          }
        }}
      >
        next
      </button>
    </>
  );
}

export default LocalEnglish;
