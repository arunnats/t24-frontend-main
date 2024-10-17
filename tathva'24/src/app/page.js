import React from 'react'
import FooterDesktop from './components/FooterDesktop/FooterDesktop'
import FooterMobile from './components/FooterMobile/FooterMobile'
import Hero from './components/Hero/Hero'

const page = () => {
  return (
    <div className='w-screen h-screen'>
      <FooterDesktop />
      <FooterMobile />
      <Hero />
    </div>
  )
}

export default page
