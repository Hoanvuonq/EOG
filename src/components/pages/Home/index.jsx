import React from "react";
import Avatar from "../../../assets/avatar-version-15.png"
import AvatarMB from "../../../assets/avatar-version-15-MB.png"
import TokenmicsHome from "../Tokenmics-bobo";
import Tokenmics from "../Tokenmics";
import Meet from "../Meet";
import Footer from "../../layouts/Footer";
import Avax from "../../layouts/Avax";

const Home = () => {
    return (
        <div className="bg-[#291919] w-full h-full relative z-10">
            <Avax />
            <div className="bg-custom w-full h-full relative z-50 ">
                <div className="bg-gradient relative z-50">
                    <div className="md:h-screen h-full w-full z-40 all-center md:flex-row flex-col md:px-0 px-2">
                        <div className="relative w-full all-center md:mt-[16px] mt-10 z-30">
                            <img src={Avatar} alt="Item EOG" className="md:w-[1200px] w-[900px] md:h-[680px] h-auto md:block hidden" />
                            <div className="md:hidden block border-4 border-white rounded-2xl ">
                                <img src={AvatarMB} alt="Item EOG" className="md:w-[1400px] w-[500px] md:h-[700px] h-[400px] md:rounded-none rounded-2xl " />
                            </div>
                        </div>
                        <div className="md:flex flex-col gap-10 hidden w-full absolute z-40 top-16 -ml-96">
                            <Tokenmics />
                        </div>
                        <div className="w-full all-center flex-col relative md:-ml-[240px] ml-0">
                            <div className="md:flex flex-col gap-10 w-full md:absolute relative z-30 md:-mt-56 mt-0 md:-ml-96 ml-0">
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
            </div>
            <div className="md:hidden block">
                <Footer />
            </div>
        </div >
    );
};
export default Home;