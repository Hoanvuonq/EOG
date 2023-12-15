import React from 'react';
import { Link } from "react-router-dom";
import Twitter from "../../../assets/icon-twitter.png"
import Telegram from "../../../assets/icon-telegram.png"

const Meet = () => {
    return (
        <div className="all-center w-full z-20 pb-10">
            <div className="flex-col w-full relative md:-ml-96 ml-0 -mt-18">
                <h1 className="text-title-box text-white md:text-start text-center md:text-[80px] !font-bold text-[90px] md:mt-0 mt-10">$MONKE</h1>
                <div className="flex w-full gap-10">
                    <p className="text-content-box text-justify text-white md:mt-6 mt-4 md:max-w-full max-w-[90%] m-auto relative ">
                        RED SMURF CAT is a memecoin launched on the ethereum blockchain.
                        he is so cute! this little guy is just going on his jolly way!
                        The token was created as a tribute to the smurf cat internet meme
                        originally created by nate hallinan, and newly popularized by tiktok.
                    </p>
                    <div className="w-full md:justify-between justify-center pt-5 md:flex hidden">
                        <div className="all-center gap-5">
                            <Link to={"#"} target="_blank" className='shadow-custom flex gap-2 items-center border border-white p-3'>
                                <img src={Telegram} alt="Telegram" />
                                <p className="text-link-box">TELEGRAM</p>
                            </Link>
                            <Link to={"#"} target="_blank" className='shadow-custom flex gap-2 items-center border border-white p-3'>
                                <img src={Twitter} alt="Twitter" />
                                <p className="text-link-box">TWITTER</p>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Meet; 
