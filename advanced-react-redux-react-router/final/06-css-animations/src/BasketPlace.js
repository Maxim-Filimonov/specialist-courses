import React, { useEffect } from "react";
import Basket from "./components/Basket.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchItemsThunk } from './reducer';
import { useOutletContext } from 'react-router-dom'


export default function BasketPlace() {
  const { setTitle } = useOutletContext();
  setTitle("Корзина")

  const isLoaded = useSelector(state => state.isLoaded);
  const error = useSelector(state => state.error);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchItemsThunk());
  }, [dispatch]);
  let basketPlace = null;

  if (error) {
    basketPlace = <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    basketPlace = <div>Загрузка...</div>;
  } else {
    basketPlace = <Basket />;
  }
  return basketPlace;
}
