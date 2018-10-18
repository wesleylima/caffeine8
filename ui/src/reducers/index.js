import { combineReducers } from 'redux';
import doses from './doses';
import drinks from './drinks';
import totals from './totals';

export default combineReducers({
  doses,
  drinks,
  totals,
})
