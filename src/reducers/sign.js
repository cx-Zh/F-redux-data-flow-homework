const sign = (state = 'Sign in', action) => {
  if (action.type === 'SET_SIGN') {
    if (state === 'Sign in') {
      return 'Sign out';
    }
    return 'Sign in';
    // return action.payload;
  }
  return state;
};

export default sign;
