import "./App.css";
import React, { useState, useEffect } from "react";
import Basket from "./components/Basket.js";
import Clicker from "./components/Clicker";

function App() {
  const [startItems, setStartItems] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/items.json")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setStartItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  let basketPlace = null;

  if (error) {
    basketPlace = <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    basketPlace = <div>Загрузка...</div>;
  } else {
    basketPlace = <Basket items={startItems} />;
  }

  const [currrentPath, setCurrrentPath] = useState("/");

  const clickTopMenuHandler = (ev) => {
    ev.preventDefault();

    let path = ev.target.getAttribute("data-route");
    console.log(`нажали для перехода ${path}`);

    const state = {};
    const title = "";

    window.history.pushState(state, title, path);

    setCurrrentPath(path);
  };

  let title = null;
  let content = null;

  switch (currrentPath) {
    case "/":
      title = "Каталог товаров";
      content = <div>Тут может быть перечень товаров</div>;
      break;
    case "/basket":
      title = "Корзина";
      content = basketPlace;
      break;
    case "/about":
      title = "О нас";
      content = <div>Тут информация о компании</div>;
      break;
    case "/react-router":
      title = "React-router";
      content = (
        <div>
          Часто используются не самописные, а сторонние системы рутинга,
          например <a href="https://reactrouter.com/" target="_blank">React Router</a>
        </div>
      );
      break;
  }

  return (
    <div className="App">
      <header className="App-header">
        <nav className="App-nav">
          <ul>
            <li>
              <a href="#" onClick={clickTopMenuHandler} data-route={"/"}>
                Главная
              </a>
            </li>
            <li>
              <a href="#" onClick={clickTopMenuHandler} data-route={"/basket"}>
                Корзина
              </a>
            </li>
            <li>
              <a href="#" onClick={clickTopMenuHandler} data-route={"/about"}>
                О нас
              </a>
            </li>
            <li>
              <a href="#" onClick={clickTopMenuHandler} data-route={"/react-router"}>
                О рутинге
              </a>
            </li>
          </ul>
        </nav>

        <h1>{title}</h1>

        {content}
      </header>
    </div>
  );
}

export default App;
