import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../../assets/avatar-version-8.png" 
import EOG from "../../../assets/eog.png" 
import Tokenmics from "../Tokenmics";
import Meet from "../Meet";
import Footer from "../../layouts/Footer";

const Home = () => {
    return (
        <div className="w-full h-full relative z-10"> 
            <div className="bg-custom w-full h-full relative z-30">
                <div className="md:h-screen h-full w-full flex-col z-20 all-center ">
                    <img src={Avatar} alt="Item EOG" className="md:w-[400px] w-[350px] md:h-[400px] h-[350px] relative md:mt-0 mt-20" />
                    <h1 className="text-title text-white with-shadow md:absolute relative top-20 md:right-96 right-0">$PM1</h1>
                   <div className="md:absolute relative top-0 flex w-full md:justify-between justify-center px-10 md:pt-5 pt-32">
                        <div className="all-center md:gap-6 gap-10 flex-col">
                            <Link to={"#"} target="_blank">
                                <button className="bg-white py-5 px-10 md:w-[280px] w-[360px] md:h-9 h-16 uppercase shadow-custom text-btn all-center">dextools chart</button>
                            </Link>
                            <Link to={"#"} target="_blank">
                                <button className="bg-white py-5 px-10 md:w-[280px] w-[360px] md:h-9 h-16 uppercase shadow-custom text-btn all-center">telegram</button>
                            </Link>
                            <Link to={"#"} target="_blank">
                                <button className="bg-white py-5 px-10 md:w-[280px] w-[360px] md:h-9 h-16 uppercase shadow-custom text-btn all-center">twitter</button>
                            </Link>
                            <Link to={"#"} target="_blank">
                                <button className="bg-white py-5 px-10 md:w-[280px] w-[360px] md:h-9 h-16 uppercase shadow-custom text-btn all-center">Discord</button>
                            </Link>
                        </div>
                        <img src={EOG} alt="EOG" className="w-[600px] h-[200px] md:block hidden" />
                   </div>
                   <div className="md:hidden block py-10">
                        <Meet/>
                        <Tokenmics/>
                    </div>
                    <div className="absolute bottom-8 w-full px-10 justify-between md:flex hidden">
                        <Meet/>
                        <Tokenmics/>
                    </div>
                </div>
            </div>
        </div>
        
    );
};
export default Home;