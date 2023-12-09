import React from "react";
import { Link } from "react-router-dom";
import IconTele from "../../../assets/icon-telegram.png"
import IconTwitter from "../../../assets/icon-twitter.png"

const Footer = () => {
    return (
        <div className="flex justify-between w-full py-4 px-[20px] sm:px-[60px] items-center absolute bottom-0 z-30">
            <Link to={"#"} target="_blank" className="shadow-custom">
                <p className="text-gitbook bg-white rounded-xl py-3 px-8">gitbook</p>
            </Link>
            <div className="flex gap-2">
                <Link to={"#"} target="_blank">
                    <img src={IconTele} alt="Icon Telegram" width={46} height={46} className="scale-icon" />
                </Link>
                <Link to={"#"} target="_blank">
                    <img src={IconTwitter} alt="Icon Twitter" width={46} height={46} className="scale-icon" />
                </Link>
            </div>
        </div>
    );
};
export default Footer;