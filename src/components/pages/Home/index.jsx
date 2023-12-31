import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../../assets/avatar-version-7.png" 
import Tokenmics from "../Tokenmics";
import Meet from "../Meet";
import Footer from "../../layouts/Footer";

const Home = () => {
    return (
        <div className="bg-[#E3B425] w-full h-full relative z-10"> 
            <div className="bg-custom w-full h-full relative z-30">
                <div className="all-center w-full pt-[100px] flex-col z-20">
                    <img src={Avatar} alt="Item EOG" className="sm:w-[400px] w-[300px] sm:h-[400px] h-[300px]" />
                    <h1 className="text-title text-white sm:!text-[100px] !text-[60px]">$EOG</h1>
                    <p className="text-content text-white text-center sm:px-0 px-2">CA: </p>
                    <p className="text-content text-white text-center sm:px-0 px-2">Celebrating the OG Spirit of Vitalik Buterin</p>
                    <div className="all-center gap-10 mt-10 lg:flex-row flex-col">
                        <Link to={"#"} target="_blank">
                            <button className="bg-white py-5 px-10 rounded-xl w-[362px] h-[83px] shadow-custom text-btn all-center">dextools chart</button>
                        </Link>
                        <Link to={"#"} target="_blank">
                            <button className="bg-white py-5 px-10 rounded-xl w-[362px] h-[83px] shadow-custom text-btn all-center">telegram</button>
                        </Link>
                        <Link to={"#"} target="_blank">
                            <button className="bg-white py-5 px-10 rounded-xl w-[362px] h-[83px] shadow-custom text-btn all-center">twitter</button>
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