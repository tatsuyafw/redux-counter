import { INCREMENT_COUNT, DECREMENT_COUNT } from './actions';

const initialState = {
  count: 0
};

function increment(count = 0, action) {
  return count + 1;
}

function decrement(count = 0, action) {
  return count - 1;
}

function counterApp(state = initialState, action) {
  switch (action.type) {
   case INCREMENT_COUNT:
    return { count: increment(state.count, action) };
   case DECREMENT_COUNT:
    return { count: decrement(state.count, action) };
  default:
    return state;
  }
}

export default counterApp;

