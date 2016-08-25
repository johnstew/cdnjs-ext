import { SELECT } from '../actions/types';

export default function selected(state = {}, action) {
  switch (action.type) {
    case SELECT:
      return _.assign({}, state, {
        data: action.data
      });
    default:
      return state;
  }
}
