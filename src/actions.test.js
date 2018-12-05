import * as actions from "./actions";

describe("set current value", () => {
  it("should create an action to set the current value", () => {
    const value = "5";
    const expectedAction = {
      type: "SET_CURRENTVAL",
      value
    };
    expect(actions.setCurrentVal(value)).toEqual(expectedAction);
  });
});

describe("set memory value", () => {
  it("should create an action to set the memory value", () => {
    const expectedAction = {
      type: "SET_MEMORYVAL"
    };
    expect(actions.setMemoryVal()).toEqual(expectedAction);
  });
});

describe("get memory value", () => {
  it("should create an action to retrieve the memory value", () => {
    const expectedAction = {
      type: "GET_MEMORYVAL"
    };
    expect(actions.getMemoryVal()).toEqual(expectedAction);
  });
});

describe("get result", () => {
  it("should create an action to retrieve the result", () => {
    const expectedAction = {
      type: "GET_RESULT"
    };
    expect(actions.getResult()).toEqual(expectedAction);
  });
});

describe("clear", () => {
  it("should create an action to clear the screen (current value)", () => {
    const expectedAction = {
      type: "CLEAR"
    };
    expect(actions.clear()).toEqual(expectedAction);
  });
});
