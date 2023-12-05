import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../../assets/avatar-version-12.png"
import EOG from "../../../assets/eog.png"
import Tokenmics from "../Tokenmics";
import Meet from "../Meet";
import Footer from "../../layouts/Footer";
import Design from "../../layouts/Design";

const Home = () => {
    return (
        <div className="w-full h-full relative z-10">
            <div className="bg-custom w-full h-full relative z-30">
                <Design />
                <div className="md:h-screen h-full w-full flex-col z-40 all-center ">
                    <img src={Avatar} alt="Item EOG" className="relative md:w-[340px] w-[380px] md:h-[340px] h-[380px] rounded-2xl all-center md:mt-0 mt-20 md:right-[24%] right-0 z-40 " />
                    <h1 className="text-title text-white with-shadow md:absolute relative top-20 md:right-96 right-0 md:hidden block">$CAI</h1>
                    <div className="md:absolute relative top-0 md:hidden flex w-full md:justify-between justify-center px-10 md:pt-5 pt-32">
                        <div className="all-center md:gap-6 gap-10 flex-col">
                            <Link to={"#"} target="_blank">
                                <button className="py-5 px-10 md:w-[280px] w-[360px] md:h-9 rounded-xl border-4 border-white !text-white blur-10 h-16 uppercase shadow-custom text-btn all-center">dextools chart</button>
                            </Link>
                            <Link to={"https://t.me/ChatAllAI"} target="_blank">
                                <button className="py-5 px-10 md:w-[280px] w-[360px] md:h-9 rounded-xl border-4 border-white !text-white blur-10 h-16 uppercase shadow-custom text-btn all-center">telegram</button>
                            </Link>
                            <Link to={"https://twitter.com/ChatAllAI"} target="_blank">
                                <button className="py-5 px-10 md:w-[280px] w-[360px] md:h-9 rounded-xl border-4 border-white !text-white blur-10 h-16 uppercase shadow-custom text-btn all-center">twitter</button>
                            </Link>
                            <Link to={"#"} target="_blank">
                                <button className="py-5 px-10 md:w-[280px] w-[360px] md:h-9 rounded-xl border-4 border-white !text-white blur-10 h-16 uppercase shadow-custom text-btn all-center">Discord</button>
                            </Link>
                        </div>
                        <img src={EOG} alt="EOG" className="w-[600px] h-[200px] hidden" />
                    </div>
                    <div className="md:hidden block py-10">
                        <Meet />
                        <Tokenmics />
                    </div>
                    <div className="absolute bottom-8 w-full px-10 flex-col md:!flex !hidden all-center left-[8%] h-screen">
                        <div className="relative z-20 w-[50%] h-[74%] mt-12 blur-10 rounded-3xl py-4 pr-20">
                            <Meet />
                            <Tokenmics />
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>

    );
};
export default Home;