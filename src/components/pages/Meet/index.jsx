import React from 'react';
import { Link } from "react-router-dom";
import EOG from "../../../assets/eog.png"

const Meet = () => {
    return (
        <div className="all-center w-full z-20">
            <div className="flex-col m-auto md:max-w-[80%] max-w-full">
                <div className="md:block hidden border-2 border-black p-4">
                    <h1 className="text-title-box text-white md:text-start text-center md:text-[80px] text-[52px] md:mt-0 mt-10">BOBO THE BEAR</h1>
                </div>
                <h1 className="text-title-box text-white md:text-start text-center md:text-[80px] text-[52px] md:mt-0 mt-10 md:hidden block">BOBO THE BEAR</h1>
                <p className="text-content-box text-justify text-white md:mt-6 mt-4 relative px-2">
                    Memes like "Bobo the Bear" often gain traction on social media platforms
                    and forums where people share and create variations of the meme to suit
                    different humorous contexts or current trends. The appeal of such memes
                    lies in their simplicity, the universal appeal of cute animal characters,
                    and the ability to adapt the meme to a wide variety of situations.
                </p>
                <div className="w-full md:justify-between justify-center pt-5 md:flex hidden">
                    <div className="all-center gap-4">
                        <Link to={"#"} target="_blank">
                            <button className="py-8 px-8 w-[200px] md:h-9 rounded-full !text-white blur-10 uppercase shadow-custom text-btn all-center">CHART</button>
                        </Link>
                        <Link to={"#"} target="_blank">
                            <button className="py-8 px-8 w-[200px] md:h-9 rounded-full !text-white blur-10 uppercase shadow-custom text-btn all-center">TELEGRAM</button>
                        </Link>
                        <Link to={"#"} target="_blank">
                            <button className="py-8 px-8 w-[200px] md:h-9 rounded-full !text-white blur-10 uppercase shadow-custom text-btn all-center">TWITTER</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Meet;
