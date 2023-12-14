import React from 'react'
import Design1 from '../../../assets/avax/avax_1.png'
import Design2 from '../../../assets/avax/avax-2.png'
import Box from '../../../assets/avax/box-1.png'



const Avax = () => {
    return (
        <div className='md:block hidden'>
            <div className="absolute w-full z-10">
                <img src={Design1} alt="Design" width={200} className='absolute -top-12 -left-10' />
                <img src={Design2} alt="Design" width={200} className='absolute top-96 right-28' />
                <img src={Box} alt="Design" width={20} className='absolute top-[56px] left-[6.8%]' />
                <img src={Box} alt="Design" width={20} className='absolute top-[56px] left-[44.5%]' />
                <img src={Box} alt="Design" width={20} className='absolute top-[178px] left-[6.8%]' />
                <img src={Box} alt="Design" width={20} className='absolute top-[178px] left-[44.5%]' />

            </div>
        </div>
    )
}

export default Avax;
