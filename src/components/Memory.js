import React from "react";
import { connect } from "react-redux";
import { clear, setMemoryVal, getMemoryVal } from "../actions";
import "./Memory.css";

const Memory = ({ dispatch }) => {
  return (
    <div className="Memory">
      <button onClick={() => dispatch(clear())}>C</button>
      <button onClick={() => dispatch(setMemoryVal())}>MS</button>
      <button onClick={() => dispatch(getMemoryVal())}>MR</button>
    </div>
  );
};

export default connect()(Memory);
