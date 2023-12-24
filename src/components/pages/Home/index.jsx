import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../../assets/avatar-version-12.png"
import Tokenmics from "../Tokenmics";
import Meet from "../Meet";
import Footer from "../../layouts/Footer";
import Avax from "../../layouts/Avax";

const Home = () => {
    return (
        <div className=" bg-wojak w-full h-full relative z-10">
            <div className=" bg-gradient relative">
                <div className="bg-custom w-full h-full relative z-30 ">
                    <Avax />
                    <div className="md:h-screen h-full w-full z-40 all-center md:flex-row flex-col md:px-10 px-2">
                        <div className="md:w-2/4 w-full all-center flex-col md:-mt-18 mt-0">
                            <div className="md:block hidden">
                                <Tokenmics />
                            </div>
                            <div className="relative md:mt-8 mt-20 z-[60]">
                                <img src={Avatar} alt="Item EOG" className="md:w-[600px] w-[480px] md:h-[520px] h-[380px] md:rounded-none rounded-2xl md:ml-24 ml-0" />
                            </div>
                            <h1 className="text-title text-white with-shadow md:absolute relative top-20 md:right-96 right-0 md:hidden block">$WOJAK</h1>
                            <div className="md:absolute relative top-0 md:hidden flex w-full md:justify-between justify-center px-10 md:pt-5 pt-32">
                                <div className="all-center md:gap-6 gap-10 flex-col">
                                    <Link to={"#"} target="_blank">
                                        <button className="py-5 px-10 md:w-[280px] w-[360px] md:h-9 h-20 rounded-xl border-4 border-white !text-white blur-10 uppercase shadow-custom text-btn all-center">dextools chart</button>
                                    </Link>
                                    <Link to={"#"} target="_blank">
                                        <button className="py-5 px-10 md:w-[280px] w-[360px] md:h-9 h-20 rounded-xl border-4 border-white !text-white blur-10 uppercase shadow-custom text-btn all-center">telegram</button>
                                    </Link>
                                    <Link to={"#"} target="_blank">
                                        <button className="py-5 px-10 md:w-[280px] w-[360px] md:h-9 h-20 rounded-xl border-4 border-white !text-white blur-10 uppercase shadow-custom text-btn all-center">twitter</button>
                                    </Link>
                                    <Link to={"#"} target="_blank">
                                        <button className="py-5 px-10 md:w-[280px] w-[360px] md:h-9 h-20 rounded-xl border-4 border-white !text-white blur-10 uppercase shadow-custom text-btn all-center">Discord</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-2/4 w-full py-10  md:!flex md:flex-row flex-col block all-center md:-mt-8 mt-0 relative z-10">
                            <Meet />
                            <div className="md:hidden block">
                                <Tokenmics />
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>

        </div>

    );
};
export default Home;