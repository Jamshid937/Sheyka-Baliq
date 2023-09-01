import React from 'react'
import Container from '../../layout/container'
import { useTranslation } from 'react-i18next';

import './HeaderHero.css'
import istockphoto from '../../Imgs/istockphoto.png'
import svejiy from '../../Imgs/svejiy.png'
import Ellipse from '../../Imgs/Ellipse.png'
const HeaderHero = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className='headderHeroBack'>
      <Container>      
        <div className='headerHero'>
         <div className='headerHero__box'>
            <h1 className='headerHero__box__title'>{t('h')}</h1>
            <p className='headerHero__box__text'>{t('p13')}</p>

            <div className='headerHero__box__card'>
              <img src={svejiy} alt="" />
              <div className='headerHero__box__card__info'>
                <h4 className='headerHero__box__card__info__title'>{t('p9')}</h4>
                <p className='headerHero__box__card__info__text'>{t('p6')}</p>
              </div>
            </div>
            <div className='headerHero__box__card'>
              <img src={Ellipse} alt="" />
              <div className='headerHero__box__card__info'>
                <h4 className='headerHero__box__card__info__title'>{t('p10')}</h4>
                <p className='headerHero__box__card__info__text'>{t('p7')}</p>
              </div>
            </div>
         </div>
         <div className='headerHero__box__two'>
             <div className='headerHero__box__two__img'>
              <img src={istockphoto} alt="" />
             </div>
         </div>
        </div>
    </Container>
    </div>
  )
}

export default HeaderHero