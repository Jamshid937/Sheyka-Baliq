import React,{ useState } from 'react'
import { useTranslation } from 'react-i18next';
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
  const { t, i18n } = useTranslation();
    const [ratingOne, setRatingOne] = useState(null)
    const [hoverOne, setHoverOne] = useState(null)
    const [ratingTwo, setRatingTwo] = useState(null)
    const [hoverTwo, setHoverTwo] = useState(null)
    const [ratingThree, setRatingThree] = useState(null)
    const [hoverThree, setHoverThree] = useState(null)
    const [ratingFour, setRatingFour] = useState(null)
    const [hoverFour, setHoverFour] = useState(null)

  return (
    <Container>
          <h2 className='buyurtma__title' id='marosimlar'>{t('h4')}</h2>
          <div className='buyurtma'>
           <div className="buyurtma__card">
             <img src={toyga4} alt="" />
             <p>{t('p12')}</p>
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
             <p>{t('p12')}</p>
             <p><span>1kg:</span>50 000 so’m</p>
             <div className="menu__star">
             {[...Array(5)].map((star, index) => {
              const currentRatingTwo = index + 1;
              return (
                <label >
                  <input type="radio" name="ratingOne" value={currentRatingTwo}
                    onClick={() => setRatingTwo(currentRatingTwo)}
                  />
                  <FaStar
                    className='star'
                    size={30}
                    color={currentRatingTwo <= (hoverTwo || ratingTwo) ? "#ffc107" : "#e4e5e9"}
                    onMouseEnter={() => setHoverTwo(currentRatingTwo)}
                    onMouseLeave={() => setHoverTwo(null)}
                  />
                </label>
              );

            })}
             </div>
           </div>
           <div className="buyurtma__card">
             <img src={togora} alt="" />
             <p>{t('p12')}</p>
             <p><span>1kg:</span>50 000 so’m</p>
             <div className="menu__star">
             {[...Array(5)].map((star, index) => {
              const currentRatingThree = index + 1;
              return (
                <label >
                  <input type="radio" name="ratingOne" value={currentRatingThree}
                    onClick={() => setRatingThree(currentRatingThree)}
                  />
                  <FaStar
                    className='star'
                    size={30}
                    color={currentRatingThree <= (hoverThree || ratingThree) ? "#ffc107" : "#e4e5e9"}
                    onMouseEnter={() => setHoverThree(currentRatingThree)}
                    onMouseLeave={() => setHoverThree(null)}
                  />
                </label>
              );

            })}
             </div>
           </div>
           <div className="buyurtma__card">
             <img src={toyga} alt="" />
             <p>{t('p12')}</p>
             <p><span>1kg:</span>50 000 so’m</p>
             <div className="menu__star">
             {[...Array(5)].map((star, index) => {
              const currentRatingFour = index + 1;
              return (
                <label >
                  <input type="radio" name="ratingOne" value={currentRatingFour}
                    onClick={() => setRatingFour(currentRatingFour)}
                  />
                  <FaStar
                    className='star'
                    size={30}
                    color={currentRatingFour <= (hoverFour || ratingFour) ? "#ffc107" : "#e4e5e9"}
                    onMouseEnter={() => setHoverFour(currentRatingFour)}
                    onMouseLeave={() => setHoverFour(null)}
                  />
                </label>
              );

            })}
             </div>
           </div>
           
        </div>
        <div className='buyurtma__bottom'>
           <h2>{t('h5')}</h2>
           <div className='buyurtma__bottom__box'>
            <div className='buyurtma__bottom__box__info'>
              <p>{t('p')}</p>
              <div className='checked'>
                 <img src={check} alt="" />
                 <p>{t('p2')}</p>
              </div>
              <div className='checked'>
                 <img src={check} alt="" />
                 <p>{t('p3')}</p>
              </div>
              <div className='checked'>
                 <img src={check} alt="" />
                 <p>{t('p4')}</p>
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