import React from "react";
import "./css/Counter.css";
import { useDispatch } from "react-redux";
import { addBasketItemCount, changeBasketItemCount, removeBasketItemCount } from "../reducer";

import Button from "./Button";

const Counter = ({ value, uid, items, setItems }) => {
  const dispatch = useDispatch();

  const qty = value;

  const qtyButtonAdd = () => {
    dispatch(addBasketItemCount({ uid, qty: 1 }));
  };


  const qtyButtonSub = () => {
    dispatch(removeBasketItemCount({ uid, qty: 1 }));
  }

  const qtyInputChange = (ev) => {
    dispatch(changeBasketItemCount({ uid, qty: ev.target.value }));
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
