import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../../../assets/Title.png'
import BuyNow from '../../../assets/buy-now.png'
import Telegram from '../../../assets/telegram.png'
import Twitter from '../../../assets/twitter.png'

const Meet = () => {
    return (
        <div className="all-center md:!items-start md:mt-0 mt-10 gap-10 flex-col w-full ">
            <div className="w-full flex-col gap-4 all-center !justify-start">
                {/* <h1 className="text-title-box text-white md:text-start text-center md:text-[100px] text-[52px] md:mt-0 mt-10">Ready for <span className='md:text-[120px] text-[70px]'>$LOONG</span></h1> */}
                <img src={Title} alt="Title" width={640} className='md:w-[640px] w-[360px]' />
                {/* <p className="text-content-box text-justify text-white md:mt-6 mt-4 relative md:px-0 px-2">
                    In Chinese culture, the dragon represents good luck, strength, health, and also the male element Yang. The dragon is unique because it is the only mythical creature of all the animals in the Chinese zodiac and babies are born in the year of the dragon more than any other animal.
                </p> */}
                <div className="flex gap-4 md:flex-row flex-col">
                    <Link to={'#'}>
                        <img src={Telegram} alt="Buy Now" width={120} height={30} className='md:w-[120px] w-[380px] md:h-12 h-24 shadow-custom md:block hidden' />
                    </Link>
                    <Link to={'#'}>
                        <img src={Twitter} alt="Buy Now" width={120} height={30} className='md:w-[120px] w-[380px] md:h-12 h-24 shadow-custom md:block hidden' />
                    </Link>
                    <Link to={"https://t.me/WojakSolanaOfficial"} target="_blank">
                        <button className="py-5 px-10 md:w-[280px] w-[360px] md:h-9 h-20 rounded-full border-2 border-white blur-10 uppercase shadow-custom text-btn all-center md:!hidden !flex">telegram</button>
                    </Link>
                    <Link to={"https://twitter.com/Wojak_Solana"} target="_blank">
                        <button className="py-5 px-10 md:w-[280px] w-[360px] md:h-9 h-20 rounded-full border-2 border-white blur-10 uppercase shadow-custom text-btn all-center md:!hidden !flex">twitter</button>
                    </Link>
                </div>
            </div>
            <button className="shadow-custom w-full all-center md:!justify-end !justify-center">
                <Link to={''}>
                    <img src={BuyNow} alt="Buy Now" width={300} className='md:w-[300px] w-[360px]' />
                </Link>
            </button>
        </div>
    );
};
export default Meet;
