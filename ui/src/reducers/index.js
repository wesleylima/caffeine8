import { combineReducers } from 'redux';
import doses from './doses';
import drinks from './drinks';
import quota from './quota';

export default combineReducers({
  doses,
  drinks,
  quota,
});
