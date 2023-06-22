import React from "react";
import logo from '../images/logo-white.svg';
import { Route, Link, Routes } from "react-router-dom";

const Header = (props) => {
   return (
      <header className="header">
         <img
            src={logo}
            alt="Логотип проекта Место."
            className="header__logo"
         />

         <div className="header__nav">
            {props.isLoggedIn ? (
               <>
                  <p className="header__link">{props.email}</p>
                  < Link to='/sign-in' className="header__link" onClick={props.isLogout}>Выйти</Link>
               </>
            ) : (
               <Routes>
                  < Route path='/sign-up' element={
                     < Link to='/sign-in' className="header__link">Вход</Link>
                  } />
                  < Route path='/sign-in' element={
                     < Link to='/sign-up' className="header__link">Регистрация</Link>
                  } />
               </Routes>
            )}
         </div>


      </header>
   )
}

export default Header;