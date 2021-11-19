export const updateStampCount = (currState, setState, lmt) => {
  if (currState <= lmt) {
    setState(currState + 1);
  }
};
