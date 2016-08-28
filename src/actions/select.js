import {
  SELECT,
  VERSION_CHANGE,
  VERSION_CHANGE_DONE
} from './types';

export function select(data) {
  return {
    type: SELECT,
    data
  };
}

export function versionChange(data) {
  return {
    type: VERSION_CHANGE,
    data
  };
}

export function versionChangeDone() {
  return {
    type: VERSION_CHANGE_DONE
  };
}
