import {
  SEARCH_DONE,
  SEARCH_FAIL,
  SEARCH_STARTED,
  INCREMENT_PAGE_INDEX,
  GET_DATA_SOURCE_DONE
} from '../actions/types';

export default function search(state = {}, action) {
  switch(action.type) {
    case SEARCH_DONE:
      return _.assign({}, state, {
        results: {
          pages: _.chunk(action.data.results, 20),
          pageIndex: 0
        }
      });
      return state;
    case INCREMENT_PAGE_INDEX:
      return _.assign({}, state, {
        results: {
          pages: [...state.results.pages],
          pageIndex: action.newPageIndex
        }
      });
    case GET_DATA_SOURCE_DONE:
      return _.assign({}, state, {
        init: action.data
      });
    case SEARCH_STARTED:
      return state;
    case SEARCH_FAIL:
      return state;
    default:
      return state;
  }
}
