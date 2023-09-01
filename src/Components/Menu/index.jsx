import React from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { FaStar } from 'react-icons/fa'
import Container from '../../layout/container'
import menu from '../../Imgs/menu.png'
import sazan from '../../Imgs/sazan.jpg'
import togora from '../../Imgs/togora.jpg'
import toyga from '../../Imgs/toyga.jpg'
import toyga2 from '../../Imgs/toyga2.jpg'
import toyga3 from '../../Imgs/toyga3.jpg'
import toyga4 from '../../Imgs/toyga4.jpg'
import './menu.css'
const Menu = () => {
  const { t, i18n } = useTranslation();

  const [ratingOne, setRatingOne] = useState(null)
  const [hoverOne, setHoverOne] = useState(null)
  const [ratingTwo, setRatingTwo] = useState(null)
  const [hoverTwo, setHoverTwo] = useState(null)
  const [ratingThree, setRatingThree] = useState(null)
  const [hoverThree, setHoverThree] = useState(null)
  const [ratingFour, setRatingFour] = useState(null)
  const [hoverFour, setHoverFour] = useState(null)
  const [ratingFive, setRatingFive] = useState(null)
  const [hoverFive, setHoverFive] = useState(null)
  const [ratingSix, setRatingSix] = useState(null)
  const [hoverSix, setHoverSix] = useState(null)
  const [ratingSeven, setRatingSeven] = useState(null)
  const [hoverSeven, setHoverSeven] = useState(null)
  const [ratingEat, setRatingEat] = useState(null)
  const [hoverEat, setHoverEat] = useState(null)
  return (
    
<div className="menu__back" id='menyu'>
    <Container>
       <h2 className='menu__title'>{t('h3')}</h2>
       <div className='menu'>
           <div className="menu__card">
             <img src={menu} alt="" />
             <p>{t('li')}</p>
             <p><span>1kg:</span>80 000 so’m</p>
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
           <div className="menu__card">
             <img src={sazan} alt="" />
             <p>{t('li')}</p>
             <p><span>1kg:</span>75 000 so’m</p>
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
           <div className="menu__card">
             <img src={menu} alt="" />
             <p>{t('li')}</p>
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
           <div className="menu__card">
             <img src={togora} alt="" />
             <p>{t('li')}</p>
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
           <div className="menu__card">
             <img src={toyga} alt="" />
             <p>{t('li')}</p>
             <p><span>1kg:</span>50 000 so’m</p>
             <div className="menu__star">
             {[...Array(5)].map((star, index) => {
              const currentRatingFive = index + 1;
              return (
                <label >
                  <input type="radio" name="ratingOne" value={currentRatingFive}
                    onClick={() => setRatingFive(currentRatingFive)}
                  />
                  <FaStar
                    className='star'
                    size={30}
                    color={currentRatingFive <= (hoverFive || ratingFive) ? "#ffc107" : "#e4e5e9"}
                    onMouseEnter={() => setHoverFive(currentRatingFive)}
                    onMouseLeave={() => setHoverFive(null)}
                  />
                </label>
              );

            })}
             </div>
           </div>
           <div className="menu__card">
             <img src={toyga2} alt="" />
             <p>{t('li')}</p>
             <p><span>1kg:</span>50 000 so’m</p>
             <div className="menu__star">
             {[...Array(5)].map((star, index) => {
              const currentRatingSix = index + 1;
              return (
                <label >
                  <input type="radio" name="ratingOne" value={currentRatingSix}
                    onClick={() => setRatingSix(currentRatingSix)}
                  />
                  <FaStar
                    className='star'
                    size={30}
                    color={currentRatingSix <= (hoverSix || ratingSix) ? "#ffc107" : "#e4e5e9"}
                    onMouseEnter={() => setHoverSix(currentRatingSix)}
                    onMouseLeave={() => setHoverSix(null)}
                  />
                </label>
              );

            })}
             </div>
           </div>
           <div className="menu__card">
             <img src={toyga3} alt="" />
             <p>{t('li')}</p>
             <p><span>1kg:</span>50 000 so’m</p>
             <div className="menu__star">
             {[...Array(5)].map((star, index) => {
              const currentRatingSeven = index + 1;
              return (
                <label >
                  <input type="radio" name="ratingOne" value={currentRatingSeven}
                    onClick={() => setRatingSeven(currentRatingSeven)}
                  />
                  <FaStar
                    className='star'
                    size={30}
                    color={currentRatingSeven <= (hoverSeven || ratingSeven) ? "#ffc107" : "#e4e5e9"}
                    onMouseEnter={() => setHoverSeven(currentRatingSeven)}
                    onMouseLeave={() => setHoverSeven(null)}
                  />
                </label>
              );

            })}
             </div>
           </div>
           <div className="menu__card">
             <img src={toyga4} alt="" />
             <p>{t('li')}</p>
             <p><span>1kg:</span>50 000 so’m</p>
             <div className="menu__star">
             {[...Array(5)].map((star, index) => {
              const currentRatingEat = index + 1;
              return (
                <label >
                  <input type="radio" name="ratingOne" value={currentRatingEat}
                    onClick={() => setRatingEat(currentRatingEat)}
                  />
                  <FaStar
                    className='star'
                    size={30}
                    color={currentRatingEat <= (hoverEat || ratingEat) ? "#ffc107" : "#e4e5e9"}
                    onMouseEnter={() => setHoverEat(currentRatingEat)}
                    onMouseLeave={() => setHoverEat(null)}
                  />
                </label>
              );

            })}
             </div>
           </div>
       </div>
    </Container>
</div>
  )
}

export default Menu