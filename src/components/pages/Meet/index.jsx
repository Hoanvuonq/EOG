import React from 'react';
import AvatarMeet from '../../../assets/avatar-meet.png'

const Meet = () => {
    return (
        <div className="all-center w-full z-20 md:pl-20 pl-0">
            <div className="flex-col m-auto md:max-w-[80%] max-w-full">
                <div className="">
                    <img src={AvatarMeet} alt="Item EOG" className="md:w-[640px] w-[400px] md:h-[330px] h-[400px] md:rounded-none rounded-2xl" />
                </div>
                <h1 className="text-title-box md:text-black text-white md:text-start text-center md:text-[80px] text-[52px] md:mt-0 mt-10">$WOJAK</h1>
                <p className="text-content-box text-justify text-white md:mt-6 mt-4 relative">
                    Wojak's journey began in the early 2010s,
                    when a 4chan user first introduced this character as
                    a reaction image to convey various feelings and states of mind.
                    Over time, Wojak evolved, gaining different facial expressions to represent
                    a wide range of human emotions and experiences. His versatility
                    made him a popular choice among meme creators and internet users.
                </p>
            </div>
        </div>
    );
};
export default Meet;
