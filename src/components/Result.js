import React from "react";
import { connect } from "react-redux";
import { getResult } from "../actions";
import "./Result.css";

const Result = ({ dispatch }) => {
  return (
    <div className="Result">
      <button onClick={() => dispatch(getResult())}>=</button>
    </div>
  );
};

export default connect()(Result);
