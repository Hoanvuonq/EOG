import React from 'react';
import { Link } from 'react-router-dom';
import Monke from '../../../assets/monke.png'
import Twitter from "../../../assets/icon-twitter.png"
import Telegram from "../../../assets/icon-telegram.png"

const TokenmicsHome = () => {
    return (
        <>
            <div className="flex-col md:pb-0 pb-2 md:pt-0 pt-6 relative z-40">
                <div className="all-center flex-col">
                    <img src={Monke} alt="Kaban1" width={800} height={400} className='relative md:ml-10 ml-0' />
                    <div className="flex md:flex-row flex-col gap-6 relative md:-mt-16 mt-0">
                        <Link to={"#"} target="_blank" className="relative z-40 shadow-custom">
                            <img src={Telegram} alt="Icon Telegram" width={140} height={140} className='md:w-auto md:h-auto w-[200px] h-[66px]' />
                        </Link>
                        <Link to={"#"} target="_blank" className="shadow-custom">
                            <img src={Twitter} alt="Icon Twitter" width={140} height={140} className='md:w-auto md:h-auto w-[200px] h-[66px]' />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
export default TokenmicsHome;