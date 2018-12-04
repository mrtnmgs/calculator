export const setCurrentVal = value => {
  return {
    type: "SET_CURRENTVAL",
    value
  };
};

export const setMemoryVal = value => {
  return {
    type: "SET_MEMORYVAL",
    value
  };
};

export const calculate = () => {
  return {
    type: "CALCULATE"
  };
};

export const clear = () => {
  return {
    type: "CLEAR"
  };
};
