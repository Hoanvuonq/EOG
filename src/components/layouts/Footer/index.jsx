import React from "react";
import { Link } from "react-router-dom";
import Twitter from "../../../assets/icon-twitter.png"
import Telegram from "../../../assets/icon-telegram.png"

const Footer = () => {
    return (
        <div className="flex justify-between w-full py-4 px-[20px] sm:px-[60px] !pr-4 items-center absolute bottom-0 z-[70]">
            <p className="text-footer"></p>
            <div className="flex gap-2">
                <Link to={"#"} target="_blank" className="relative z-40 shadow-custom">
                    <img src={Telegram} alt="Icon Telegram" width={20.} height={20.} className='md:w-auto md:h-auto w-[100px] h-[44px]' />
                </Link>
                <Link to={"#"} target="_blank" className="shadow-custom">
                    <img src={Twitter} alt="Icon Twitter" width={20.} height={20.} className='md:w-auto md:h-auto w-[100px] h-[44px]' />
                </Link>
            </div>
        </div>
    );
};
export default Footer;