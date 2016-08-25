import {
  SEARCH_DONE,
  SEARCH_FAIL,
  SEARCH_STARTED
} from './types';

export function searchStarted() {
  return {
    type: SEARCH_STARTED
  };
}

export function searchDone(data) {
  return {
    type: SEARCH_DONE,
    data
  };
}

export function searchFail(error) {
  return {
    type: SEARCH_FAIL,
    error
  };
}

export function search(input) {
  return (dispatch) => {
    dispatch(searchStarted());
    const fields = ['description','homepage','keywords','assets'].join(',');
    fetch(`https://api.cdnjs.com/libraries?search=${input}&fields=${fields}`)
    .then((response) => {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then((results) => {
      dispatch(searchDone(results));
    })
    .catch((error) => dispatch(searchFail(error)));
  }
}
