import React from 'react'
import KaBoSu1 from '../../../assets/design-kabosu-1.png'
import KaBoSu2 from '../../../assets/design-kabosu-2.png'
import KaBoSu3 from '../../../assets/design-kabosu-3.png'
import KaBoSu4 from '../../../assets/design-kabosu-4.png'
import KaBoSu5 from '../../../assets/design-kabosu-5.png'
import KaBoSu6 from '../../../assets/design-kabosu-6.png'
import KaBoSu7 from '../../../assets/design-kabosu-7.png'
import KaBoSu8 from '../../../assets/design-kabosu-8.png'
import KaBoSu9 from '../../../assets/design-kabosu-9.png'
import KaBoSu10 from '../../../assets/design-kabosu-10.png'

const DesignKaBoSu = () => {
  return (
    <div className='md:block hidden'>
      <div className='bg-[#FE628F] h-[998px rounded-3xl absolute w-[50%] h-[80%] top-16 left-28 p-7 flex gap-2 z-20 '>
        <img src={KaBoSu1} alt="Design" className=' h-full w-[10%]'/>
        <img src={KaBoSu2} alt="Design" className=' h-full w-[10%]'/>
        <img src={KaBoSu3} alt="Design" className=' h-full w-[10%]'/>
        <img src={KaBoSu4} alt="Design" className=' h-full w-[10%]'/>
        <img src={KaBoSu5} alt="Design" className=' h-full w-[10%]'/>
        <img src={KaBoSu6} alt="Design" className=' h-full w-[10%]'/>
        <img src={KaBoSu7} alt="Design" className=' h-full w-[10%]'/>
        <img src={KaBoSu8} alt="Design" className=' h-full w-[10%]'/>
        <img src={KaBoSu9} alt="Design" className=' h-full w-[10%]'/>
      </div>
      <img src={KaBoSu10} alt="Design" className='h-full w-[30%] absolute z-10 right-[40%]'/>
    </div>
  )
}

export default DesignKaBoSu
