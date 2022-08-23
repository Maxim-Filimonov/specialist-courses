// создайте новый файл src/reducer.js
import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";
// названия может быть любое - главное чтобы оно было уникально
export const addBasketItemCount = createAction("ADD_BASKET_ITEM_COUNT");
export const removeBasketItemCount = createAction("REMOVE_BASKET_ITEM_COUNT");
export const changeBasketItemCount = createAction("CHANGE_BASKET_ITEM_COUNT");
export const fetchItemsThunk = createAsyncThunk("items/fetchItems", async () => {
  const res = await fetch("http://localhost:5004/items.json");
  return res.json();
})
const reducer = createReducer(
  { isLoaded: false, items: [] }, (builder) => {
    return builder
      .addCase(addBasketItemCount, (state, action) => {
        // в отличии от setItems мы можем напрямую обновлять состояние - спасибо `redux/toolkit`
        const item = state.items.find(x => x.uid === action.payload.uid);
        updateQty(item, item.qty + action.payload.qty);
      })
      .addCase(removeBasketItemCount, (state, action) => {
        const item = state.items.find(x => x.uid === action.payload.uid);
        updateQty(item, item.qty - action.payload.qty);
      })
      .addCase(changeBasketItemCount, (state, action) => {
        const item = state.items.find(x => x.uid === action.payload.uid);
        updateQty(item, action.payload.qty);
      })
      .addCase(fetchItemsThunk.fulfilled, (state, action) => {
        state.isLoaded = true;
        state.items = action.payload;
      })
      .addCase(fetchItemsThunk.rejected, (state, action) => {
        state.isLoaded = true;
        state.error = action.error;
      })
      .addCase(fetchItemsThunk.pending, (state, action) => {
        state.isLoaded = false;
        state.error = "";
        state.items = [];
      });
  }
);
export default reducer;

function updateQty(item, qty) {
  const qtyNum = parseInt(qty);
  if (!isNaN(qtyNum)) {
    if (qtyNum > 0) {
      item.qty = qtyNum;
    } else {
      item.qty = 0;
    }
  }
}
