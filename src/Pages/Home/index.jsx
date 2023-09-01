import React from 'react'
import About from '../../Components/About'
import Buyurtma from '../../Components/Buyurtma'
import Footer from '../../Components/Footer'
import HeaderHero from '../../Components/HeaderHero/inddex'
import Menu from '../../Components/Menu'
import NavBar from '../../Components/NavBar/NavBar'
import Services from '../../Components/Services'
import Validate from '../../Components/Validate'
import Container from '../../layout/container'


const Home = () => {
  return (
    <>
          <NavBar></NavBar>
       <HeaderHero></HeaderHero>
      <Container>
        <About></About>
      </Container>
      <Menu></Menu>
       <Buyurtma></Buyurtma>
       <Services></Services>
       <Validate></Validate>
       <Footer></Footer> 
    </>


  )
}

export default Home