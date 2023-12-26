import React, { useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import IconCoppy from '../../../assets/copy.png'
import ZEUS from '../../../assets/avax/ZEUS.png'
import ClipboardJS from 'clipboard';

const splitAddress = (address, options) => {
    const isVersion2 = options?.isVersion2 || false;
    const numSplit = options?.numSplit || 10;

    if (address) {
        return (
            <>
                {address.substring(0, isVersion2 ? 4 : numSplit)}
                {isVersion2 ? ' **** **** ' : ' ... '}
                {address.substring(address.length - (isVersion2 ? 4 : numSplit))}
            </>
        );
    }

    return '';
};



const Avax = () => {
    const contractAddress = '';
    const buttonRef = useRef(null);

    useEffect(() => {
        const clipboard = new ClipboardJS(buttonRef.current);

        clipboard.on('success', (e) => {
            console.log('Copied to clipboard:', e.text);
        });

        return () => {
            clipboard.destroy();
        };
    }, []);
    return (
        <div className='md:block w-full hidden relative z-[120]'>
            {/* <img src={ZEUS} alt="ZEUS" className='absolute right-0 bottom-[500px]' /> */}
            <div className="absolute w-full first-lette left-[8%] bottom-14 z-[100]">
                <div className="md:!flex block justify-between items-center w-full relative z-50 md:px-20 px-0">
                    <div className="mt-10">
                        <div className="all-center flex-col md:pt-0 pt-32  md:pb-0 pb-10 relative z-40">
                            <h1 className="text-title-box text-white md:text-start text-center md:text-[80px] text-[52px] md:hidden block md:absolute relative z-[70] md:mt-0 -mt-20">Tokenomic</h1>
                            <div className="all-center md:!flex !hidden md:!items-start !items-center md:gap-2 gap-4 md:flex-row flex-col md:-mt-3 mt-10">
                                <div className="flex md:gap-0 gap-4 md:flex-row flex-col">
                                    <div className="flex flex-col">
                                        <Link to={'/'}>
                                            <button className="text-token flex gap-2 text-white py-5 text-center px-4 md:w-[410px] w-[380px] md:h-10 h-20 shadow-custom all-center md:rounded-none rounded-xl ">
                                                <p className='font-bold text-[#1257FA] text-border-1 !text-2xl'>Total Supply</p>
                                                <p> - </p>
                                                <p className='font-bold !text-3xl'> 69,420,000,000 $ZEUS</p>
                                            </button>
                                        </Link>
                                    </div>
                                    <div className="flex flex-col">
                                        <Link to={'/'}>
                                            <button className="text-token flex gap-2 text-white py-5 text-center px-4 md:w-[200px] w-[380px] md:h-10 h-20 shadow-custom all-center md:rounded-none rounded-xl ">
                                                <p className='font-bold text-[#1257FA] text-border-1 !text-2xl'>TAX</p>
                                                <p> - </p>
                                                <p className='font-bold !text-3xl'> 0% / 0% </p>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex md:gap-10 gap-4 md:flex-row flex-col">
                                    <div className="flex flex-col">
                                        <Link to={'/'}>
                                            <button className="text-token flex gap-2 text-white py-5 text-center px-4 md:w-[250px] w-[380px] md:h-10 h-20 shadow-custom all-center md:rounded-none rounded-xl ">
                                                <p className='font-bold text-[#1257FA] text-border-1 !text-2xl'>LP LOCKED</p>
                                                <p> - </p>
                                                <p className='font-bold !text-3xl'> 3 MONTHS </p>
                                            </button>
                                        </Link>
                                    </div>
                                    <div className="flex flex-col">
                                        <Link to={'/'}>
                                            <button className="text-token flex gap-2 text-white py-5 text-center px-4 md:w-[250px] w-[380px] md:h-10 h-20 shadow-custom all-center md:rounded-none rounded-xl ">
                                                <p className='font-bold text-[#1257FA] text-border-1 !text-2xl'>OWNERSHIP</p>
                                                <p> - </p>
                                                <p className='font-bold !text-3xl'> RENOUNCED </p>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="all-center md:!hidden !flex md:!items-start !items-center md:gap-0 gap-4 md:flex-row flex-col md:-mt-3 mt-10">
                                <div className="flex md:gap-0 gap-4 md:flex-row flex-col">
                                    <div className="flex flex-col">
                                        <Link to={'/'}>
                                            <button className="text-token flex gap-2 rounded-full border-2 border-white text-white py-5 text-center px-4 md:w-[380px] w-[380px] md:h-10 h-20 shadow-custom all-center md:rounded-none blur-10 ">
                                                <p className='font-bold'>Total Supply</p>
                                                <p> - </p>
                                                <p className='font-bold'> 999,999,999,999 $LOONG</p>
                                            </button>
                                        </Link>
                                    </div>
                                    <div className="flex flex-col">
                                        <Link to={'/'}>
                                            <button className="text-token flex gap-2 rounded-full border-2 border-white text-white py-5 text-center px-4 md:w-[200px] w-[380px] md:h-10 h-20 shadow-custom all-center md:rounded-none blur-10 ">
                                                <p className='font-bold'>TAX</p>
                                                <p> - </p>
                                                <p className='font-bold'> 0% / 0% </p>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex md:gap-0 gap-4 md:flex-row flex-col">
                                    <div className="flex flex-col">
                                        <Link to={'/'}>
                                            <button className="text-token flex gap-2 rounded-full border-2 border-white text-white py-5 text-center px-4 md:w-[240px] w-[380px] md:h-10 h-20 shadow-custom all-center md:rounded-none blur-10 ">
                                                <p className='font-bold'>LP LOCKED</p>
                                                <p> - </p>
                                                <p className='font-bold'> 9 MONTHS </p>
                                            </button>
                                        </Link>
                                    </div>
                                    <div className="flex flex-col">
                                        <Link to={'/'}>
                                            <button className="text-token !font-bold rounded-full border-2 border-white text-white py-5 text-center px-4 md:w-[260px] w-[380px] md:h-10 h-20 shadow-custom all-center md:rounded-none blur-10 ">
                                                <p className='font-bold!'>OWNERSHIP RENOUNCED</p>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="gap-2 cursor-pointer all-center md:mt-3 mt-12 ">
                                <p className="text-address items-center flex gap-2 text-white pb-1  ">
                                    Contract Address -  <p ref={buttonRef} data-clipboard-text={contractAddress}>
                                        {splitAddress(contractAddress, { numSplit: 10 })}

                                    </p>
                                    <img src={IconCoppy} width={20} height={20} alt="Icon Coppy" className="ml-2 shadow-custom" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Avax;
