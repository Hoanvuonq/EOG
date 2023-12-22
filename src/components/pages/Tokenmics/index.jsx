import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import IconCoppy from '../../../assets/copy.png'
import ClipboardJS from 'clipboard';
import Box1 from '../../../assets/avax/box-1.png'
import Box2 from '../../../assets/avax/box-2.png'
import Box3 from '../../../assets/avax/box-3.png'
import Box4 from '../../../assets/avax/box-4.png'

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

const Tokenmics = () => {
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
        <div className="flex-col md:pt-0 pt-32  md:pb-0 pb-10 relative z-40">
            <h1 className="text-title-box text-white md:text-start text-center md:text-[80px] text-[65px] absolute z-[70] md:mt-0 -mt-20 w-full md:hidden flex justify-center">Tokenomic</h1>
            <div className="all-center md:!items-start !items-center md:gap-0 gap-4 md:flex-row flex-col md:-mt-3 mt-10">
                <div className="flex md:gap-4 gap-16 md:flex-row flex-col">
                    <div className="flex flex-col shadow-custom">
                        <Link to={'/'}>
                            <button className="text-token flex gap-2 text-white p-2 text-center md:w-[320px] w-[360px] h-24 shadow-custom all-center !justify-start rounded-2xl ">
                                <img src={Box1} alt="Item box" width={400} />
                                {/* <div className="flex flex-col gap-2 text-start">
                                    <p className='!font-medium archivo !text-xs uppercase text-gray-500'>Total Supply</p>
                                    <p className='text-xl text-token-2'> 690,420,000,000 $CARCA</p>
                                </div> */}
                            </button>
                        </Link>
                    </div>
                    <div className="flex flex-col shadow-custom">
                        <Link to={'/'}>
                            <button className="text-token flex gap-2 text-white p-2 text-center md:w-[320px] w-[360px] h-24 shadow-custom all-center !justify-start rounded-2xl ">
                                <img src={Box2} alt="Item box" width={400} />
                                {/* <div className="flex flex-col gap-2 text-start">
                                    <p className='!font-medium archivo !text-xs uppercase text-gray-500'>TAX</p>
                                    <p className='text-xl text-token-2'>0% / 0%</p>
                                </div> */}
                            </button>
                        </Link>
                    </div>
                    <div className="flex flex-col shadow-custom">
                        <Link to={'/'}>
                            <button className="text-token flex gap-2 text-white p-2 text-center md:w-[320px] w-[360px] h-24 shadow-custom all-center !justify-start rounded-2xl ">
                                <img src={Box3} alt="Item box" width={400} />
                                {/* <div className="flex flex-col gap-2 text-start">
                                    <p className='!font-medium archivo !text-xs uppercase text-gray-500'>LP LOCKED</p>
                                    <p className='text-xl'>6 MONTHS</p>
                                </div> */}
                            </button>
                        </Link>
                    </div>
                    <div className="flex flex-col shadow-custom">
                        <Link to={'/'}>
                            <button className="text-token flex gap-2 text-white p-2 text-center md:w-[320px] w-[360px] h-24 shadow-custom all-center !justify-start rounded-2xl ">
                                <img src={Box4} alt="Item box" width={400} />
                                {/* <div className="flex flex-col gap-2 text-start">
                                    <p className='!font-medium archivo !text-xs uppercase text-gray-500'>Ownership</p>
                                    <p className='text-xl text-token-2'>RENOUNCED</p>
                                </div> */}
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
            <div className="gap-2 cursor-pointer md:mt-6 mt-12 w-full all-center !hidden">
                <p className="text-address items-center flex gap-2 !text-white pb-1 ">
                    Contract Address
                    <p>-</p>
                    <p ref={buttonRef} data-clipboard-text={contractAddress}>
                        {splitAddress(contractAddress, { numSplit: 10 })}
                    </p>
                    <img src={IconCoppy} width={20} height={20} alt="Icon Coppy" className="ml-2" />
                </p>
            </div>
        </div>
    );
};
export default Tokenmics;