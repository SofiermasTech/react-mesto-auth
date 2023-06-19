import React from "react";
import logo from '../images/logo-white.svg';

const Header = () => {
   return (
      <header className="header">
         <img
            src={logo}
            alt="Логотип проекта Место."
            className="header__logo"
         />
      </header>
   )
}

export default Header;