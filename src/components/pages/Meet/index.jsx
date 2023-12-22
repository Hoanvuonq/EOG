import React from 'react';
import { Link } from "react-router-dom";
import Title from "../../../assets/avax/title.png"

const Meet = () => {
    return (
        <div className="all-center w-full z-20 ">
            <div className="flex-col w-full relative flex justify-center items-center">
                <img src={Title} alt="Title Meet BluePill" width={600} className='md:w-[600px] w-[90%]' />
            </div>
        </div>
    );
};
export default Meet; 