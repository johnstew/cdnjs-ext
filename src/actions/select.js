import { SELECT, VERSION_CHANGE } from './types';

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
