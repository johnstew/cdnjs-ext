
export function versions(state, newCurrent) {
  return _.assign({}, state, {
    current: {
      version: newCurrent.version,
      files: [...newCurrent.files]
    },
    all: [...state.all]
  });
};
