import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const appWithRedux = <Provider store={store}>
  <App />
</Provider>;
const routes = <BrowserRouter>
  <Routes>
    <Route path="/" element={appWithRedux}>
      <Route index element={<div>Тут может быть перечень товаров</div>} />
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

