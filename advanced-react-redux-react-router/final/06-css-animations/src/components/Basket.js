import React, { useState } from "react";
import "./css/Basket.css";

import BasketHeader from "./BasketHeader";
import BasketItem from "./BasketItem";
import BasketPromoInfo from "./BasketPromoInfo";
import BasketTotal from "./BasketTotal";
import BasketPromoCode from "./BasketPromoCode";
import BasketPromoCodeMessage from "./BasketPromoCodeMessage";
import Button from "./Button";
import { useSelector } from "react-redux";
import { promoApplied } from "../reducer";

const Basket = (props) => {
  const promo = useSelector(promoApplied)
  const items = useSelector(store => store.items);

  const countItemsInBasket = items.reduce((acc, next) => acc + next.qty, 0);
  const amountTotal = items.reduce(
    (acc, next) => acc + next.price * next.qty,
    -500
  );

  return (
    <div className="Basket">
      {promo && <BasketPromoCodeMessage />}
      <BasketHeader count={countItemsInBasket} />

      <div className="Basket__items">
        {items.map((item) => (
          <BasketItem {...item} key={item.uid} />
        ))}

        <BasketPromoInfo code={"REACTSPECIALIST"} />
        <BasketTotal value={amountTotal} currency={"₽"} />
      </div>

      <BasketPromoCode code={""} />
      <Button
        value="Продолжить покупку"
        onClickHandler={() => alert("Продолжить")}
        className="btn-proceed"
      />
    </div>
  );
};

export default Basket;
