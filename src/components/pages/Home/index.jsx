import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../../assets/avatar-version-16.png"
import EOG from "../../../assets/eog.png"
import TitleContent from "../Title-content";
import Tokenmics from "../Tokenmics";
import Footer from "../../layouts/Footer";
import Avax from "../../layouts/Avax";

const Home = () => {
    return (
        <div className="bg-mery w-full h-full relative z-10">
            <Avax />
            <div className="w-full h-full relative z-30 ">
                <div className="md:h-screen h-full w-full z-40 flex md:flex-row flex-col justify-center ">
                    <div className="relative z-40 md:w-[50%] w-full all-center md:mt-0 mt-10">
                        <img src={Avatar} alt="Item EOG" className="md:w-auto w-[1400px] md:h-[700px] h-auto" />
                    </div>
                    <div className="md:w-[50%] w-full">
                        <h1 className="text-title text-white with-shadow md:absolute text-center relative top-20 md:hidden block">$CoLa</h1>
                        <div className="md:absolute relative top-0 md:hidden flex w-full md:justify-between justify-center px-10 md:pt-5 pt-32">
                            <div className="all-center md:gap-6 gap-10 flex-col">
                                <Link to={"https://t.me/ChristmasColaAvax"} target="_blank">
                                    <button className="py-5 px-10 md:w-[280px] w-[360px] rounded-3xl md:border-2  !text-white blur-1 uppercase shadow-custom text-btn all-center">telegram</button>
                                </Link>
                                <Link to={"https://twitter.com/ChristmasCola_"} target="_blank">
                                    <button className="py-5 px-10 md:w-[280px] w-[360px] rounded-3xl md:border-2  !text-white blur-1 uppercase shadow-custom text-btn all-center">twitter</button>
                                </Link>
                            </div>
                            <img src={EOG} alt="EOG" className="w-[600px] h-[200px] hidden" />
                        </div>
                        <TitleContent />
                    </div>
                </div>
                <div className="w-full all-center -mt-24 relative z-50">
                    <Tokenmics />
                </div>
            </div>
            <Footer />
        </div >

    );
};
export default Home;