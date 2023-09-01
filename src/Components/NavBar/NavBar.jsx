import React from 'react'
import './NavBar.css'
import { useTranslation } from 'react-i18next';
import phone from '../../Imgs/phone.png'
import logo from '../../Imgs/logo.png'
function NavBar() {
  const { t, i18n } = useTranslation();



  function TranslationFunc(e) {
    i18n.changeLanguage(e.target.value)
  }
  const [click, setClick] = React.useState(false);
  const [navBar] = React.useState(false)
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  return (
    <div className={navBar ? 'navbar active' : 'navbar'}  >
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <a exact href="#home" className="nav-logo" >
            <img src={logo} alt="" />
          </a>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a
                exact
                href="#about"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
               {t('li1')}
              </a>
            </li>
            <li className="nav-item">
              <a
                exact
                href="#menyu"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                {t('li2')}
              </a>
            </li>
            <li className="nav-item">
              <a
                exact
                href="#marosimlar"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                {t('li3')}
              </a>
            </li>
            <li className="nav-item">
              <a
                exact
                href="#input"
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                {t('li4')}
              </a>
            </li>
            <li>
              <select className='nav-item_select__bar' onChange={TranslationFunc}>
                <option value="uz" className='nav-item_select__option'>O`z</option>
                <option value="en" className='nav-item_select__option'>En</option>
                <option value="ru" className='nav-item_select__option'>RU</option>
              </select>
            </li>
          </ul>
          <div className='nav-item__phone'>
            <a href="tel:+998998088989">
              <img src={phone} alt="" />
              <p>
                +998 (99) 808 89 89
              </p>
            </a>

            <select className='nav-item_select' onChange={TranslationFunc}>
              <option value="uz" className='nav-item_select__option' >O`z</option>
              <option value="en" className='nav-item_select__option'>En</option>
              <option value="ru" className='nav-item_select__option'>RU</option>
            </select>
          </div>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </ div>
  );
}

export default NavBar