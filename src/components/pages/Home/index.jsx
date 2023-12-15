import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../../assets/avatar-version-14.png"
import AvatarMB from "../../../assets/avatar-version-14-MB.png"
import EOG from "../../../assets/eog.png"
import TokenmicsHome from "../Tokenmics-bobo";
import Tokenmics from "../Tokenmics";
import Meet from "../Meet";
import Footer from "../../layouts/Footer";
import Avax from "../../layouts/Avax";

const Home = () => {
    return (
        <div className="bg-[#070a16] w-full h-full relative z-10">
            <Avax />
            <div className="bg-custom w-full h-full relative z-30 ">
                <div className="md:h-screen h-full w-full z-40 all-center md:flex-row flex-col md:px-0 px-2">
                    <div className="relative z-[60] w-full all-center md:mt-0 mt-10">
                        <img src={Avatar} alt="Item EOG" className="md:w-[1400px] w-[1400px] md:h-[700px] h-auto md:block hidden" />
                        <div className="md:hidden block border-4 border-white rounded-2xl ">
                            <img src={AvatarMB} alt="Item EOG" className="md:w-[1400px] w-[520px] md:h-[700px] h-[500px] md:rounded-none rounded-2xl " />
                        </div>
                    </div>
                    <div className="w-full all-center flex-col">
                        <h1 className="text-title text-white with-shadow md:absolute relative top-20 md:hidden block">$RED</h1>
                        <div className="md:absolute relative top-0 md:hidden flex w-full md:justify-between justify-center px-10 md:pt-5 pt-32">
                            <div className="all-center md:gap-6 gap-10 flex-col">
                                <Link to={"#"} target="_blank">
                                    <button className="py-5 px-10 md:w-[280px] w-[360px] rounded-3xl md:border-2 border-4 border-white !text-white blur-1 uppercase shadow-custom text-btn all-center">dextools chart</button>
                                </Link>
                                <Link to={"#"} target="_blank">
                                    <button className="py-5 px-10 md:w-[280px] w-[360px] rounded-3xl md:border-2 border-4 border-white !text-white blur-1 uppercase shadow-custom text-btn all-center">telegram</button>
                                </Link>
                                <Link to={"#"} target="_blank">
                                    <button className="py-5 px-10 md:w-[280px] w-[360px] rounded-3xl md:border-2 border-4 border-white !text-white blur-1 uppercase shadow-custom text-btn all-center">twitter</button>
                                </Link>
                                <Link to={"#"} target="_blank">
                                    <button className="py-5 px-10 md:w-[280px] w-[360px] rounded-3xl md:border-2 border-4 border-white !text-white blur-1 uppercase shadow-custom text-btn all-center">Discord</button>
                                </Link>
                            </div>
                            <img src={EOG} alt="EOG" className="w-[600px] h-[200px] hidden" />
                        </div>
                        <div className="md:flex flex-col gap-10 hidden w-full relative">
                            <Meet />
                            <TokenmicsHome />
                        </div>
                    </div>
                    <div className="md:hidden block">
                        <div className="md:w-2/4 w-full py-10 md:!flex md:flex-row flex-col block all-center md:-mt-8 mt-0 relative z-10">
                            <Meet />
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