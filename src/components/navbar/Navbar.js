import React from 'react';
import { NavLink } from 'react-router-dom';
import BtnDarkMode from './../buttonDarkMode/BtnDarkMode';

import './style.css';

const Navbar = () => {

  const activeLink = 'nav-list__link nav-list__link--active';
  const normalLink = 'nav-list__link';

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo">
            <strong>&lt; Portfolio &gt;</strong>
          </NavLink>

          <BtnDarkMode />

          <ul className="nav-list">

            <li className="nav-list__item">
              <NavLink to="/" className={({ isActive }) => {
                return isActive ? activeLink : normalLink
              }}>
                Главная
              </NavLink>
            </li>

            <li className="nav-list__item">

              <NavLink to="/projects" className={({ isActive }) => {
                return isActive ? activeLink : normalLink
              }}>
                Проекты
              </NavLink>

            </li>
            <li className="nav-list__item">

              <NavLink to="/contacts" className={({ isActive }) => {
                return isActive ? activeLink : normalLink
              }}>
                Контакты
              </NavLink>

            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
