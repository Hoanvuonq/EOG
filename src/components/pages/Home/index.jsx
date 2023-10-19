import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../../assets/avatar.jpg" 
import Tokenmics from "../Tokenmics";
import Meet from "../Meet";
import Footer from "../../layouts/Footer";
import HalloweenBat from "../../layouts/Halloween-bat";

const Home = () => {
    return (
        <div className="bg-[#23033D] w-full h-full">  
            <div className="bg-custom w-full h-full">
                <div className="all-center w-full pt-[100px] flex-col">
                    <HalloweenBat/>
                    <img src={Avatar} alt="Item EOG" className="sm:w-[400px] w-[300px] rounded-full border-[6px] border-[#FDF436]" />
                    <h1 className="text-title text-white sm:!text-[100px] !text-[80px]">$PEPIE</h1>
                    <p className="text-content text-white text-center sm:px-0 px-2">CA :</p>
                    <p className="text-content text-white text-center sm:px-0 px-2">PEPIE THE ZOMBIE</p>
                    <div className="all-center gap-10 mt-10 lg:flex-row flex-col">
                        <Link to={"#"} target="_blank">
                            <button className="bg-white text-[#432627] py-5 px-10 rounded-xl w-[315px] h-[57px] shadow-custom text-btn all-center">dextools chart</button>
                        </Link>
                        <Link to={"https://t.me/PepiePortal"} target="_blank">
                            <button className="bg-white text-[#432627] py-5 px-10 rounded-xl w-[315px] h-[57px] shadow-custom text-btn all-center">telegram</button>
                        </Link>
                        <Link to={"https://t.me/PepiePortal"} target="_blank">
                            <button className="bg-white text-[#432627] py-5 px-10 rounded-xl w-[315px] h-[57px] shadow-custom text-btn all-center">twitter</button>
                        </Link>
                    </div>
                    <Meet/>
                    <Tokenmics/>
                </div>
                <Footer/>
            </div>
        </div>
    );
};
export default Home;