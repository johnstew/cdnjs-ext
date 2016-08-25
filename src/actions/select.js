import { SELECT } from './types';

export function select(data) {
  return {
    type: SELECT,
    data
  };
}
