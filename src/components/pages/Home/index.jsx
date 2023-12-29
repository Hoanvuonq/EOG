import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../../assets/avatar-version-16.png"
import EOG from "../../../assets/eog.png"
import TitleContent from "../Title-content";
import Tokenmics from "../Tokenmics";
import Footer from "../../layouts/Footer";
import Avax from "../../layouts/Avax";
import TokenmicsMB from "../TokenmicsMB";
import Token2 from '../../../assets/token-2.png'

const Home = () => {
    return (
        <div className="bg-custom w-full h-full relative z-10">
            <Avax />
            <div className="bg-[#0101011c] w-full h-full relative z-30 ">
                <div className="md:h-screen h-full w-full z-40 flex md:flex-row flex-col justify-between relative bottom-0">
                    <div className=" z-40 md:absolute relative md:!block !flex all-center bottom-0 md:mt-0 mt-10">
                        <img src={Avatar} alt="Item EOG" className="w-[500px] md:h-[440px] h-auto" />
                    </div>
                    <div className="">
                        <h1 className="text-title text-white with-shadow md:absolute text-center relative top-20 md:hidden block">$DaWae</h1>
                        <div className="md:absolute relative top-0 md:hidden flex w-full md:justify-between justify-center px-10 md:pt-5 pt-32">
                            <div className="all-center md:gap-6 gap-10 flex-col">
                                <Link to={'/'}>
                                    <button className="text-token text-lucky text-[#B70000] flex gap-2 text-center px-4 shadow-custom all-center justify-center ">
                                        <img src={Token2} alt="Token 2" className='w-[400px] relative' />
                                        <div className="flex -mt-4 absolute gap-1">
                                            <p className='!text-3xl '>telegram</p>
                                        </div>
                                    </button>
                                </Link>
                                <Link to={'/'}>
                                    <button className="text-token text-lucky text-[#B70000] flex gap-2 text-center px-4 shadow-custom all-center justify-center ">
                                        <img src={Token2} alt="Token 2" className='w-[400px] relative' />
                                        <div className="flex -mt-4 absolute gap-1">
                                            <p className='!text-3xl '>twitter</p>
                                        </div>
                                    </button>
                                </Link>

                            </div>
                            <img src={EOG} alt="EOG" className="w-[600px] h-[200px] hidden" />
                        </div>
                        <div className="md:block hidden">
                            <TitleContent />
                        </div>
                    </div>
                </div>
                <div className="md:!block !hidden w-full all-center -mt-24 relative z-50">
                    <Tokenmics />
                </div>
                <div className="md:hidden block ">
                    <TokenmicsMB />
                </div>
            </div>
            <Footer />
        </div >

    );
};
export default Home;