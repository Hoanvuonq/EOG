import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../../assets/avatar-version-1.png"
import AvatarMobile from "../../../assets/avatar-mobile.png"
import Logo from "../../../assets/logo.png"
import EOG from "../../../assets/eog.png"
import Tokenmics from "../Tokenmics";
import Footer from "../../layouts/Footer";
import Avax from "../../layouts/Avax";

const Home = () => {
    return (
        <div className="bg-custom w-full h-full relative z-10">
            <div className="bg-[#0101011c] w-full h-full relative z-30 ">
                <Avax />
                <div className="w-full all-center absolute z-[60] md:!flex !hidden">
                    <div className="w-[80%] bg-black h-16 rounded-full mt-2 border-2 border-white flex items-center justify-between px-10">
                        <Link to={"#"} className="shadow-custom">
                            <img src={Logo} alt="Logo" className="w-9 h-9 cursor-pointer shadow-custom" />
                        </Link>
                        <div className="flex gap-4 items-center">
                            <div className="text-white flex gap-4 font-bold">
                                <Link to={'#'} target="_blank" className="shadow-custom">Twitter</Link>
                                <Link to={'#'} target="_blank" className="shadow-custom">Telegram</Link>
                            </div>
                            <div className="text-white flex gap-4 font-bold">
                                <Link to={'#'} target="_blank">
                                    <button
                                        className="text-token rounded-full py-2 px-4 text-lucky text-[#D40000] border border-[#D40000] flex text-center shadow-custom all-center">
                                        <p>dextools chart</p>
                                    </button>
                                </Link>
                                <Link to={'#'} target="_blank">
                                    <button
                                        className="text-token rounded-full py-2 px-6 text-lucky text-black bg-[#D40000] flex text-center shadow-custom all-center">
                                        <p>Buy</p>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="md:h-screen h-full w-full z-40 flex md:flex-row flex-col justify-between relative bottom-0">
                    <div className="z-40 all-center bottom-0 md:mt-0 mt-10">
                        <img src={Avatar} alt="Avatar" className="w-[800px] md:h-[700px] h-auto md:block hidden" />
                        <img src={AvatarMobile} alt="Avatar" className="w-[386px] md:h-[400px] h-auto md:hidden block" />
                    </div>
                    <div className="">
                        <h1
                            className="text-title text-white with-shadow md:absolute text-center relative top-20 md:hidden block">$Turkish</h1>
                        <div
                            className="md:absolute relative top-0 md:hidden flex w-full md:justify-between justify-center px-10 md:pt-5 pt-32">
                            <div className="all-center md:gap-6 gap-10 flex-col">
                                <Link to={'#'} target="_blank">
                                    <button
                                        className="text-token w-[340px] rounded-full py-4 text-lucky text-[#D40000] bg-black border border-[#D40000] flex text-center shadow-custom all-center">
                                        <p className="!text-5xl">Twitter</p>
                                    </button>
                                </Link>
                                <Link to={'#'} target="_blank">
                                    <button
                                        className="text-token w-[340px] rounded-full p-4 text-lucky text-[#D40000] bg-black border border-[#D40000] flex text-center shadow-custom all-center">
                                        <p className="!text-5xl">Telegram</p>
                                    </button>
                                </Link>
                                <Link to={'#'} target="_blank">
                                    <button
                                        className="text-token w-[340px] rounded-full p-4 text-lucky text-black bg-[#D40000] border border-[#D40000] flex text-center shadow-custom all-center">
                                        <p className="!text-4xl">dextools chart</p>
                                    </button>
                                </Link>
                                <Link to={'#'} target="_blank">
                                    <button
                                        className="text-token w-[340px] rounded-full p-4 text-lucky text-black bg-[#D40000] border border-[#D40000] flex text-center shadow-custom all-center">
                                        <p className="!text-6xl">Buy</p>
                                    </button>
                                </Link>
                            </div>
                            <img src={EOG} alt="EOG" className="w-[600px] h-[200px] hidden" />
                        </div>

                    </div>
                </div>
                <div className="w-full all-center md:-mt-24 mt-0 md:pb-0 pb-10 relative z-50">
                    <Tokenmics />
                </div>

            </div>
            <Footer />
        </div >

    );
};
export default Home;