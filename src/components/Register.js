import { useState } from 'react';
import { Link, /*useNavigate*/ } from 'react-router-dom';
//import * as auth from '../utils/auth.js';

const Register = ({ onRegister }) => {
   const [formValue, setFormValue] = useState({
      email: "",
      password: "",
   });

   //const navigate = useNavigate();

   const handleChange = (evt) => {
      const { name, value } = evt.target;
      setFormValue({
         ...formValue,
         [name]: value,
      });
   };

   const handleSubmit = (event) => {
      event.preventDefault();
     
      onRegister(formValue);
   };

   return (

      <div className="auth">
         <h2 className="auth__title">Регистрация</h2>
         <form className="auth__form">
            <input id="email" name="email" type="email" value={formValue.email} onChange={handleChange} placeholder="Email" required />
            <input id="password" name="password" type="password" value={formValue.password} onChange={handleChange} min="8" placeholder="Пароль" required />
            <button className="auth__button" type="submit" onSubmit={handleSubmit}>Зарегистрироваться</button>
         </form>
         <p className="auth__signin">Уже зарегистрированы?
            <Link to="/sign-in" className="auth__login-link">Войти</Link>
         </p>
      </div>
   );
};

export default Register;