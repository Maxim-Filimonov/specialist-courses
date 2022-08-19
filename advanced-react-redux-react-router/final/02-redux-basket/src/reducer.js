// создайте новый файл src/reducer.js
import { createReducer } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";
// названия может быть любое - главное чтобы оно было уникально
export const addBasketItemCount = createAction("ADD_BASKET_ITEM_COUNT");
const reducer = createReducer({
  items: [
    {
      "uid": "86ed58db-082d-45ab-aa81-5218059349cb",
      "title": "Товар1",
      "description": "описание товара 1",
      "price": 1200,
      "qty": 1
    },
    {
      "uid": "05542e59-7a90-4e80-bf9d-78967f272049",
      "title": "Товар2",
      "description": "описание товара 2",
      "price": 800,
      "qty": 1
    },
    {
      "uid": "7793e4f0-fe86-47cc-98f6-e01b6beeb3af",
      "title": "Товар3",
      "description": "описание товара 3",
      "price": 250,
      "qty": 2
    }
  ]
}, (builder) => builder.addCase(addBasketItemCount, (state, action) => {
  // в отличии от setItems мы можем напрямую обновлять состояние - спасибо `redux/toolkit`
  // return { ...state, items: state.items.map(item => item.uid === action.payload.uid ? { ...item, qty: item.qty + action.payload.qty } : item) }
  state.items.find(x => x.uid === action.payload.uid).qty += action.payload.qty
}));
export default reducer;