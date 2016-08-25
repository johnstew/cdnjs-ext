import { combineReducers } from 'redux';
import search from './search';
import selected from './select';

export default combineReducers({
  search,
  selected
});
