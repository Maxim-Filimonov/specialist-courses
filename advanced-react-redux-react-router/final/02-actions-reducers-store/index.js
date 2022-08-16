const { configureStore, createSlice } = require('@reduxjs/toolkit');

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value = state.value + action.payload.amount;
    }
  }
})
const { increment, decrement, incrementByAmount } = counterSlice.actions;
const store = configureStore({ reducer: counterSlice.reducer });


// const reducer = (state = { counter: 0 }, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       state = { counter: state.counter + 1 };
//       break;
//     case 'DECREMENT':
//       state = { counter: state.counter - 1 };
//       break;
//     case 'INCREMENT_BY_AMOUNT':
//       state = { counter: state.counter + action.payload.amount };
//       break;
//     case 'INCREMENT_ASYNC':
//       // call api?
//       break;
//   }
//   return state;
// };

// const store = configureStore({ reducer });

const incrementAsync = (dispatch, getState) => {
  const stateBefore = getState()
  console.log(`Counter before: ${stateBefore.counter}`)
  setTimeout(() => {
    dispatch(increment())
    // dispatch({ type: 'INCREMENT' })
  }, 500)
}

// простые действия
store.dispatch(increment());
console.log("STORE:::", store.getState());
store.dispatch(decrement());
console.log("STORE:::", store.getState());
// действия с параметрами
store.dispatch(incrementByAmount({ amount: 5 }));
console.log("STORE:::", store.getState());

// асинхронные действий - требуют другого подхода
store.dispatch(incrementAsync);
setTimeout(() => {
  console.log("STORE:::", store.getState());
}, 700)



// простые действия
// store.dispatch({ type: 'INCREMENT' });
// console.log("STORE:::", store.getState());
// store.dispatch({ type: 'DECREMENT' });
// store.dispatch({ type: 'DECREMENT' });
// console.log("STORE:::", store.getState());
// // действия с параметрами
// store.dispatch({ type: 'INCREMENT_BY_AMOUNT', payload: { amount: 5 } });
// console.log("STORE:::", store.getState());

// // асинхронные действий - требуют другого подхода
// store.dispatch(incrementAsync);
// setTimeout(() => {
//   console.log("STORE:::", store.getState());
// }, 700)
