import { SELECT, VERSION_CHANGE } from '../actions/types';
import { versions } from './versions';

export default function selected(state = {}, action) {
  switch (action.type) {
    case SELECT:
      return _.assign({}, state, {
        data: {
          ...action.data,
          assets: _.map(action.data.assets, (a) => {
            return _.assign({}, a, {
              files: _.chunk(a.files, 20)
            })
          })
        }
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
