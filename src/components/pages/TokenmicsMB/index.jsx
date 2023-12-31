import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import IconCoppy from '../../../assets/copy.png'
import ClipboardJS from 'clipboard';
import Token1 from '../../../assets/token-1.png'
import Token2 from '../../../assets/token-2.png'
import Token3 from '../../../assets/token-3.png'

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

const TokenmicsMB = () => {
    const contractAddress = '0xd544918fa992C2d2FcA60c76D8C2a7Db8AaAD2e8';
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
        <div className="flex-col md:pt-0 pt-32 md:pl-20 pl-0 md:pb-0 pb-10 relative z-40">
            <h1 className="text-title-box text-white md:text-start text-center md:text-[80px] text-[94px] absolute z-[70] md:mt-0 -mt-20 w-full md:hidden flex justify-center">Tokenomic</h1>
            <div className="all-center md:!items-start !items-center md:gap-0 gap-4 md:flex-row flex-col md:-mt-3 mt-10">
                <div className="flex md:gap-4 gap-6 md:flex-row flex-col">
                    <div className="shadow-custom w-full">
                        <Link to={'/'}>
                            <button className="text-token !text-2xl  text-lucky text-[#B70000] flex gap-2  text-center px-4 shadow-custom all-center justify-center ">
                                <img src={Token2} alt="Token 1" className='w-[420px] relative' />
                                <div className="flex -mt-6 absolute gap-1">
                                    <p className=''>ZERO</p>
                                    <p> - </p>
                                    <p className='!font-normal'> TAX </p>
                                </div>
                            </button>
                        </Link>
                    </div>
                    <div className="shadow-custom w-full">
                        <Link to={'/'}>
                            <button className="text-token !text-2xl text-lucky text-[#B70000] flex gap-2 text-center px-4 shadow-custom all-center justify-center ">
                                <img src={Token2} alt="Token 2" className='w-[420px] relative' />
                                <div className="flex -mt-2 absolute gap-1">
                                    <p className=''>CONTRACT SAFE</p>
                                </div>
                            </button>
                        </Link>
                    </div>
                    <div className="shadow-custom w-full">
                        <Link to={'/'}>
                            <button className="text-token  text-[#B70000] gap-2 text-center px-4 shadow-custom all-center justify-center ">
                                <img src={Token3} alt="Token 3" className='w-[430px] relative' />
                                <div className="-mt-6 all-center absolute gap-1">
                                    <p className='!font-normal text-lucky'>CONTRACT</p>
                                    <p> - </p>
                                    <p className='all-center gap-2'>
                                        <p ref={buttonRef} data-clipboard-text={contractAddress}>
                                            {splitAddress(contractAddress, { numSplit: 10 })}
                                        </p>
                                        <img src={IconCoppy} width={20} height={20} alt="Icon Coppy" className="ml-2 shadow-custom h-5" /></p>
                                </div>
                            </button>
                        </Link>
                    </div>
                    <div className="shadow-custom w-full all-center">
                        <div className="shadow-custom w-full all-center">
                            <Link to={'https://traderjoexyz.com/avalanche/trade?outputCurrency=0xd544918fa992C2d2FcA60c76D8C2a7Db8AaAD2e8'}>
                                <button className="text-token flex gap-2 text-[#B70000] bg-white py-5 text-center md:w-[280px] w-[160px] md:h-14 border-2 border-[#B70000] h-14 shadow-custom all-center justify-center rounded-3xl">
                                    <p className=''>BUY</p>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
export default TokenmicsMB;