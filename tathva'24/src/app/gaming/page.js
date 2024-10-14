import React from 'react'
import styles from '../gaming/gaming.module.css'
import Image from 'next/image'
export default function GamingPage() {
  return (
    <div className='flex bg-black w-full h-screen overflow-hidden'>
      {/* left side */}
      <div className='flex flex-col w-1/3 justify-evenly items-center h-screen '> 
      <div className='flex flex-col items-center gap-5'>
      <div className={`text-white text-6xl font-bold ${styles.text} mb-5`}>Gaming</div>
      <div className={`text-white text-6xl font-bold ${styles.text} `}>Conclave</div></div>
      <div className={`text-white text-1xl text-start ${styles.text_description} mb-4 px-20`}>Gekko the Angeleno leads a tight-knit crew of calamitous creatures. His buddies bound forward, scattering enemies out of the way, with Gekko chasing them down to regroup and go again.</div>
      <div className='flex justify-center w-full'>
        <div className='flex flex-col justify-center align-center  w-1/3  h-12'>
      <button className={`flex bg-white text-white text-3xl text-center font-IBM Plex Sans px-10  py-3 ${styles.buttonplay}`}>PLAY</button>
      <button className={`flex bg-white text-1xl text-white text-center font-IBM Plex Sans px-10 h-2 ${styles.buttoncomp}`}>COMPETITVE</button>
     
      </div>
      </div>
      </div>
      {/* right side */}
      <div className='flex flex-row w-2/3 h-screen relative'>
           <div>
            <Image src="/GEKKO BG.svg" alt="Gaming image" width={550} height={0} className='flex absolute left-0 top-10' />
           </div>
           <div>
            <Image src="/gamingbg.svg" alt="Gaming image" width={385} height={0} className='flex absolute right-2 top-20'/>
           </div>
           <div>
            <Image src="/HERO IMG.svg" alt="Gaming image" width={285} height={0} className={`flex absolute ${styles.middleimgg}`}/>
           </div>

      </div>
    </div>
  )
}
