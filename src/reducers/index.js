import { combineReducers } from 'redux';
import search from './search';
import selected from './select';
import ui from './ui';

export default combineReducers({
  search,
  selected,
  ui
});
