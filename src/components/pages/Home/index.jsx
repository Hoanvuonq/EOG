import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../../assets/avatar-version-13.png"
import EOG from "../../../assets/eog.png"
import TokenmicsBoBo from "../Tokenmics-bobo";
import Tokenmics from "../Tokenmics";
import Meet from "../Meet";
import Footer from "../../layouts/Footer";
// import Design from "../../layouts/Design";
import Avax from "../../layouts/Avax";

const Home = () => {
    return (
        <div className="bg-[#FF5959] w-full h-full relative z-10">
            <div className="bg-custom w-full h-full relative z-30 ">
                <Avax />
                <div className="md:h-screen h-full w-full z-40 all-center md:flex-row flex-col md:px-10 px-2">
                    <div className="w-full all-center md:flex-row flex-col md:-mt-44 mt-0">
                        <div className="md:block hidden md:w-2/4 w-full">
                            <Meet />
                        </div>
                        <div className="relative z-[60] md:w-2/4 w-full all-center">
                            <img src={Avatar} alt="Item EOG" className="md:w-[620px] w-[600px] md:h-[500px] h-auto md:rounded-none rounded-2xl" />
                        </div>
                        <h1 className="text-title text-white with-shadow md:absolute relative top-20 md:hidden block">$BOBO</h1>
                        <div className="md:absolute relative top-0 md:hidden flex w-full md:justify-between justify-center px-10 md:pt-5 pt-32">
                            <div className="all-center md:gap-6 gap-10 flex-col">
                                <Link to={"#"} target="_blank">
                                    <button className="py-5 px-10 md:w-[280px] w-[360px]  rounded-3xl border-2 border-white !text-white blur-10 uppercase shadow-custom text-btn all-center">dextools chart</button>
                                </Link>
                                <Link to={"#"} target="_blank">
                                    <button className="py-5 px-10 md:w-[280px] w-[360px]  rounded-3xl border-2 border-white !text-white blur-10 uppercase shadow-custom text-btn all-center">telegram</button>
                                </Link>
                                <Link to={"#"} target="_blank">
                                    <button className="py-5 px-10 md:w-[280px] w-[360px]  rounded-3xl border-2 border-white !text-white blur-10 uppercase shadow-custom text-btn all-center">twitter</button>
                                </Link>
                                <Link to={"#"} target="_blank">
                                    <button className="py-5 px-10 md:w-[280px] w-[360px]  rounded-3xl border-2 border-white !text-white blur-10 uppercase shadow-custom text-btn all-center">Discord</button>
                                </Link>
                            </div>
                            <img src={EOG} alt="EOG" className="w-[600px] h-[200px] hidden" />
                        </div>
                    </div>
                    <div className="md:hidden block">
                        <div className="md:w-2/4 w-full py-10 md:!flex md:flex-row flex-col block all-center md:-mt-8 mt-0 relative z-10">
                            <Meet />
                            <Tokenmics />
                        </div>
                    </div>
                </div>
                <div className="md:block hidden -mt-44">
                    <TokenmicsBoBo />
                </div>
            </div>
            <Footer />
        </div >

    );
};
export default Home;