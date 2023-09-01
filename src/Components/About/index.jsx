import React from 'react'
import Container from '../../layout/container'
import './about.css'
import { useTranslation } from 'react-i18next';
import aboutImg from '../../Imgs/aboutImg.png'
import aboutImg2 from '../../Imgs/aboutImg2.png'
import aboutImg3 from '../../Imgs/aboutImg3.png'
const About = () => {
  const { t, i18n } = useTranslation();


  return (
    <Container>
        <h2 className='about__title' id="about">{t('h2')}</h2>
        <div className="about">
            <div className="about__imgs">
                <div>
                    <img src={aboutImg} alt="" />
                </div>
                <div>
                  <img src={aboutImg2} alt="" />
                  <img src={aboutImg3} alt="" />
                </div>
            </div>
            <div className="about__info">
                <p>
                {t('p5')}
                </p>
            </div>
        </div>
    </Container>
  )
}

export default About