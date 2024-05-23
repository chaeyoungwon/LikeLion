import react, { useState } from "react";
import "./counter.css";

function Counter(props) {
  const [count, setCount] = useState(0);

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 5) + 1;
  };

  return (
    <div className="container">
      <span className="title">Counter</span>
      <div className="counter">
        <span className="count">{count}</span>
        <div className="buttonbox">
          <button
            className="increasebtn"
            onClick={() => {
              setCount((count) => count + 1);
            }}
          >
            +1
          </button>
          <button
            className="decreasebtn"
            onClick={() => {
              setCount((count) => count - 1);
            }}
          >
            -1
          </button>

          <button
            className="resetbtn"
            onClick={() => {
              setCount(0);
            }}
          >
            Reset
          </button>

          <button
            className="randombtn1"
            onClick={() => {
              setCount((count) => count + getRandomNumber());
            }}
          >
            랜덤 +
          </button>

          <button
            className="randombtn2"
            onClick={() => {
              setCount((count) => count - getRandomNumber());
            }}
          >
            랜덤 -
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
