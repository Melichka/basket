import React from "react";
import "./FieldLogin.style.css";

function FieldLogin() {
  return (
    <div className="field__login">
      <input type="text" name="login" placeholder="Логин" required />
      <input type="password" name="password" placeholder="Пароль" required />
    </div>
  );
}

export default FieldLogin
