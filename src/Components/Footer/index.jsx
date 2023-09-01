import React from 'react'
import Container from '../../layout/container'
import logo from '../../Imgs/logo.png'
import phoneFooter from '../../Imgs/phoneFooter.png'
import location from '../../Imgs/location.png'
import './footer.css'
const Footer = () => {
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
               Biz haqimizda
              </a>
            </li>
            <li className="footer-item">
              <a
                exact
                href="#servic"
                activeClassName="active"
                className="nav-links"
             
              >
                Menyu
              </a>
            </li>
            <li className="footer-item">
              <a
                exact
                href="#footer"
                activeClassName="active"
                className="nav-links"
               
              >
                To’ya va marosimlar
              </a>
            </li>
            <li className="footer-item">
              <a
                exact
                href="#footer"
                activeClassName="active"
                className="nav-links"
               
              >
                Yetkazish
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
                   <p className='footer__contact__phone__text'>Bizning manzil:Toshkent shahar cholonzor metrosi ro’parasi</p>
                </div>
          </div>
       </div>
       <p className='creator'>© 2023 PrimeTech. Barcha huquqlar himoyalangan</p>
    </Container>
  )
}

export default Footer