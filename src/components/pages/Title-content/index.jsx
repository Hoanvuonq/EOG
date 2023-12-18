import React from 'react';
import { Link } from 'react-router-dom';
import Title1 from '../../../assets/avax/title-1.png'
import Title2 from '../../../assets/avax/title-2.png'
import Design3 from '../../../assets/avax/design-3.png'
import Design4 from '../../../assets/avax/design-4.png'
import Design5 from '../../../assets/avax/design-5.png'
import Design6 from '../../../assets/avax/design-6.png'


const TitleContent = () => {
    return (
        <div className="md:pb-0 pb-2 md:pt-2 pt-6 relative z-40 all-center md:!justify-start !justify-center md:-ml-16 ml-0">
            <div className="all-center flex-col">
                <div className="all-center flex-col">
                    <img src={Title1} alt="Kaban1" width={400} height={180} className='relative md:ml-0 ml-0 md:w-[400px] w-[360px]' />
                    <img src={Title2} alt="Kaban1" width={560} height={220} className='relative md:ml-20 ml-0 md:-mt-10 mt-0 md:h-[220px] h-[180px] md:w-[560px] w-[360px]' />
                </div>
                <div className="flex md:py-0 py-10 md:gap-2 gap-6 md:flex-row flex-col">
                    <div className="flex-col all-center">
                        <img src={Design3} alt="Design 3" width={200} height={200} className='md:h-[180px] h-[240px] md:w-[200px] w-[300px]' />
                        <img src={Design6} alt="Design 3" width={200} height={200} className='-mt-4 md:w-[200px] w-[350px]' />
                    </div>
                    <div className="flex-col all-center">
                        <img src={Design4} alt="Design 3" width={90} height={200} className='md:h-[180px] h-[240px] md:w-[90px] w-[240px]' />
                        <img src={Design6} alt="Design 3" width={200} height={200} className='-mt-4 md:w-[200px] w-[350px]' />
                    </div>
                    <div className="flex-col all-center">
                        <img src={Design5} alt="Design 3" width={200} height={200} className='md:h-[180px] h-[240px] md:w-[200px] w-[300px]' />
                        <img src={Design6} alt="Design 3" width={200} height={200} className='-mt-4 md:w-[200px] w-[360px]' />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default TitleContent;