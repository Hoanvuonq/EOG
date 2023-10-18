import React from "react";
import { Link } from "react-router-dom";
import ItemEog from "../../../assets/item-eog-2.png" 
import Tokenmics from "../Tokenmics";
import Meet from "../Meet";
import Footer from "../../layouts/Footer";

const Home = () => {
    return (
        <div className="bg-[#00500D] w-full h-full">  
            <div className="bg-custom w-full h-full">
                <div className="all-center w-full pt-[100px] flex-col">
                    <img src={ItemEog} alt="Item EOG" className="sm:w-[400px] w-[300px]" />
                    <h1 className="text-title text-white sm:!text-[100px] !text-[80px]">$pEPE</h1>
                    <p className="text-content text-white text-center sm:px-0 px-2">CA :</p>
                    <p className="text-content text-white text-center sm:px-0 px-2">All hail the King</p>
                    <div className="all-center gap-10 mt-10 sm:flex-row flex-col">
                        <Link to={"#"} target="_blank">
                            <button className="bg-white text-[#432627] py-5 px-10 rounded-xl w-[315px] h-[57px] shadow-custom text-btn all-center">dextools chart</button>
                        </Link>
                        <Link to={"#"} target="_blank">
                            <button className="bg-white text-[#432627] py-5 px-10 rounded-xl w-[315px] h-[57px] shadow-custom text-btn all-center">telegram</button>
                        </Link>
                        <Link to={"#"} target="_blank">
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