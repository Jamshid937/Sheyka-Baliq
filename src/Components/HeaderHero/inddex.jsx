import React from 'react'
import Container from '../../layout/container'
import './HeaderHero.css'
import istockphoto from '../../Imgs/istockphoto.png'
import svejiy from '../../Imgs/svejiy.png'
import Ellipse from '../../Imgs/Ellipse.png'
const HeaderHero = () => {
  return (
    <div className='headderHeroBack'>
      <Container>      
        <div className='headerHero'>
         <div className='headerHero__box'>
            <h1 className='headerHero__box__title'>Ishtaha ochar mazzali Baliqlar</h1>
            <p className='headerHero__box__text'>Pishirilgan baliqlar dasturxoningizda,to’y va marosimlarda hozir u nozir</p>

            <div className='headerHero__box__card'>
              <img src={svejiy} alt="" />
              <div className='headerHero__box__card__info'>
                <h4 className='headerHero__box__card__info__title'>Yangi so’yilgan</h4>
                <p className='headerHero__box__card__info__text'>Bizning baliqlar toza suvda boqilgan va yangi pishirilgan</p>
              </div>
            </div>
            <div className='headerHero__box__card'>
              <img src={Ellipse} alt="" />
              <div className='headerHero__box__card__info'>
                <h4 className='headerHero__box__card__info__title'>To’y va marosimlar</h4>
                <p className='headerHero__box__card__info__text'>Biz katta marosimlar va burutmalrni ham qabul qilamiz</p>
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