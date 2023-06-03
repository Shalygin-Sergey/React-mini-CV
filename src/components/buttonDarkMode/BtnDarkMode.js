import React from 'react';
import sun from './sun.svg';
import moon from './moon.svg';
import './style.css';

const BtnDarkMode = () => {

  const [toggleBtn, setToggleBtn] = React.useState('light');

  const btnRef = React.useRef(null);

  React.useEffect(() => {
    if (toggleBtn === 'dark') {
      document.body.classList.add('dark');
      btnRef.current.classList.add('dark-mode-btn--active')
    } else {
      document.body.classList.remove('dark');
      btnRef.current.classList.remove('dark-mode-btn--active')
    }
  }, [toggleBtn]);

  const toggleDarkMode = () => {
    setToggleBtn((currentValue) => {
      return currentValue === 'light' ? 'dark' : 'light'
    })
  }

  return (
    <button ref={btnRef} className="dark-mode-btn" onClick={toggleDarkMode}>
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
}

export default BtnDarkMode;