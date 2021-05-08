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
        <div className="button__container">
          <a className="button__forget" href="#">
            Забыли пароль?
          </a>
          <button className="button__entry">
            <span className="button__entry-text">Войти</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
