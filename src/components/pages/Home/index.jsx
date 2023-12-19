import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../../assets/avatar-version-17.png"
import EOG from "../../../assets/eog.png"
import TitleContent from "../Title-content";
import Tokenmics from "../Tokenmics";
import Footer from "../../layouts/Footer";
import Avax from "../../layouts/Avax";

const Home = () => {
    return (
        <div className="bg-black w-full h-full relative z-10">
            <Avax />
            <div className="w-full h-full relative z-30 ">
                <div className="md:h-screen h-full w-full z-40 flex md:flex-row flex-col justify-center ">
                    <div className="relative z-40 w-full all-center md:mt-0 mt-10 md:!hidden !flex">
                        <img src={Avatar} alt="Item EOG" className="md:w-auto w-[600px] md:h-[700px] h-auto" />
                    </div>
                    <div className="pt-5 md:px-20 px-0">
                        <div className="md:hidden block">
                            <Avax />
                        </div>
                        <div className="relative z-30">
                            <div className="flex md:flex-row flex-col gap-10 m-auto items-center w-full">
                                <h1 className="text-title text-white with-shadow text-center">CARCA</h1>
                                <p className="text-content text-white md:text-start text-center md:w-[40%] w-full ">THE AVALANCHE RESCUE CAT</p>
                            </div>
                            <div className="md:absolute relative top-0 md:hidden flex w-full md:justify-between justify-center px-10 md:pt-5 pt-10">
                                <div className="all-center md:gap-6 gap-10 flex-col">
                                    <Link to={"#"} target="_blank">
                                        <button className="py-5 px-10 md:w-[280px] w-[360px] rounded-3xl md:border-2 !text-white blur-20 uppercase shadow-custom text-btn all-center">telegram</button>
                                    </Link>
                                    <Link to={"#"} target="_blank">
                                        <button className="py-5 px-10 md:w-[280px] w-[360px] rounded-3xl md:border-2 !text-white blur-20 uppercase shadow-custom text-btn all-center">twitter</button>
                                    </Link>
                                </div>
                                <img src={EOG} alt="EOG" className="w-[600px] h-[200px] hidden" />
                            </div>
                            <div className="w-full all-center pt-3">
                                <Tokenmics />
                            </div>
                            <TitleContent />
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