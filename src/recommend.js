import { useSelector } from "react-redux";
import { useState } from "react";
import { NavLink } from "react-router-dom";
function Recommend() {
  let drama = useSelector((drama) => drama.recommend);
  return (
    <>
      <div className="recommend-container">
        {drama.map((a, i) => {
          return (
            <div className="recommend-box">
              <NavLink to={"/" + drama[i].title}>
                <img
                  src={`http://localhost:3000/img/${i}.jpg`}
                  alt={drama[i].title + "이미지"}
                />
              </NavLink>
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
export default Recommend;
