import React from 'react'
import { useTranslation } from 'react-i18next';

import Container from '../../layout/container'
import logo from '../../Imgs/logo.png'
import phoneFooter from '../../Imgs/phoneFooter.png'
import location from '../../Imgs/location.png'
import './footer.css'
const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <Container>
       <div className='footer'>
        <div>
         <a exact href="#home" className="nav-logo" >
            <img src={logo} alt="" />
          </a>
        </div>

          <ul className='footer-menu'>
          <li className="footer-item">
              <a
                exact
                href="#about"
                activeClassName="active"
                className="nav-links"
          
              >
               {t('li1')}
              </a>
            </li>
            <li className="footer-item">
              <a
                exact
                href="#servic"
                activeClassName="active"
                className="nav-links"
             
              >
                {t('li2')}
              </a>
            </li>
            <li className="footer-item">
              <a
                exact
                href="#footer"
                activeClassName="active"
                className="nav-links"
               
              >
                {t('li3')}
              </a>
            </li>
            <li className="footer-item">
              <a
                exact
                href="#footer"
                activeClassName="active"
                className="nav-links"
               
              >
                {t('li4')}
              </a>
            </li>
          </ul>
       </div>
       <div className='footer__bottom'>
          <div className='footer__bottom__map'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d47908.455319179164!2d69.1833450192056!3d41.368034504028714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s%20Toshkent%20tumani%2C%20Keles%20shaxri.%20Toshkent%20tumani%20Voenkomad!5e0!3m2!1sru!2s!4v1693549395384!5m2!1sru!2s"></iframe>
          </div>
          <div className='footer__contact'>
                <div className='footer__contact__phone'>
                   <img src={phoneFooter} alt="" />
                   <p>+998 90 809 89 89</p>
                </div>
                <div className='footer__contact__phone'>
                   <img src={location} alt="" />
                   <p className='footer__contact__phone__text'>{t('h8')}</p>
                </div>
          </div>
       </div>
       <p className='creator'>{t('creator')}</p>
    </Container>
  )
}

export default Footer