import React from "react";
import './style.css';

import instagram from './../../img/icons/instagram.svg';
import gitHub from './../../img/icons/gitHub.svg';
import habr from './../../img/icons/habr.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/shalygin_serj/">
                <img src={instagram} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a target="_blank" rel="noreferrer" href="https://github.com/Shalygin-Sergey">
                <img src={gitHub} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a target="_blank" rel="noreferrer" href="https://career.habr.com/shalygin-sergey">
                <img src={habr} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2023 Shalygin Sergey</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
