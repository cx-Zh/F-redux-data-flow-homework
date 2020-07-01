const user = (state = {}, action) => {
  if (action.type === 'GET_USER') {
    return action.payload;
  }
  return state;
};

export default user;
