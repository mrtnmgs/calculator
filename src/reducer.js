const initialState = { currentVal: undefined, memoryVal: undefined };

const setCurrentValue = (state, action) => {
  // limit expression to 1 consecutive operator here
  return Object.assign({}, state, {
    currentVal:
      state.currentVal === undefined
        ? action.value
        : state.currentVal + action.value
  });
};

const calculate = (state, action) => {
  return Object.assign({}, state, {
    currentVal: eval(state.currentVal)
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENTVAL":
      return setCurrentValue(state, action);
    case "SET_MEMORYVAL":
      return state;
    case "GET_MEMORYVAL":
      return state;
    case "GET_RESULT":
      return calculate(state, action);
    case "CLEAR":
      return initialState;
    default:
      return state;
  }
};

export default reducer;
