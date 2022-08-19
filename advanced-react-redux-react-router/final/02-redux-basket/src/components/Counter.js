import React from "react";
import "./css/Counter.css";
import { useDispatch } from "react-redux";
import { addBasketItemCount } from "../reducer";

import Button from "./Button";

const Counter = ({ value, uid, items, setItems }) => {
  const dispatch = useDispatch();

  const qty = value;

  const qtyButtonAdd = () => {
    dispatch(addBasketItemCount({ uid, qty: 1 }));
  };


  const qtyButtonSub = () => {
    let newItems = items.slice();

    let index = newItems.findIndex(item => item.uid == uid)

    newItems[index].qty--;

    if (newItems[index].qty < 0 || isNaN(newItems[index].qty)) {
      newItems[index].qty = 0;
    }

    setItems(newItems);
  }

  const qtyInputChange = (ev) => {
    let newItems = items.slice();

    let index = newItems.findIndex(item => item.uid == uid)

    newItems[index].qty = parseInt(ev.target.value);

    if (newItems[index].qty < 0 || isNaN(newItems[index].qty)) {
      newItems[index].qty = 0;
    }

    setItems(newItems);
  }


  return (
    <div className="Counter">
      <div className="Counter_into">
        <Button value="-" onClickHandler={qtyButtonSub} />
        <input
          className="Counter_input"
          value={qty}
          onChange={qtyInputChange}
        />
        <Button value="+" onClickHandler={qtyButtonAdd} />
      </div>
    </div>
  );
};

export default Counter;
