import React from "react";
import { Link } from "react-router-dom";
import IconTele from "../../../assets/icon-telegram.png"
import IconTwitter from "../../../assets/icon-twitter.png"

const Footer = () => {
    return (
        <div className="flex justify-between border-t border-[#482C27] blur-10 w-full h-20 mt-[78px] py-4 px-[20px] sm:px-[60px] items-center">
            <p className="text-footer">$PEPEAI © 2023. ALL RIGHTS RESERVED</p>
            <div className="flex gap-2">
                <Link to={"https://twitter.com/PepeAI_ERC"} target="_blank">
                    <img src={IconTele} alt="Icon Telegram" width={46} height={46} className="scale-icon"/>
                </Link>
                <Link to={"https://t.me/PepeAIERC20"} target="_blank">
                    <img src={IconTwitter} alt="Icon Twitter" width={46} height={46} className="scale-icon"/>
                </Link>
            </div>
        </div>
    );
};
export default Footer;