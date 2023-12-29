import React from "react";
import { Link } from "react-router-dom";
import IconTele from "../../../assets/icon-telegram.png"
import IconTwitter from "../../../assets/icon-twitter.png"

const Footer = () => {
    return (
        <div className="flex justify-between w-full py-3 px-[20px] sm:px-[60px] items-center absolute bottom-0 z-[70]">
            <p className="text-footer"></p>
            <div className="flex gap-2">
                <Link to={""} target="_blank">
                    <img src={IconTele} alt="Icon Telegram" width={40} height={40} className="scale-icon" />
                </Link>
                <Link to={""} target="_blank">
                    <img src={IconTwitter} alt="Icon Twitter" width={40} height={40} className="scale-icon" />
                </Link>
            </div>
        </div>
    );
};
export default Footer;