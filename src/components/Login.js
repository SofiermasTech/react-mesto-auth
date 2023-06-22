import { useState } from 'react';
//import { Link } from 'react-router-dom';
//import * as auth from "../utils/auth.js";

const Login = ({ onLogin }) => {
   const [formValue, setFormValue] = useState({});

   const handleChange = (evt) => {
      const { name, value } = evt.target;
      setFormValue({
         ...formValue,
         [name]: value,
      });
   };

   const handleSubmit = (evt) => {
      evt.preventDefault();
      if (!formValue.email || !formValue.password) {
         return;
      }
      onLogin(formValue);
   };

   return (
      <div className="auth">
         <h2 className="auth__title">Вход</h2>
         <form className="auth__form" onSubmit={handleSubmit}>
            <input id="email" name="email" type="email" placeholder="Email" value={formValue.email} onChange={handleChange} required />
            <input id="password" name="password" type="password" placeholder="Пароль" value={formValue.password} onChange={handleChange} min="8" required />
            <button className="auth__button" type="submit">Войти</button>
         </form>
      </div>
   );
};

export default Login;