import {
  SEARCH_DONE,
  SEARCH_FAIL,
  SEARCH_STARTED
} from '../actions/types';

export default function search(state = {}, action) {
  switch(action.type) {
    case SEARCH_DONE:
      return _.assign({}, state, {
        results: {
          pages: _.chunk(action.data.results, 20),
          pageIndex: 1
        }
      });
      return state;
    case SEARCH_STARTED:
      return state;
    case SEARCH_FAIL:
      return state;
    default:
      return state;
  }
}
