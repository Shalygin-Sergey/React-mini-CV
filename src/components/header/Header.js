import React from 'react';
import './style.css';

import CV from './../../helpers/CV.pdf';


const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong><em>Сергей Шалыгин</em></strong><br />
          frontend-разработчик
        </h1>
        <div className="header__text">
          <p></p>
        </div>
        <a href={CV} download={CV} className="btn">Скачать CV</a>
      </div>
    </header>
  );
}

export default Header;
