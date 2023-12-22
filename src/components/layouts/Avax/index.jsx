import React from 'react'
import Design1 from '../../../assets/avax/design-1.png'
import Design2 from '../../../assets/avax/design-2.png'
import Design3 from '../../../assets/avax/design-3.png'
import Design4 from '../../../assets/avax/design-4.png'
import Design5 from '../../../assets/avax/design-5.png'
import Design6 from '../../../assets/avax/design-6.png'
import Design7 from '../../../assets/avax/design-7.png'
import Title from '../../../assets/avax/title.png'




const Avax = () => {
    return (
        <div className='avax'>
            <div className="absolute w-full z-20 md:block hidden">
                <img src={Design1} alt="Design" width={260} className='absolute top-[220px] left-32 z-10' />
                <img src={Design2} alt="Design" width={160} className='absolute top-[160px] left-[24%] z-10' />
                <img src={Design3} alt="Design" width={260} className='absolute top-[180px] right-[14%] z-10' />
                <img src={Design4} alt="Design" width={340} className='absolute top-[220px]  right-[1%] z-10' />
                <img src={Design5} alt="Design" width={180} className='absolute top-[520px] right-[24%] z-10' />
                <img src={Design6} alt="Design" width={180} className='absolute top-[480px] left-[24%] z-10' />
                <img src={Design7} alt="Design" width={1140} className='absolute top-[510px] z-10 w-full' />
                <img src={Title} alt="Design" width={100} className='absolute top-4 left-[25%] z-10 w-[50%]' />
            </div>
        </div>
    )
}

export default Avax;

