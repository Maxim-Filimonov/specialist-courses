import React from 'react'
import "./css/BasketPromoCode.css";

import Button from './Button'
import { useDispatch } from 'react-redux';
import { applyPromo } from '../reducer';

const BasketPromoCode = () => {
  const dispatch = useDispatch();
  return (
    <div className='BasketPromoCode'>
      <input
        className='BasketPromoCode_input'
        placeholder='Промокод'
      />
      <Button value='Применить' onClickHandler={() => dispatch(applyPromo())} />
    </div>
  )
}

export default BasketPromoCode