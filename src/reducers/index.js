import { combineReducers } from 'redux';
import sign from './sign';
import user from './user';

const reducers = combineReducers({
  sign,
  user
});

export default reducers;
