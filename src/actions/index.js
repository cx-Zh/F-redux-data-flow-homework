export const setSign = sign => {
  return {
    type: 'SET_SIGN',
    payload: sign
  };
};

export const fetchUserDetails = user => {
  return {
    type: 'GET_USER',
    payload: user
  };
};
