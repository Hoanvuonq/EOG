import React from 'react';
import { Link } from 'react-router-dom';

const Tokenmics = () => {
    return (
        <>
            <div className="all-center flex-col Z-20">
                <h1 className="text-title-box text-white mt-32 sm:!text-[100px] !text-[40px]">TOKENOMICS</h1>
                <div className="all-center gap-20 lg:flex-row flex-col mt-4">
                    <div className="all-center flex-col">
                        <p className="text-title-token pb-1">Total Supply</p>
                        <Link to={'/'}>
                            <button className="text-token text-white py-5 px-10 rounded-xl w-[368px] h-[57px] shadow-custom  all-center border-4 blur-10 border-white">
                                3,000,000,000 $EOG
                            </button>
                        </Link>
                    </div>
                    <div className="all-center flex-col">
                        <p className="text-title-token pb-1">Tax</p>
                        <Link to={'/'}>
                            <button className="text-token text-white py-5 px-10 rounded-xl w-[368px] h-[57px] shadow-custom  all-center border-4 blur-10 border-white">
                                0% / 0%
                            </button>
                        </Link>
                    </div>

                    <div className="all-center flex-col">
                        <p className="text-title-token pb-1">LP BURNT</p>
                        <Link to={'/'}>
                            <button className="text-token text-white py-5 px-10 rounded-xl w-[368px] h-[57px] shadow-custom  all-center border-4 blur-10 border-white">
                                $3000BCE
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="all-center flex-col mt-20">
                <Link to={'/'}>
                    <button className="text-token text-white sm:py-5 py-8 px-10 rounded-xl sm:w-[413px] w-[368px] h-[57px] shadow-custom  all-center border-4 blur-10 border-white">
                        Ownership Renounced
                    </button>
                </Link>
            </div>
        </>
    );
};
export default Tokenmics;
