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

const calculate = state => {
  return Object.assign({}, state, {
    currentVal: eval(state.currentVal)
  });
};

const setMemory = state => {
  // TODO: only numbers can be committed to memory
  return Object.assign({}, state, {
    memoryVal: state.currentVal
  });
};

const getMemory = state => {
  // TODO: only numbers can be committed to memory
  return Object.assign({}, state, {
    currentVal: state.currentVal + state.memoryVal
  });
};

const clear = state => {
  // only clears screen. memoryVal stays
  return Object.assign(
    {},
    {
      memoryVal: state.memoryVal
    }
  );
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENTVAL":
      return setCurrentValue(state, action);
    case "SET_MEMORYVAL":
      return setMemory(state);
    case "GET_MEMORYVAL":
      return getMemory(state);
    case "GET_RESULT":
      return calculate(state);
    case "CLEAR":
      return clear(state, action);
    default:
      return state;
  }
};

export default reducer;
