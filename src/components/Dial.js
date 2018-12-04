import React from "react";
import { connect } from "react-redux";
import { setCurrentVal } from "../actions";
import "./Dial.css";

const Dial = ({ dispatch }) => {
  return (
    <section className="Dial">
      <div className="digits">
        <button onClick={() => dispatch(setCurrentVal("1"))}>1</button>
        <button onClick={() => dispatch(setCurrentVal("2"))}>2</button>
        <button onClick={() => dispatch(setCurrentVal("3"))}>3</button>
        <button onClick={() => dispatch(setCurrentVal("4"))}>4</button>
        <button onClick={() => dispatch(setCurrentVal("5"))}>5</button>
        <button onClick={() => dispatch(setCurrentVal("6"))}>6</button>
        <button onClick={() => dispatch(setCurrentVal("7"))}>7</button>
        <button onClick={() => dispatch(setCurrentVal("8"))}>8</button>
        <button onClick={() => dispatch(setCurrentVal("9"))}>9</button>
        <button onClick={() => dispatch(setCurrentVal("0"))}>0</button>
        <button onClick={() => dispatch(setCurrentVal("."))}>.</button>
      </div>
      <div className="operators">
        <button onClick={() => dispatch(setCurrentVal("/"))}>&divide;</button>
        <button onClick={() => dispatch(setCurrentVal("*"))}>&times;</button>
        <button onClick={() => dispatch(setCurrentVal("-"))}>-</button>
        <button onClick={() => dispatch(setCurrentVal("+"))}>+</button>
      </div>
    </section>
  );
};

export default connect()(Dial);
