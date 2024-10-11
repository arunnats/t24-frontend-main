import React from 'react'
import Image from 'next/image'

import styles from './Footer.module.css'

const Footer = () => {
    

    return (
        
        <div className={`w-screen block`}>
            {/* <Image src="/Footer0/Rectangle_28.svg" alt="Tathva 24" width={100} height={100} />
      <Image src="/Footer0/rectangle_29_4x.webp" alt="Tathva 24" width={100} height={100} className='w-[318px] h-[131px] '/> */}
            <div className="left_side pl-[59px] py-[59px] h-[679px] bg-[#313234] rounded-t-[58px] relative">
                <Image src="/Footer0/Screw.png" alt="Tathva 24" width={39} height={39} className='hover:rotate-180 transition-all duration-500 absolute left-[17px] bottom-[17px]' />
                <Image src="/Footer0/Screw.png" alt="Tathva 24" width={39} height={39} className='hover:rotate-180 transition-all duration-500 absolute right-[17px] top-[17px]' />
                <Image src="/Footer0/Screw.png" alt="Tathva 24" width={39} height={39} className='hover:rotate-180 transition-all duration-500 absolute left-[17px] top-[17px]' />
                <Image src="/Footer0/Screw.png" alt="Tathva 24" width={39} height={39} className='hover:rotate-180 transition-all duration-500 absolute right-[17px] bottom-[17px]' />
                <div className="flex">
                    <div className="battery_container relative w-[112px] h-[232px]">
                        <Image  src="/Footer0/group_20.webp" alt="Tathva 24" width={112} height={232} className={`${styles.battery1} battery absolute z-10 w-[112px] h-[232px]`} />
                        <Image  src="/Footer0/group_26.webp" alt="Tathva 24" width={112} height={232} className={`${styles.battery2} battery battery2 absolute z-10 w-[112px] h-[232px]`} />
                    </div>
                   
                    <Image src="/Footer0/footer_txt.webp" alt="Tathva 24" width={475} height={232} className='w-[475px] h-[232px] ' />
                </div>
                <div className="orangeLines flex flex-col absolute right-0 ">
                    <div className="orangeLine bg-[#FF7A00] w-[100px] my-2 h-4 rounded-l-lg"></div>
                    <div className="orangeLine bg-[#FF7A00] w-[100px] my-2 h-4 rounded-l-lg"></div>
                    <div className="orangeLine bg-[#FF7A00] w-[100px] my-2 h-4 rounded-l-lg"></div>
                    <div className="orangeLine bg-[#FF7A00] w-[100px] my-2 h-4 rounded-l-lg"></div>
                    <div className="orangeLine bg-[#FF7A00] w-[100px] my-2 h-4 rounded-l-lg"></div>
                </div>
            </div>


        </div>
    )
}

export default Footer
