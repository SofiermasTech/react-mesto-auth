import { useState } from 'react';
import { Link, /*useNavigate*/ } from 'react-router-dom';
//import * as auth from '../utils/auth.js';

const Register = (props) => {
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

   const handleSubmit = (evt) => {
      evt.preventDefault();
     
      props.handleRegistration(formValue);
   };

   return (

      <div className="auth">
         <h2 className="auth__title">Регистрация</h2>
         <form className="auth__form" onSubmit={handleSubmit} noValidate>
            <input id="email" name="email" type="email" value={formValue.email} onChange={handleChange} placeholder="Email" required />
            <input id="password" name="password" type="password" value={formValue.password} onChange={handleChange} minLength="8" placeholder="Пароль" required />
            <button className="auth__button" type="submit">Зарегистрироваться</button>
         </form>
         <p className="auth__signin">Уже зарегистрированы? 
            <Link to="/sign-in" className="auth__login-link"> Войти</Link>
         </p>
      </div>
   );
};

export default Register;