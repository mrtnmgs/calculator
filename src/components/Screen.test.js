import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Screen from "./Screen";

const reducer = (state = { currentVal: "29/3", memoryVal: "95.33" }, action) =>
  state;

const store = createStore(reducer);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <Screen />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
