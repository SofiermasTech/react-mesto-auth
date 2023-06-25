import { useState } from 'react';
//import { Link } from 'react-router-dom';
//import * as auth from "../utils/auth.js";

const Login = ({ handleLogin }) => {
   const [formValue, setFormValue] = useState({
      email: "",
      password: ""
   });

   const handleChange = (evt) => {
      const { name, value } = evt.target;
      setFormValue({
         ...formValue,
         [name]: value,
      });
   };

   const handleSubmit = (evt) => {
      evt.preventDefault();
      
      handleLogin(formValue);
     /* setFormValue({
         email: "",
         password: "",
       }); */
   };

   return (
      <div className="auth">
         <h2 className="auth__title">Вход</h2>
         <form className="auth__form" onSubmit={handleSubmit} noValidate>
            <input id="email" name="email" type="email" placeholder="Email" value={formValue.email} onChange={handleChange} required />
            <input id="password" name="password" type="password" placeholder="Пароль" value={formValue.password} onChange={handleChange} minLength="8" required />
            <button className="auth__button" type="submit">Войти</button>
         </form>
      </div>
   );
};

export default Login;