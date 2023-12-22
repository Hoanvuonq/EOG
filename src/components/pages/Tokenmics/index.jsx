import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import IconCoppy from '../../../assets/copy.png'
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

const TokenmicsHome = () => {
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
        <>
            <div className="flex-col md:pb-0 pb-10 relative z-40 ">
                <h1 className="text-title-box text-white md:text-start text-center text-6xl">Tokenomic</h1>
                <div className="all-center md:!items-start !items-center md:gap-0 gap-10 md:flex-row flex-col md:-mt-2 mt-10">
                    <div className="flex gap-10 md:flex-row flex-col">
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col">
                                <Link to={'/'}>
                                    <button className="text-token blur-10 border-4 border-white flex flex-col gap-2 text-white py-7 text-center px-6 md:w-[300px] w-[360px] shadow-custom all-center md:!justify-start !justify-center rounded-3xl ">
                                        <p className='!font-normal text-white'>Total Supply</p>
                                        <p className='text-white'> 1,000,000,000 </p>
                                    </button>
                                </Link>
                            </div>
                            <div className="flex flex-col">
                                <Link to={'/'}>
                                    <button className="text-token blur-10 border-4 border-white flex flex-col gap-2 text-white py-7 text-center px-6 md:w-[300px] w-[360px] shadow-custom all-center md:!justify-start !justify-center rounded-3xl ">
                                        <p className='!font-normal text-white'>Ticker</p>
                                        <p className='text-white'> $MEME</p>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col">
                                <Link to={'/'}>
                                    <button className="text-token blur-10 border-4 border-white flex flex-col gap-2 text-white py-7 text-center px-6 md:w-[300px] w-[360px] shadow-custom all-center md:!justify-start !justify-center rounded-3xl ">
                                        <p className='!font-normal text-white'>Tax</p>
                                        <p className='text-white'> 0% / 0% </p>
                                    </button>
                                </Link>
                            </div>

                            <div className="flex flex-col">
                                <Link to={'/'}>
                                    <button className="text-token blur-10 border-4 border-white flex flex-col gap-2 text-white py-7 text-center px-6 md:w-[300px] w-[360px] shadow-custom all-center md:!justify-start !justify-center rounded-3xl ">
                                        <p className='!font-normal text-white'>Ownership</p>
                                        <p className='text-white'>Renounced</p>
                                    </button>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="gap-2 cursor-pointer all-center md:mt-6 mt-12 w-full all-center">
                    <p className="text-address items-center flex  gap-2 !text-white pb-1 ">
                        Contract Address -  <p ref={buttonRef} data-clipboard-text={contractAddress}>
                            {splitAddress(contractAddress, { numSplit: 10 })}
                        </p>
                        <img src={IconCoppy} width={20} height={20} alt="Icon Coppy" className="ml-2" />
                    </p>
                </div>
            </div>
        </>
    );
};
export default TokenmicsHome;