import React,{ useState } from 'react'
import { FaStar } from 'react-icons/fa'
import Container from '../../layout/container'
import check from '../../Imgs/check.png'
import buyurtma from '../../Imgs/buyurtma.png'
import togora from '../../Imgs/togora.jpg'
import toyga from '../../Imgs/toyga.jpg'
import toyga3 from '../../Imgs/toyga3.jpg'
import toyga4 from '../../Imgs/toyga4.jpg'

import './buyurtma.css'
const Buyurtma = () => {
    const [ratingOne, setRatingOne] = useState(null)
    const [hoverOne, setHoverOne] = useState(null)
  return (
    <Container>
          <h2 className='buyurtma__title'>To’y va marosimlar uchun buyurtma</h2>
          <div className='buyurtma'>
           <div className="buyurtma__card">
             <img src={toyga4} alt="" />
             <p>Qovurilga sazan baliq</p>
             <p><span>1kg:</span>50 000 so’m</p>
             <div className="menu__star">
             {[...Array(5)].map((star, index) => {
              const currentRatingOne = index + 1;
              return (
                <label >
                  <input type="radio" name="ratingOne" value={currentRatingOne}
                    onClick={() => setRatingOne(currentRatingOne)}
                  />
                  <FaStar
                    className='star'
                    size={30}
                    color={currentRatingOne <= (hoverOne || ratingOne) ? "#ffc107" : "#e4e5e9"}
                    onMouseEnter={() => setHoverOne(currentRatingOne)}
                    onMouseLeave={() => setHoverOne(null)}
                  />
                </label>
              );

            })}
             </div>
           </div>
           <div className="buyurtma__card">
             <img src={toyga3} alt="" />
             <p>Qovurilga sazan baliq</p>
             <p><span>1kg:</span>50 000 so’m</p>
             <div className="menu__star">
             {[...Array(5)].map((star, index) => {
              const currentRatingOne = index + 1;
              return (
                <label >
                  <input type="radio" name="ratingOne" value={currentRatingOne}
                    onClick={() => setRatingOne(currentRatingOne)}
                  />
                  <FaStar
                    className='star'
                    size={30}
                    color={currentRatingOne <= (hoverOne || ratingOne) ? "#ffc107" : "#e4e5e9"}
                    onMouseEnter={() => setHoverOne(currentRatingOne)}
                    onMouseLeave={() => setHoverOne(null)}
                  />
                </label>
              );

            })}
             </div>
           </div>
           <div className="buyurtma__card">
             <img src={togora} alt="" />
             <p>Qovurilga sazan baliq</p>
             <p><span>1kg:</span>50 000 so’m</p>
             <div className="menu__star">
             {[...Array(5)].map((star, index) => {
              const currentRatingOne = index + 1;
              return (
                <label >
                  <input type="radio" name="ratingOne" value={currentRatingOne}
                    onClick={() => setRatingOne(currentRatingOne)}
                  />
                  <FaStar
                    className='star'
                    size={30}
                    color={currentRatingOne <= (hoverOne || ratingOne) ? "#ffc107" : "#e4e5e9"}
                    onMouseEnter={() => setHoverOne(currentRatingOne)}
                    onMouseLeave={() => setHoverOne(null)}
                  />
                </label>
              );

            })}
             </div>
           </div>
           <div className="buyurtma__card">
             <img src={toyga} alt="" />
             <p>Qovurilga sazan baliq</p>
             <p><span>1kg:</span>50 000 so’m</p>
             <div className="menu__star">
             {[...Array(5)].map((star, index) => {
              const currentRatingOne = index + 1;
              return (
                <label >
                  <input type="radio" name="ratingOne" value={currentRatingOne}
                    onClick={() => setRatingOne(currentRatingOne)}
                  />
                  <FaStar
                    className='star'
                    size={30}
                    color={currentRatingOne <= (hoverOne || ratingOne) ? "#ffc107" : "#e4e5e9"}
                    onMouseEnter={() => setHoverOne(currentRatingOne)}
                    onMouseLeave={() => setHoverOne(null)}
                  />
                </label>
              );

            })}
             </div>
           </div>
           
        </div>
        <div className='buyurtma__bottom'>
           <h2>Nega mijozlar bizning mahsulotlarni tanlashdi?</h2>
           <div className='buyurtma__bottom__box'>
            <div className='buyurtma__bottom__box__info'>
              <p>"Sheyka" kafesida tayyorlangan baliqlar mazasi jihatidan boshqa kafelardan ajralib turadi. Kafemizda baliqlarning toza suvda boqilishiga alohida e’tibor qaratiladi. Shu bilan birgalikda xo‘randalarimizdan ham kafe hududida spirtli ichimliklar iste’mol qilishi va tamaki chekishlarini talab qilamiz. Baliqlar yangi va barra hamda tez yetkazib berish xizmati ham mavjud.</p>
              <div className='checked'>
                 <img src={check} alt="" />
                 <p>Doimo barra baliqlar</p>
              </div>
              <div className='checked'>
                 <img src={check} alt="" />
                 <p>Mazzali va yoqimli</p>
              </div>
              <div className='checked'>
                 <img src={check} alt="" />
                 <p>Tez yetkazib berish</p>
              </div>
            </div>
            <div className='buyurtma__bottom__box__img'>
              <img src={buyurtma} alt="" />
            </div>
           </div>
        </div>
    </Container>
  )
}

export default Buyurtma