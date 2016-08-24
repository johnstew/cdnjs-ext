
const initState = {
  value: 1
};

export default function test(state = initState, action) {
  switch(action.type) {
    case 'TEST_ACTION':
      return state;
    default:
      return state;
  }
}
