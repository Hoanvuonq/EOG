import React from 'react'
import Design1 from '../../../assets/design.png'
import Design2 from '../../../assets/design-2.png'
import Design3 from '../../../assets/design-3.png'
import Design4 from '../../../assets/design-4.png'
import Ds2023 from '../../../assets/2023.png'


const Avax = () => {
  return (
    <div className='md:block hidden'>
      <div className="absolute w-full z-10">
        <img src={Design1} alt="Design" width={320} />
        <img src={Design2} alt="Design" width={320} className='absolute bottom-0' />
        <img src={Design3} alt="Design" width={320} className='absolute top-[30%] left-[40%]' />
        <img src={Design4} alt="Design" width={540} className='absolute top-[46%] left-[60%] z-20' />
        <img src={Ds2023} alt="Design" width={140} className='absolute top-0 right-0 z-20' />
      </div>
    </div>
  )
}

export default Avax;
