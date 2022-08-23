import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';
import { Provider } from 'react-redux';
import BasketPlace from './BasketPlace'
import { BrowserRouter, Routes, Route, useOutletContext } from 'react-router-dom'

// Мы перенесем нашу основную разметку в отдельную переменную
const appWithRedux = <Provider store={store}>
  <App />
</Provider>;

function MainRoute() {
  const { setTitle } = useOutletContext()
  setTitle("Главная")
  return (<div>Тут может быть перечень товаров</div>);
}

const routes = <BrowserRouter>
  <Routes>
    {/* Главный путь определяет разметку для всего приложения */}
    <Route path="/" element={appWithRedux}>
      {/* Все родительские пути наследуют эту разметку */}
      <Route index element={<MainRoute />} />
      <Route path="/basket" element={<BasketPlace />} />
      <Route path="/about" element={<div>информация о компании</div>} />
      <Route path="/react-router" element={<div>react router is here </div>} />
    </Route>
  </Routes>
</BrowserRouter >;

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  routes
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

