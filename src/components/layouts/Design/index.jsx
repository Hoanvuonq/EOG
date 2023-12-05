import React from 'react'
import Design1 from '../../../assets/design-1.png'
import Design2 from '../../../assets/design-2.png'
import Design3 from '../../../assets/design-3.png'
import Design4 from '../../../assets/design-4.png'
import Design5 from '../../../assets/design-5.png'
import Design6 from '../../../assets/design-6.png'
import Design7 from '../../../assets/design-7.png'
import Design8 from '../../../assets/design-8.png'
import Design9 from '../../../assets/design-9.png'
import Design10 from '../../../assets/design-10.png'

const Design = () => {
  return (
    <div className='md:block hidden'>
      <div className='bg-[#002AB0] h-[998px rounded-3xl absolute w-[60%] h-[80%] top-16 left-28 p-7 flex gap-2 z-20 '>
        <img src={Design1} alt="Design" className=' h-full w-[10%]' />
        <img src={Design2} alt="Design" className=' h-full w-[10%]' />
        <img src={Design3} alt="Design" className=' h-full w-[10%]' />
        <img src={Design4} alt="Design" className=' h-full w-[10%]' />
        <img src={Design5} alt="Design" className=' h-full w-[10%]' />
        <img src={Design6} alt="Design" className=' h-full w-[10%]' />
        <img src={Design7} alt="Design" className=' h-full w-[10%]' />
        <img src={Design8} alt="Design" className=' h-full w-[10%]' />
        <img src={Design9} alt="Design" className=' h-full w-[10%]' />
        <img src={Design10} alt="Design" className=' h-full w-[10%]' />
      </div>
      <div className="bg-design h-full w-[30%] absolute z-10 right-[40%]"></div>
    </div>
  )
}

export default Design
