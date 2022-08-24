import React from 'react'
import Navbar from '../Components/Navbar'
import Announcement from '../Components/Announcement' 
import styled from 'styled-components'
import Slider from '../Components/Slider'
import Categories from '../Components/Categories'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'
import Products from '../Components/Products'


const Container = styled.div`
 
`
function Home() {
  return (
    <Container>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Home
