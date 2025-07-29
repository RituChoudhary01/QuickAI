import React from 'react'
import Navbar from '../compontents/Navbar'
import Hero from '../compontents/Hero'
import AiTools from '../compontents/AiTools'
import Testimonial from '../compontents/Testimonial'
import Plan from '../compontents/Plan'
import Footer from '../compontents/Footer'

function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <AiTools/>
      <Testimonial/>
      <Plan/>
      <Footer/>
    </>
  )
}

export default Home