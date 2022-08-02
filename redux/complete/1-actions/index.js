const { createStore } = require('redux');

const store = createStore(((state, action) => {
  console.log(action);
  switch (action.type) {
    case 'INCREMENT':
      state = { counter: state.counter + 1 };
      break;
    case 'DECREMENT':
      state = { counter: state.counter - 1 };
      break;
    case 'INCREMENT_BY_AMOUNT':
      state = { counter: state.counter + action.payload.amount };
      break;
    case 'INCREMENT_ASYNC':
      // call api?
      break;
  }
  return state;
}), {
  counter: 0
});

store.dispatch({ type: 'INCREMENT' });
console.log("STORE:::", store.getState());
store.dispatch({ type: 'DECREMENT' });
store.dispatch({ type: 'DECREMENT' });
console.log("STORE:::", store.getState());
store.dispatch({ type: 'INCREMENT_BY_AMOUNT', payload: { amount: 5 } });
console.log("STORE:::", store.getState());
