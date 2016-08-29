import * as types from '../actions/types';

const initState = {
  assetPage: false,
  searchPage: true,
  loading: false,
  version: false,
  initSearch: true
};

export default function ui(state = initState, action) {
  switch(action.type) {
    case types.SEARCH_STARTED:
      return _.assign({}, state, {
        assetPage: false,
        searchPage: true,
        loading: true,
        version: false,
        initSearch: false
      });
    case types.SELECT:
      return _.assign({}, state, {
        assetPage: true,
        searchPage: false,
        loading: false,
        version: false,
        initSearch: false
      });
    case types.SEARCH_DONE:
      return _.assign({}, state, {
        assetPage: false,
        searchPage: true,
        loading: false,
        version: false,
        initSearch: false
      });
    case types.VERSION_CHANGE:
      return _.assign({}, state, {
        assetPage: true,
        searchPage: false,
        loading: false,
        version: true,
        initSearch: false
      });
    case types.VERSION_CHANGE_DONE:
      return _.assign({}, state, {
        assetPage: true,
        searchPage: false,
        loading: false,
        version: false,
        initSearch: false
      });
    default:
      return state;
  }
}
