import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseCount, decreaseCount } from "./store";
function Home() {
  let quote = useSelector((quote) => quote.conversation);
  let drama = useSelector((drama) => drama.recommend);
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
      <div className="recommend-container">
        {drama.map((a, i) => {
          return (
            <div className="recommend-box">
              <img
                src={`http://localhost:3000/img/${i}.jpg`}
                alt={drama[i].title + "이미지"}
              />
              <p>{drama[i].title}</p>
              <p>{drama[i].season}</p>
              <p>{drama[i].platform}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;