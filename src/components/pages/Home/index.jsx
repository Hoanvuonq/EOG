import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../../assets/avatar-version-1.png"
import TokenmicsHome from "../Title-content";
import Tokenmics from "../Tokenmics";
import Meet from "../Meet";
import Footer from "../../layouts/Footer";

const Home = () => {
    return (
        <div className="bg-custom w-full h-full relative z-10">
            <div className="bg-[#01010112] w-full h-full relative z-20">
                <div className="md:h-screen h-full w-full z-40 all-center md:flex-row flex-col md:px-0 px-2">
                    <div className="w-full all-center md:flex-row flex-col max-w-[1440px]">
                        <div className="relative z-[60] w-full all-center md:mt-0 mt-10">
                            <img src={Avatar} alt="Item EOG" className="md:w-[500px] w-[90%] md:h-[500px] h-auto rounded-2xl border-4 border-red-500" />
                        </div>
                        <div className="md:hidden block top-20 relative">
                            <Meet />
                        </div>
                        <div className="md:absolute relative top-0 md:hidden flex w-full md:justify-between justify-center px-10 md:pt-5 pt-32">
                            <div className="all-center md:gap-6 gap-10 flex-col">
                                <Link to={'/'}>
                                    <button className="text-token blur-10 border-4 border-white flex flex-col gap-2 text-white py-7 text-center px-6 md:!w-[400px] !w-[360px] md:!h-[150px] !h-[140px] shadow-custom all-center md:!justify-start !justify-center rounded-3xl ">
                                        <p className='text-white'>TELEGRAM</p>
                                    </button>
                                </Link>
                                <Link to={'/'}>
                                    <button className="text-token blur-10 border-4 border-white flex flex-col gap-2 text-white py-7 text-center px-6 md:!w-[400px] !w-[360px] md:!h-[150px] !h-[140px] shadow-custom all-center md:!justify-start !justify-center rounded-3xl ">
                                        <p className='text-white'>TWITTER</p>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="md:flex flex-col gap-8 hidden w-full relative -ml-20">
                            <Meet />
                            <TokenmicsHome />
                        </div>
                    </div>
                    <div className="md:hidden block">
                        <div className="md:w-2/4 w-full py-10 md:!flex md:flex-row flex-col block all-center md:-mt-8 mt-0 relative z-10">

                            <Tokenmics />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div >

    );
};
export default Home;