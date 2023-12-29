import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../../../assets/title.png'



const TitleContent = () => {
    return (
        <div className="md:pb-0 pb-2 md:pt-2 pt-6 absolute bottom-28 right-20 z-40 all-center md:!justify-start !justify-center md:-ml-16 ml-0">
            <div className="all-center flex-col">
                <img src={Title} alt="Title" width={500} />
            </div>
        </div>
    );
};
export default TitleContent;