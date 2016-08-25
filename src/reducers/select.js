import { SELECT, VERSION_CHANGE } from '../actions/types';
import { versions } from './versions';

export default function selected(state = {}, action) {
  switch (action.type) {
    case SELECT:
      return _.assign({}, state, {
        data: action.data
      });
    case VERSION_CHANGE:
      const nv = versions(state.data.versions, action.data);
      return _.assign({}, state, {
        data: {
          ...state.data,
          versions: nv
        }
      });
    default:
      return state;
  }
}
