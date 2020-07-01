const sign = (state = 'Sign in', action) => {
  if (action.type === 'SET_SIGN') {
    return action.payload;
  }
  return state;
};

export default sign;
