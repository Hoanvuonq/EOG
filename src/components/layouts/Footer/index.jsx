import React from "react";
import { Link } from "react-router-dom";
import Twitter from "../../../assets/icon-twitter.png"
import Telegram from "../../../assets/icon-telegram.png"

const Footer = () => {
    return (
        <div className="flex justify-between w-full py-4 px-[20px] sm:px-[60px] !pr-4 items-center absolute bottom-0 z-[70]">
            <p className="text-footer"></p>
            <div className="flex gap-2">
                <Link to={"#"} target="_blank" className="border-2 flex gap-2 blur-1 items-center border-white py-2 px-4 rounded-2xl">
                    <img src={Telegram} alt="Icon Telegram" width={20} height={20} className="scale-icon" />
                    <p className="text-footer-box">TELEGRAM</p>
                </Link>
                <Link to={"#"} target="_blank" className="border-2 flex gap-2 blur-1 items-center border-white py-2 px-4 rounded-2xl">
                    <img src={Twitter} alt="Icon Twitter" width={20} height={20} className="scale-icon" />
                    <p className="text-footer-box">TWITTER</p>
                </Link>
            </div>
        </div>
    );
};
export default Footer;