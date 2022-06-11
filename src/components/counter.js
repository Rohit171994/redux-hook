import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import "./counter.css";

const Counter = () => {
  const [inputOne, setInputOne] = useState();
  const [inputTwo, setInputTwo] = useState();
  const counter = useSelector((state) => state.counter);
  const plus = useSelector((state) => state.plus);
  const minus = useSelector((state) => state.minus);
  const equal = useSelector((state) => state.equal);
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch({
      type: "INCREMENT",
      inputOne: Number(inputOne),
      inputTwo: Number(inputTwo),
    });
  };
  const decrementHandler = () => {
    dispatch({
      type: "DECREMENT",
      inputOne: Number(inputOne),
      inputTwo: Number(inputTwo),
    });
  };
  return (
    <div className="reduxContainer">
      <h1>Redux Counter</h1>
      <div className="inputField">
        <input
          className="inputOne"
          onBlur={(event) => setInputOne(event.target.value)}
        />
        {plus ? <span>+</span> : ""}
        {minus ? <span>-</span> : ""}
        <input
          className="inputTwo"
          onBlur={(event) => setInputTwo(event.target.value)}
        />
        {equal ? <span>=</span> : ""}
        <span>{counter?counter:''}</span>
      </div>
      <div className="btnGroup">
        <button className="btnInc" onClick={incrementHandler}>
         Addition
        </button>
        <button className="btnDec" onClick={decrementHandler}>
        Substraction
        </button>
      </div>
    </div>
  );
};

export default Counter;
