import React from 'react'
import { Link } from 'react-router-dom'




const Box = () => {
    return (
        <div className='avax'>
            <div className="absolute w-full z-[100] md:block hidden">
                <div className="absolute top-[160px] left-8 z-40">
                    <div className="flex flex-col shadow-custom">
                        <Link to={'/'}>
                            <button className="text-token flex gap-2 text-white p-6 text-center md:w-[340px] w-[360px] h-[120px] shadow-custom all-center rounded-[44px] bg-mega-box">
                                <div className="flex flex-col gap-2 ">
                                    <p className='!font-bold comic_nue !text-base uppercase text-white'>Total Supply</p>
                                    <p className='text-2xl text-token-2'> 100,000,000,000 $CHARIZARD</p>
                                </div>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="absolute top-[400px] left-20 z-40">
                    <div className="flex flex-col shadow-custom">
                        <Link to={'/'}>
                            <button className="text-token flex gap-2 text-white p-6 text-center md:w-[340px] w-[360px] h-[120px] shadow-custom all-center rounded-[44px] bg-mega-box">
                                <div className="flex flex-col gap-2 ">
                                    <p className='!font-bold comic_nue !text-base uppercase text-white'>TAX</p>
                                    <p className='text-2xl text-token-2'>0% / 0%</p>
                                </div>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="absolute top-[160px] right-8 z-40">
                    <div className="flex flex-col shadow-custom">
                        <Link to={'/'}>
                            <button className="text-token flex gap-2 text-white p-6 text-center md:w-[340px] w-[360px] h-[120px] shadow-custom all-center rounded-[44px] bg-mega-box">
                                <div className="flex flex-col gap-2 ">
                                    <p className='!font-bold comic_nue !text-base uppercase text-white'>LP LOCKED</p>
                                    <p className='text-2xl'>3 MONTHS</p>
                                </div>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="absolute top-[400px] right-20 z-40">
                    <div className="flex flex-col shadow-custom">
                        <Link to={'/'}>
                            <button className="text-token flex gap-2 text-white p-6 text-center md:w-[340px] w-[360px] h-[120px] shadow-custom all-center rounded-[44px] bg-mega-box">
                                <div className="flex flex-col gap-2 ">
                                    <p className='!font-bold comic_nue !text-base uppercase text-white'>Ownership</p>
                                    <p className='text-2xl text-token-2'>RENOUNCED</p>
                                </div>
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Box;

