import React from 'react';
import { Link } from 'react-router-dom';

const Meet = () => {
    return (
        <div className="all-center md:!items-start flex-col w-full  md:pl-20 pl-0">
            <div className="flex-col m-auto max-w-full all-center">
                <h1 className="text-title-box text-white md:text-start text-center md:text-[100px] text-[52px] md:mt-0 mt-10">Ready for <span className='md:text-[120px] text-[70px]'>$LOONG</span></h1>
                <p className="text-content-box text-justify text-white md:mt-6 mt-4 relative md:px-0 px-2">
                    In Chinese culture, the dragon represents good luck, strength, health, and also the male element Yang. The dragon is unique because it is the only mythical creature of all the animals in the Chinese zodiac and babies are born in the year of the dragon more than any other animal.
                </p>
            </div>
            <div className="rounded-full shadow-custom bg-white mt-14 text-black w-[160px] h-[46px] py-3 px-8 all-center unbounded font-bold">
                <div className="">
                    <Link to={'https://traderjoexyz.com/avalanche/trade?outputCurrency=0x5A2C298902f5ba4C3d8B88f9F7cf8f5be72303B9'}>Buy Now</Link>
                </div>
            </div>
        </div>
    );
};
export default Meet;
