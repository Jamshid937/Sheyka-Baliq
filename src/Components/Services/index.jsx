import React from 'react'
import Container from '../../layout/container'
import './services.css'
import services from '../../Imgs/services.png'
const Services = () => {
  return (
    <div className="servicesBack">
    <Container>
       <h2 className='services__title'>
          Tez yetkazib berish xizmati
        </h2>  
        <div className="services">
           <div className="services__img">
            <img src={services} alt="" />
            </div>
            <div className="services__info">
            <p>Bizning manzil:Toshkent shahar cholonzor metrosi ro’parasi</p>    
            </div>    
        </div>  
    </Container>
    </div>

  )
}

export default Services