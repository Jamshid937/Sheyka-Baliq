import React from 'react'
import { useTranslation } from 'react-i18next';

import Container from '../../layout/container'
import './services.css'
import services from '../../Imgs/services.png'
const Services = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="servicesBack">
    <Container>
       <h2 className='services__title'>
       <p>{t('h6')}</p>
        </h2>  
        <div className="services">
           <div className="services__img">
            <img src={services} alt="" />
            </div>
            <div className="services__info">
            <p><p>{t('h8')}</p></p>    
            </div>    
        </div>  
    </Container>
    </div>

  )
}

export default Services