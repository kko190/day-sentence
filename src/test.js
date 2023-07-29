import { useSelector } from "react-redux";
import { useState } from "react";
function Test() {
  let state = useSelector((state) => state.conversation);
  return (
    <>
      <div className="day-sentence">
        <h3>{state[0].interpretation}</h3>
        <input className="sentence-input" type="text" />
      </div>
    </>
  );
}
export default Test;
