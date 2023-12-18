import React from 'react'
import Design1 from '../../../assets/avax/design-1.png'
import Design2 from '../../../assets/avax/design-2.png'
import Design7 from '../../../assets/avax/design-7.png'
import BackgroundMP4 from '../../../assets/background.mp4'


const Avax = () => {
    return (
        <div className=''>
            <div className="absolute z-10 w-full">
                <video autoPlay loop muted playsInline className="bg-video">
                    <source src={BackgroundMP4} type="video/mp4" />
                </video>
            </div>
            <div className="absolute w-full z-20">
                <img src={Design1} alt="Design" width={200} className='absolute top-0 left-0 z-10 md:w-[200px] w-[100px]' />
                <img src={Design2} alt="Design" width={240} className='absolute top-0 right-0 z-10 md:w-[220px] w-[100px]' />
                <img src={Design7} alt="Design" width={240} className='absolute top-[360px] left-[32%] z-10 md:block hidden' />
            </div>
        </div>
    )
}

export default Avax;

