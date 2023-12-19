import React from 'react'
import Design1 from '../../../assets/avax/design-1.png'
import BackgroundMP4 from '../../../assets/background.mp4'


const Avax = () => {
    return (
        <div className='avax'>
            <div className="absolute z-10 w-full">
                <video autoPlay loop muted playsInline className="bg-video">
                    <source src={BackgroundMP4} type="video/mp4" />
                </video>
            </div>
            <div className="absolute w-full z-20 md:block hidden">
                <img src={Design1} alt="Design" width={100} className='absolute top-12 right-36 z-10 md:w-[160px] w-[100px]' />
            </div>
        </div>
    )
}

export default Avax;

