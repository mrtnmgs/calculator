import React from "react";
import { connect } from "react-redux";
import "./Screen.css";

const Screen = ({ currentVal }) => {
  return <div className="Screen">{currentVal}</div>;
};

const mapStateToProps = state => {
  return {
    currentVal: state.currentVal
  };
};

export default connect(mapStateToProps)(Screen);
