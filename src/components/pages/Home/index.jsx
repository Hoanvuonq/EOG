import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../../assets/item-eog-3.png" 
import Tokenmics from "../Tokenmics";
import Meet from "../Meet";
import Footer from "../../layouts/Footer";

const Home = () => {
    return (
        <div className="bg-[#23033D] w-full h-full">  
            <div className="bg-custom w-full h-full">
                <div className="all-center w-full pt-[100px] flex-col">
<<<<<<< HEAD
                    <img src={Avatar} alt="Item EOG"  />
                    <h1 className="text-title text-white sm:!text-[100px] !text-[80px]">$PAGER</h1>
                    <p className="text-content text-white text-center sm:px-0 px-2">CA :</p>
                    <p className="text-content text-white text-center sm:px-0 px-2">Meeting Pager - Elon’s smart monkey</p>
                    <div className="all-center gap-10 mt-10 lg:flex-row flex-col">
                        <Link to={"#"} target="_blank">
                            <button className="bg-white py-5 px-10 rounded-xl w-[362px] h-[57px] shadow-custom text-btn all-center">dextools chart</button>
                        </Link>
                        <Link to={"#"} target="_blank">
                            <button className="bg-white py-5 px-10 rounded-xl w-[315px] h-[57px] shadow-custom text-btn all-center">telegram</button>
                        </Link>
                        <Link to={"#"} target="_blank">
                            <button className="bg-white py-5 px-10 rounded-xl w-[315px] h-[57px] shadow-custom text-btn all-center">twitter</button>
=======
                    <HalloweenBat/>
                    <img src={Avatar} alt="Item EOG" className="sm:w-[400px] w-[300px] rounded-full border-[6px] border-[#FDF436]" />
                    <h1 className="text-title text-white sm:!text-[100px] !text-[80px]">$PEPIE</h1>
                    <p className="text-content text-white text-center sm:px-0 px-2">CA: 0x2A6518Bce52Bc588094D2dEc01c8f35e39c878F8</p>
                    <p className="text-content text-white text-center sm:px-0 px-2">PEPIE THE ZOMBIE</p>
                    <div className="all-center gap-10 mt-10 lg:flex-row flex-col">
                        <Link to={"https://www.dextools.io/app/en/ether/pair-explorer/0xdf3518e29bf25c3768565e1bf83062ff79975d1c"} target="_blank">
                            <button className="bg-white text-[#432627] py-5 px-10 rounded-xl w-[315px] h-[57px] shadow-custom text-btn all-center">dextools chart</button>
                        </Link>
                        <Link to={"https://t.me/PepiePortal"} target="_blank">
                            <button className="bg-white text-[#432627] py-5 px-10 rounded-xl w-[315px] h-[57px] shadow-custom text-btn all-center">telegram</button>
                        </Link>
                        <Link to={"https://twitter.com/Pepie_ETH"} target="_blank">
                            <button className="bg-white text-[#432627] py-5 px-10 rounded-xl w-[315px] h-[57px] shadow-custom text-btn all-center">twitter</button>
>>>>>>> f04ad711e7cb55d0288d448ec4b673c6909410aa
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