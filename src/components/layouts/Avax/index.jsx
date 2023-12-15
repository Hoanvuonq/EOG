import React from 'react'
import Design1 from '../../../assets/avax/avax_1.png'
import Design2 from '../../../assets/avax/avax_2.png'
import Design3 from '../../../assets/avax/avax_3.png'
import Design4 from '../../../assets/avax/avax_4.png'
import Design5 from '../../../assets/avax/avax_5.png'
import SMURFT_CAT17 from "../../../assets/avax/SMURFT_CAT17_45.png"



const Avax = () => {
    return (
        <div className='md:block hidden'>
            <div className="absolute w-full z-10">
                <img src={Design1} alt="Design" width={300} className='absolute top-0 right-0' />
                <img src={Design2} alt="Design" width={140} className='absolute top-18 right-[20%]' />
                <img src={Design3} alt="Design" width={200} className='absolute top-0 right-[40%]' />
                <img src={Design4} alt="Design" width={90} className='absolute top-2 right-[30%]' />
                <img src={Design5} alt="Design" width={60} className='absolute top-10 right-[52%]' />
                <img src={SMURFT_CAT17} alt="Design" width={1400} className='absolute top-[450px]' />
            </div>
        </div>
    )
}

export default Avax;
