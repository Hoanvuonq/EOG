import React from 'react';
import { Link } from "react-router-dom";
import Arrow from "../../../assets/arrow.png"

const Meet = () => {
    return (
        <div className="all-center w-full z-20 ">
            <div className="flex-col w-full relative md:-ml-[120px] ml-0 ">
                <div className="flex md:justify-between justify-center md:w-[70%] w-full items-center">
                    <h1 className="text-title-box text-white md:text-start text-center md:text-[80px] !font-bold text-[90px] md:mt-0 mt-10 all-center md:!justify-start !justify-center md:w-full w-[70%]">This is</h1>
                    <Link to={"#"} target="_blank" className='comic_sans text-white gap-2 rounded-3xl shadow-custom border border-white p-4 h-10 all-center md:!flex !hidden'>
                        Gitbook
                        <img src={Arrow} width={20} alt="Discord" />
                    </Link>
                </div>
                <h1 className="text-title-box text-white md:text-start text-center md:text-[90px] !font-bold text-[90px] md:mt-0 mt-10">Fineee!!</h1>
                <div className="flex w-full gap-10">
                    <p className="text-content-box text-justify text-white md:mt-6 mt-8 md:max-w-[70%] max-w-[90%] md:m-0 m-auto relative ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate.
                        Faucibus nec gravida ipsum.
                    </p>

                </div>
            </div>
        </div>
    );
};
export default Meet; 
