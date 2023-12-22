import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../../assets/avatar-version-1.png"
import TitleContent from "../Title-content";
import Tokenmics from "../Tokenmics";
import Footer from "../../layouts/Footer";
import Avax from "../../layouts/Avax";
import Box from "../../layouts/Box";
import Title from '../../../assets/avax/title.png'

const Home = () => {
    return (
        <div className="bg-custom w-full h-full relative z-10">
            <Avax />
            <div className="w-full h-full relative z-30 ">
                <Box />
                <div className="md:h-screen h-full w-full z-40 flex  flex-col justify-center ">
                    <div className="pt-10 md:px-20 px-0">
                        <div className="relative z-40 w-full all-center md:mt-0 mt-10 flex">
                            <img src={Avatar} alt="Item EOG" className="md:w-[520px] w-[600px] md:h-[520px] h-auto" />
                        </div>
                        <div className="relative z-30">
                            <div className=" md:flex-row flex-col gap-10 m-auto items-center w-full md:hidden flex">
                                {/* <h1 className="text-title text-white with-shadow text-center">CARCA</h1>
                                <p className="text-content text-white md:text-start text-center md:w-[40%] w-full ">THE AVALANCHE RESCUE CAT</p> */}
                                <img src={Title} alt="Design" width={100} className='w-[90%]' />
                            </div>
                            <div className="md:absolute relative top-0 md:hidden flex w-full md:justify-between justify-center px-10 md:pt-5 pt-10">
                                <div className="all-center md:gap-6 gap-10 flex-col">

                                    <div className="flex flex-col shadow-custom">
                                        <button className="text-token flex gap-2 text-white p-6 text-center md:w-[340px] w-[360px] h-[120px] shadow-custom all-center rounded-[44px] bg-mega-box">
                                            <Link to={"#"} target="_blank">
                                                <button className="py-5 px-10 md:w-[280px] w-[360px] rounded-3xl md:border-2 !text-white uppercase shadow-custom text-btn all-center">telegram</button>
                                            </Link>
                                        </button>
                                    </div>
                                    <div className="flex flex-col shadow-custom">
                                        <button className="text-token flex gap-2 text-white p-6 text-center md:w-[340px] w-[360px] h-[120px] shadow-custom all-center rounded-[44px] bg-mega-box">
                                            <Link to={"#"} target="_blank">
                                                <button className="py-5 px-10 md:w-[280px] w-[360px] rounded-3xl md:border-2 !text-white uppercase shadow-custom text-btn all-center">twitter</button>
                                            </Link>
                                        </button>
                                    </div>

                                </div>
                            </div>
                            <div className="w-full all-center pt-3 pb-20 md:!hidden !block">
                                <Tokenmics />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:hidden block">
                <Footer />
            </div>
        </div >

    );
};
export default Home;