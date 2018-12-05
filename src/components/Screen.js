import React from "react";
import { connect } from "react-redux";
import "./Screen.css";

const Screen = ({ currentVal }) => {
  const regex = /[\d\.]+$/g;
  let displayNumber = currentVal ? currentVal : 0;
  displayNumber = displayNumber.toString().match(regex);
  return <div className="Screen">{displayNumber}</div>;
};

const mapStateToProps = state => {
  return {
    currentVal: state.currentVal
  };
};

export default connect(mapStateToProps)(Screen);
