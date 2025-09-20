import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Dainik from '../Components/Dainik'
import Testimonials from '../Components/Testimonials'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Dainik/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default Home