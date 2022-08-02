const { createStore } = require('redux');
const store = createStore(((state, action) => {
  console.log(action);
  return state;
}), {});

store.dispatch({ type: 'INCREMENT' });