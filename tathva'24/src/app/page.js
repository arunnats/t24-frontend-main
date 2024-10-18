import React from 'react'
import FooterDesktop from './components/FooterDesktop/FooterDesktop'
import FooterMobile from './components/FooterMobile/FooterMobile'
import Hero from './components/Hero/Hero'

const page = () => {
  return (

    <div className="h-screen w-screen">
      <FooterDesktop />
      <FooterMobile />
      <Hero />
      {/* <Flappy /> */}
      <div className=" hero-center relative origin-center w-[60vw] h-full z-20 border-[40px] ">
        <img
          src="/Hero/center.webp"
          alt="Center image"
          className="hero-center absolute origin-center top-[20%] "
        />

        <div className="absolute top-[37%] w-full h-full ">
          <div className="relative left-0 w-full flex items-center justify-center ">
            <img
              src="/Hero/moreblack.gif"
              alt=""
              className=" mix-blend-multiply w-[64%]	"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
