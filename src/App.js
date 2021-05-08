import React from "react";
import Buttons from "./components/Buttons/Buttons";
import "./App.css";

function App() {
  return (
    <div className="form__container">
      <div className="title__container">
        <p className="title">Авторизация</p>
      </div>
      <div className="field__container">
        <div className="field__login">
          <input type="text" name="login" placeholder="Логин" required />
          <input
            type="password"
            name="password"
            placeholder="Пароль"
            required
          />
        </div>
        <Buttons />
      </div>
    </div>
  );
}

export default App;
