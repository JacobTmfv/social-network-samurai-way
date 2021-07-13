import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";


function Header(props) {
  return (
      <header className={s.headerClass}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/647px-Apple_logo_black.svg.png" alt=""/>
              <div className={s.loginBlock}>
                  {props.isAuth ? props.login : <NavLink to={'/login'}>
                      Login
                  </NavLink>}
              </div>
      </header>
  );
}

export default Header;