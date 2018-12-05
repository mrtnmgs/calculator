export const setCurrentVal = value => {
  return {
    type: "SET_CURRENTVAL",
    value
  };
};

export const setMemoryVal = value => {
  return {
    type: "SET_MEMORYVAL"
  };
};

export const getMemoryVal = value => {
  return {
    type: "GET_MEMORYVAL"
  };
};

export const getResult = () => {
  return {
    type: "GET_RESULT"
  };
};

export const clear = () => {
  return {
    type: "CLEAR"
  };
};
