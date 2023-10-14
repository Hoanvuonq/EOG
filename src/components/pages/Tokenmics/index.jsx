import React from "react";
import { Link } from "react-router-dom";

const Tokenmics = () => {
    return (
        <>
            <div className="all-center flex-col">
                <h1 className="text-title-box text-white mt-32">TOKENOMICS</h1>
                <div className="all-center gap-20 sm:flex-row flex-col">
                    <div className="all-center flex-col">
                        <p className="text-title-token pb-1">Total Supply</p>
                        <Link to={"/"}>
                            <button className="text-token text-white py-5 px-10 rounded-xl w-[315px] h-[57px] shadow-custom  all-center border-4 border-white">
                                100,000,000 $EOG
                            </button>
                        </Link>
                    </div>
                    <div className="all-center flex-col">
                        <p className="text-title-token pb-1">Buys / Sells taxes</p>
                        <Link to={"/"}>
                            <button className="text-token text-white py-5 px-10 rounded-xl w-[315px] h-[57px] shadow-custom  all-center border-4 border-white">
                                1% / 1%
                            </button>
                        </Link>
                    </div>
                    
                    <div className="all-center flex-col">
                        <p className="text-title-token pb-1">LP Locked 3 months</p>
                        <Link to={"/"}>
                            <button className="text-token text-white py-5 px-10 rounded-xl w-[315px] h-[57px] shadow-custom  all-center border-4 border-white">
                                98.99%
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="all-center flex-col mt-20">
                <Link to={"/"}>
                    <button className="text-token text-white sm:py-5 py-8 px-10 rounded-xl sm:w-[413px] w-[315px] h-[57px] shadow-custom  all-center border-4 border-white">
                        Ownership Renounced
                    </button>
                </Link>
            </div>
        </>
    );
};
export default Tokenmics;