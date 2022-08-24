import "./App.css";
import React, { useState } from "react";
import Clicker from "./components/Clicker";
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'

function App() {
  const [title, setTitle] = useState("Главная");
  return (
    <div className="App">
      <header className="App-header">
        <nav className="App-nav">
          <ul>
            <li>
              <Link to={"/"}>
                Главная
              </Link>
            </li>
            <li>
              <Link to={"/basket"}>
                Корзина
              </Link>
            </li>
            <li>
              <Link to={"/about"}>
                О нас
              </Link>
            </li>
            <li>
              <Link to={"/react-router"}>
                О рутинге
              </Link>
            </li>
          </ul>
        </nav>

        <h1>{title}</h1>

        <Outlet context={{ setTitle }} />
      </header>
    </div>
  );
}

export default App;
