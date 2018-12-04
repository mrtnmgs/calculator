import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const initialState = { currentVal: 0, memoryVal: null };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENTVAL":
      return state;
    case "SET_MEMORYVAL":
      return state;
    case "CALCULATE":
      return state;
    case "CLEAR":
      return initialState;
    default:
      return state;
  }
};

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
