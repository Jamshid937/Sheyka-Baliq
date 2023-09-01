import React from 'react'
import { useState } from 'react'
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
  const [ratingOne, setRatingOne] = useState(null)
  const [hoverOne, setHoverOne] = useState(null)
  return (
    
<div className="menu__back">
    <Container>
       <h2 className='menu__title'>Menue</h2>
       <div className='menu'>
           <div className="menu__card">
             <img src={menu} alt="" />
             <p>Qovurilga sazan baliq</p>
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
             <p>Qovurilga sazan baliq</p>
             <p><span>1kg:</span>75 000 so’m</p>
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
             <img src={menu} alt="" />
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
           <div className="menu__card">
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
           <div className="menu__card">
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
           <div className="menu__card">
             <img src={toyga2} alt="" />
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
           <div className="menu__card">
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
           <div className="menu__card">
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
       </div>
    </Container>
</div>
  )
}

export default Menu