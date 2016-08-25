import * as types from '../actions/types';

const initState = {
  assetPage: false,
  searchPage: true,
  loading: false
};

export default function ui(state = initState, action) {
  switch(action.type) {
    case types.SEARCH_STARTED:
      return _.assign({}, state, {
        assetPage: false,
        searchPage: true,
        loading: true
      });
    case types.SELECT:
      return _.assign({}, state, {
        assetPage: true,
        searchPage: false,
        loading: false
      });
    case types.SEARCH_DONE:
      return _.assign({}, state, {
        assetPage: false,
        searchPage: true,
        loading: false
      });
    default:
      return state;
  }
}
