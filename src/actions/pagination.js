import { INCREMENT_PAGE_INDEX } from './types';

export function incrementPageIndex(newPageIndex) {
  return {
    type: INCREMENT_PAGE_INDEX,
    newPageIndex
  };
}
