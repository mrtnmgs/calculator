import reducer from "./reducer";

const initialState = {
  currentVal: undefined,
  memoryVal: undefined
};

describe("reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, "NOT_AN_ACTION")).toEqual(initialState);
  });

  // SET_CURRENTVAL
  it("should set the current value", () => {
    expect(
      reducer(initialState, {
        type: "SET_CURRENTVAL",
        value: "8"
      })
    ).toEqual({
      currentVal: "8",
      memoryVal: undefined
    });

    expect(
      reducer(
        {
          currentVal: "32-8",
          memoryVal: "1233.98"
        },
        {
          type: "SET_CURRENTVAL",
          value: "3"
        }
      )
    ).toEqual({
      currentVal: "32-83",
      memoryVal: "1233.98"
    });
  });

  // SET_MEMORYVAL
  it("should set the memory value", () => {
    expect(
      reducer(
        {
          currentVal: "32-8",
          memoryVal: "1233.98"
        },
        {
          type: "SET_MEMORYVAL"
        }
      )
    ).toEqual({
      currentVal: "32-8",
      memoryVal: "32-8"
    });
    expect(
      reducer(
        {
          currentVal: "7.32-8",
          memoryVal: undefined
        },
        {
          type: "SET_MEMORYVAL"
        }
      )
    ).toEqual({
      currentVal: "7.32-8",
      memoryVal: "7.32-8"
    });
    expect(
      reducer(
        {
          currentVal: undefined,
          memoryVal: "1233.98"
        },
        {
          type: "SET_MEMORYVAL"
        }
      )
    ).toEqual({
      currentVal: undefined,
      memoryVal: undefined
    });
  });

  // GET_MEMORYVAL
  it("should retrieve the memory value", () => {
    // if MR is pressed but nothing is in memory, it should do nothing
    expect(
      reducer(
        {
          currentVal: "7.32-8",
          memoryVal: undefined
        },
        {
          type: "GET_MEMORYVAL"
        }
      )
    ).toEqual({
      currentVal: "7.32-8",
      memoryVal: undefined
    });
    expect(
      reducer(
        {
          currentVal: "32-8",
          memoryVal: "1233.98"
        },
        {
          type: "GET_MEMORYVAL"
        }
      )
    ).toEqual({
      currentVal: "32-81233.98",
      memoryVal: "1233.98"
    });
    expect(
      reducer(
        {
          currentVal: undefined,
          memoryVal: "1233.98"
        },
        {
          type: "GET_MEMORYVAL"
        }
      )
    ).toEqual({
      currentVal: "1233.98",
      memoryVal: "1233.98"
    });
  });

  // GET_RESULT
  it("should retrieve the result", () => {
    // return undefined if nothing in currentVal
    expect(
      reducer(
        { currentVal: undefined, memoryVal: "69" },
        { type: "GET_RESULT" }
      )
    ).toEqual({ currentVal: undefined, memoryVal: "69" });
    // simple operation
    expect(
      reducer({ currentVal: "43+4", memoryVal: "69" }, { type: "GET_RESULT" })
    ).toEqual({ currentVal: "47", memoryVal: "69" });
    // more complicated operation
    expect(
      reducer(
        { currentVal: "40+4*120/30+0.876", memoryVal: undefined },
        { type: "GET_RESULT" }
      )
    ).toEqual({ currentVal: "56.876", memoryVal: undefined });
  });

  // CLEAR
  it("should clear the screen (and keep the stored value)", () => {
    // nothing happens on initial state
    expect(reducer(initialState, { type: "CLEAR" })).toEqual(initialState);
    // sets currentVal to undefined
    expect(
      reducer({ currentVal: "89.9", memoryVal: undefined }, { type: "CLEAR" })
    ).toEqual({ currentVal: undefined, memoryVal: undefined });
    // doesn't clear memoryVal
    expect(
      reducer({ currentVal: "89.9", memoryVal: "12" }, { type: "CLEAR" })
    ).toEqual({ currentVal: undefined, memoryVal: "12" });
  });
});
