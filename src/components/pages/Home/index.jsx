import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../../assets/avatar-version-1.png"
import Tokenmics from "../Tokenmics";
import Meet from "../Meet";
import Footer from "../../layouts/Footer";
import Avax from "../../layouts/Avax";

const Home = () => {
    return (
        <div className="w-full h-full relative z-10">
            <div className="relative">
                <div className="bg-custom w-full h-full relative z-30 ">
                    <div className="md:h-screen h-full w-full all-center mt-0 !items-start flex-col  relative z-[100]">
                        <div className="w-full py-10 px-0 flex md:flex-row flex-col md:-mt-8 relative z-50 mt-0">
                            <div className="md:w-[50%] w-full">
                                <div className="relative z-20 w-full md:!block !flex all-center">
                                    <img src={Avatar} alt="Item EOG" className="md:w-[700px] w-[480px] md:h-[724px] h-[380px] md:rounded-none rounded-2xl" />
                                </div>

                            </div>
                            <div className="md:w-[50%] w-full md:mr-20 mr-0 md:mt-20 mt-0">
                                <Meet />
                            </div>
                            <div className="md:hidden block">
                                <Tokenmics />
                            </div>
                        </div>
                        <Avax />
                        <Footer />
                    </div>
                </div>
            </div>

        </div>

    );
};
export default Home;