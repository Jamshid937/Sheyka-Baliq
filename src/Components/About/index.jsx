import React from 'react'
import Container from '../../layout/container'
import './about.css'

import aboutImg from '../../Imgs/aboutImg.png'
import aboutImg2 from '../../Imgs/aboutImg2.png'
import aboutImg3 from '../../Imgs/aboutImg3.png'
const About = () => {
  return (
    <Container>
        <h2 className='about__title'>Biz haqimizda</h2>
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
                "Sheyka" baliq 2017-yilda Toshkent viloyati Toshkent tumani Keles shahrida o‘z faoliyatini boshladi va bugungi kungacha faoliyatini davom ettirib kelmoqda. Ushbu kafe mazali baliq mahsulotlari bilan mijozlar mehrini qozonib bormoqda.
                </p>
            </div>
        </div>
    </Container>
  )
}

export default About