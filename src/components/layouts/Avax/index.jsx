import React from 'react'
import Avax1 from '../../../assets/avax/avax_1.png'
import Avax2 from '../../../assets/avax/avax_2.png'
import Avax3 from '../../../assets/avax/avax_3.png'
import Avax4 from '../../../assets/avax/avax_4.png'
import Avax5 from '../../../assets/avax/avax_5.png'
import Avax6 from '../../../assets/avax/avax_6.png'
import Avax7 from '../../../assets/avax/avax_7.png'
import Avax8 from '../../../assets/avax/avax_8.png'
import Avax9 from '../../../assets/avax/avax_9.png'
import Avax10 from '../../../assets/avax/avax_10.png'
import Avax11 from '../../../assets/avax/avax_11.png'
import Avax12 from '../../../assets/avax/avax_12.png'
import Avax13 from '../../../assets/avax/avax_13.png'
import Avax14 from '../../../assets/avax/avax_14.png'

const Avax = () => {
  return (
    <div className='md:block hidden'>
      <div className="w-full absolute flex justify-between z-30">
        <div className="flex flex-col gap-20 w-1/5">
          <img src={Avax5} alt="Design" className='relative ml-14' width={92} />
          <img src={Avax7} alt="Design" className='relative ml-24' width={50} />
          <img src={Avax6} alt="Design" className='relative ml-2' width={50} />
          <img src={Avax8} alt="Design" className='relative ml-16' width={82} />
          <img src={Avax1} alt="Design" className='relative' width={80} />
        </div>
        <div className="flex flex-col gap-44 w-[10%] relative">
          <img src={Avax2} alt="Design" className='relative mt-10' width={62} />
          <img src={Avax12} alt="Design" className='relative' width={44} />
          <img src={Avax3} alt="Design" className='relative' width={116} />
        </div>
      </div>
      <div className="w-full absolute h-screen z-30">
        <div className="flex gap-[500px] w-full top-0 absolute px-48">
          <img src={Avax13} alt="Design" className='relative ' width={44} height={44} />
          <img src={Avax10} alt="Design" className='relative ' width={54} />
          <img src={Avax14} alt="Design" className='relative ' width={52} height={52} />
        </div>
        <div className="flex gap-[500px] px-48 w-full absolute bottom-0">
          <img src={Avax9} alt="Design" className='relative ' width={54} />
          <img src={Avax11} alt="Design" className='relative' width={48} height={54} />
          <img src={Avax4} alt="Design" className='relative' width={48} />
        </div>
      </div>
    </div>
  )
}

export default Avax;
