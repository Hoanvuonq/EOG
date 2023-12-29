import React from 'react'
import Design1 from '../../../assets/avax/design-1.png'
import Design2 from '../../../assets/avax/design-2.png'
import Design3 from '../../../assets/avax/design-3.png'
import Design4 from '../../../assets/avax/design-4.png'


const Avax = () => {
    return (
        <div className='md:block hidden'>
            <div className=''>
                <div className="absolute w-full z-20">
                    <img src={Design2} alt="Design" width={200} className='absolute top-0 left-[24%] z-10 md:w-[150px] w-[100px]' />
                </div>
            </div>
            <div className=''>
                <div className="absolute w-full z-30">
                    <img src={Design1} alt="Design" width={200} className='absolute top-0 left-[19%] z-10 md:w-[280px] w-[100px]' />
                </div>
            </div>
            <div className=''>
                <div className="absolute w-full z-30">
                    <img src={Design3} alt="Design" width={200} className='absolute top-6 left-[26%] z-10 md:w-[76px] w-[100px]' />
                </div>
            </div>
            <div className=''>
                <div className="absolute w-full z-[80] ">
                    <img src={Design4} alt="Design" width={200} className='absolute top-[560px] right-[12%] z-10 md:w-[240px] w-[100px] shadow-custom cursor-pointer' />
                </div>
            </div>

        </div>

    )
}

export default Avax;

