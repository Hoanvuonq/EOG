import React from 'react'
import Box1 from '../../../assets/avax/box-1.png'
import Box2 from '../../../assets/avax/box-2.png'
import Box3 from '../../../assets/avax/box-3.png'
import Box4 from '../../../assets/avax/box-4.png'



const Box = () => {
    return (
        <div className='avax'>
            <div className="absolute w-full z-[100] md:block hidden">
                <img src={Box1} alt="Design" width={100} className='absolute top-[160px] left-8 z-40 w-[340px] shadow-custom cursor-pointer' />
                <img src={Box2} alt="Design" width={100} className='absolute top-[400px] left-20 z-40 w-[340px] shadow-custom cursor-pointer' />
                <img src={Box3} alt="Design" width={100} className='absolute top-[160px] right-8 z-40 w-[340px] shadow-custom cursor-pointer' />
                <img src={Box4} alt="Design" width={100} className='absolute top-[400px] right-20 z-40 w-[340px] shadow-custom cursor-pointer' />
            </div>
        </div>
    )
}

export default Box;

