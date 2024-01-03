import React from 'react'
import Design1 from '../../../assets/title.png'
import Design2 from '../../../assets/Buttont.png'

import { Link } from 'react-router-dom'



const Avax = () => {
    return (
        <div className='md:block hidden'>
            <div className=''>
                <div className="absolute w-full z-30">
                    <img src={Design1} alt="Design" width={200} className='absolute top-24 right-[6%] z-10 md:w-[1050px] w-[100px]' />
                </div>
            </div>
            <div className=''>
                <div className="absolute w-full z-40">
                    <img src={Design2} alt="Design" width={200} className='absolute top-56 right-[4%] z-10 md:w-[160px] w-[100px]' />
                </div>
            </div>
        </div>

    )
}

export default Avax;

