// components/Modal.js
import React from 'react';
import styles from "./Worskshopmodal.module.css";
import Cartridge from '../workshopCartridge/cartridge_comp';

const Workshopmodal = () => {
  return (
    <div className={`flex-col md:flex-row flex justify-center items-center md:h-[100vh] ${styles.plusJakartaFont}`}>
      <div className="w-[380px] md:w-[480px] m-2">
          <Cartridge 
            imageSrc="/WorkshopCartridge/workshop.jpg"
            title="DATA SCIENCE"
            price="₹999"
            date="27 OCT"
            registrationLink="https://www.google.com/"
            description="LOREM IPSUM DOLOR SIT AMET CONSECTETUR. AMET DOLOR MAURIS NIBH VIVAMUS VELIT LECTUS. UT FRINGILLA MALESUADA ULLAMCORPER ET JUSTO VARIUS BLANDIT NEQUE MASSA. MASSA PELLENTESQUE VOLUTPAT ET ENIM LAOREET BIBENDUM DICTUMST. CURSUS ETIAM LOREM ID IACULIS ELEMENTUM NISL CURSUS TRISTIQUE ID."
          /> 
      </div>
      <div className='p-2 m-2 w-[80%] md:w-[40%]'>
        <h1 className='text-5xl mb-2 font-bold'>Prompt Engineering</h1>
        <h2 className='text-lg mb-4'>Learn the language of AI</h2>
        <h1 className='text-2xl mb-4 font-bold'>About the workshop</h1>
        <p className='mb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste exercitationem autem ex animi, fuga dolorum. Praesentium non eveniet ab ex, aut voluptatem suscipit explicabo hic quas distinctio molestiae a dicta!
        Libero modi esse, ad sunt neque culpa aliquam reiciendis tenetur est explicabo natus. Voluptate assumenda, beatae fuga saepe mollitia accusamus praesentium maxime fugiat ab et iusto voluptatibus magnam pariatur ad.</p>
        <h1 className='text-xl font-bold'>Contacts: </h1>
        <br/>
        <div className='flex justify-around text-lg'>
          <div className='flex-col mb-1'>
              <p>Nikita</p>
              <p>9191919191</p>
          </div>
          <div className='flex-col mb-1'>
              <p>Nikita</p>
              <p>9191919191</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Workshopmodal