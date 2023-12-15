import React from 'react'
import Design1 from '../../../assets/avax/design-1.png'
import Design2 from '../../../assets/avax/avax_1.png'
import Design3 from '../../../assets/avax/avax_2.png'
import Design4 from '../../../assets/avax/avax_4.png'
import KabanHot from '../../../assets/avax/Hot.png'


const Avax = () => {
    return (
        <div className='md:block hidden'>
            <div className="absolute w-full z-10">
                <img src={Design1} alt="Design" width={300} className='absolute top-0 right-0  z-10' />
                <img src={Design2} alt="Design" width={500} className='absolute top-0 left-0  z-10' />
                <img src={Design3} alt="Design" width={300} className='absolute top-0 left-0  z-10' />
                <img src={Design4} alt="Design" width={1000} className='absolute top-10 left-[20%] z-10' />
                <img src={KabanHot} alt="Kaban1" width={800} className='absolute top-[400px] right-0  z-10' />
            </div>
        </div>
    )
}

export default Avax;

