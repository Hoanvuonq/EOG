import React from "react";
import { Link } from "react-router-dom";
import Twitter from "../../../assets/icon-twitter.png"
import Discord from "../../../assets/icon-discord.png"

const Footer = () => {
    return (
        <div className="flex justify-between w-full py-4 px-[20px] sm:px-[60px] items-center absolute bottom-0 z-[70]">
            <p className="text-footer"></p>
            <div className="flex gap-2">
                <Link to={"#"} target="_blank" className="border-2 border-white py-2 px-4 rounded-2xl">
                    <img src={Discord} alt="Icon Telegram" width={68} height={68} className="scale-icon" />
                </Link>
                <Link to={"#"} target="_blank" className="border-2 border-white py-2 px-4 rounded-2xl">
                    <img src={Twitter} alt="Icon Twitter" width={68} height={68} className="scale-icon" />
                </Link>
            </div>
        </div>
    );
};
export default Footer;