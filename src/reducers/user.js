const user = (state = {}, action) => {
  if (action.type === 'GET_USER') {
    if (state) {
      return action.payload;
    }
    return {};
  }
  return state;
};

export default user;
