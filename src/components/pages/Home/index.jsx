import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../../assets/avatar-version-13.png"
import Tokenmics from "../Tokenmics";
import Meet from "../Meet";
import Footer from "../../layouts/Footer";
import Avax from "../../layouts/Avax";

const Home = () => {
    return (
        <div className=" bg-[#FC0017] w-full h-full relative z-10">
            <div className="relative">
                <div className="bg-custom w-full h-full relative z-30 ">
                    <Avax />
                    <div className="md:block hidden">
                        <Tokenmics />
                    </div>
                    <div className="md:h-screen h-full w-full all-center md:pt-12 mt-0 !items-start md:flex-row flex-col md:px-10 px-2 relative z-[100]">
                        <div className="w-full py-10 md:!flex md:flex-row flex-col !hidden md:-mt-8 relative z-50 mt-0">
                            <div className="md:!hidden !block">
                                <div className="relative pt-10 z-20 w-full all-center">
                                    <img src={Avatar} alt="Item EOG" className="md:w-[600px] w-[480px] md:h-[520px] h-[380px] md:rounded-none rounded-2xl md:ml-24 ml-0" />
                                </div>
                                <div className="flex-col m-auto max-w-full all-center">
                                    <h1 className="text-title-box text-white md:text-start text-center md:text-[100px] text-[52px] md:mt-0 mt-10"> <span className='md:text-[120px] text-[70px]'>$LOONG</span></h1>

                                </div>
                            </div>
                            <Meet />
                            <div className="md:hidden block">
                                <Tokenmics />
                            </div>
                        </div>
                        <div className="w-full py-10 md:!hidden !flex md:flex-row flex-col md:-mt-8 relative z-50 mt-0">
                            <div className="md:!hidden !block">
                                <div className="relative pt-10 z-20 w-full all-center">
                                    <img src={Avatar} alt="Item EOG" className="md:w-[600px] w-[480px] md:h-[520px] h-[380px] md:rounded-none rounded-2xl md:ml-24 ml-0" />
                                </div>
                                <div className="flex-col m-auto max-w-full all-center">
                                    <h1 className="text-title-box text-white md:text-start text-center md:text-[100px] text-[52px] md:mt-0 mt-10"> <span className='md:text-[120px] text-[70px]'>$LOONG</span></h1>

                                </div>
                            </div>
                            <Meet />
                            <div className="md:hidden block">
                                <Tokenmics />
                            </div>
                        </div>


                        <div className="w-full all-center md!block !hidden flex-col md:-mt-18 mt-0 relative z-10">
                            <h1 className="text-title text-white with-shadow md:absolute relative top-20 md:right-96 right-0 md:hidden block">$WOJAK</h1>
                            <div className="md:absolute relative top-0 md:hidden flex w-full md:justify-between justify-center px-10 md:pt-5 pt-32">
                                <div className="all-center md:gap-6 gap-10 flex-col">
                                    <Link to={"https://t.me/WojakSolanaOfficial"} target="_blank">
                                        <button className="py-5 px-10 md:w-[280px] w-[360px] md:h-9 h-20 rounded-full border-2 border-white !text-white blur-10 uppercase shadow-custom text-btn all-center">telegram</button>
                                    </Link>
                                    <Link to={"https://twitter.com/Wojak_Solana"} target="_blank">
                                        <button className="py-5 px-10 md:w-[280px] w-[360px] md:h-9 h-20 rounded-full border-2 border-white !text-white blur-10 uppercase shadow-custom text-btn all-center">twitter</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="relative md:-mt-10 mt-20 z-20 w-full md:block hidden">
                            <img src={Avatar} alt="Item EOG" className="md:w-[600px] w-[480px] md:h-[520px] h-[380px] md:rounded-none rounded-2xl md:ml-24 ml-0" />
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>

        </div>

    );
};
export default Home;