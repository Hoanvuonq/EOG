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

const TokenmicsBoBo = () => {
    const contractAddress = '0xe4dC50918e17016D52276eAA1771862C205573Df';
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
            <div className="flex-col md:pt-0 pt-32 md:pl-20 pl-0 md:pb-0 pb-10 relative z-40">
                <h1 className="text-title-box text-black md:text-start text-center md:text-[80px] text-[52px] md:hidden block absolute z-[70] ">Tokenomic</h1>
                <div className="all-center md:-mt-3 mt-10">
                    <div className="flex gap-8 bg-[#F8D046] py-6 rounded-[40px] border-2 shadow-box border-black w-[50%] all-center">
                        <div className="flex flex-col">
                            <Link to={'/'}>
                                <button className="text-token flex flex-col gap-2 text-black text-center  md:w-[280px] w-[380px]  cursor-pointer all-center md:!justify-start !justify-center md:rounded-none rounded-xl ">
                                    <p> 1,000,000,000,000,000 $WOJAK</p>
                                    <p className='!font-normal'>Total Supply</p>
                                </button>
                            </Link>
                        </div>
                        <div className="flex flex-col">
                            <Link to={'/'}>
                                <button className="text-token flex flex-col gap-2 text-black text-center  md:w-[120px] w-[380px]  cursor-pointer all-center md:!justify-start !justify-center md:rounded-none rounded-xl ">
                                    <p> 0% / 0% </p>
                                    <p className='!font-normal'>TAX</p>
                                </button>
                            </Link>
                        </div>
                        <div className="flex flex-col">
                            <Link to={'/'}>
                                <button className="text-token flex flex-col gap-2 text-black text-center  md:w-[160px] w-[380px]  cursor-pointer all-center md:!justify-start !justify-center md:rounded-none rounded-xl ">
                                    <p className=''>RENOUNCED</p>
                                    <p className='!font-normal'> Ownership </p>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="gap-2 cursor-pointer all-center md:mt-3 mt-12">
                    <p className="text-address items-center flex gap-2 !text-white pb-1 ">
                        Contract Address -  <p ref={buttonRef} data-clipboard-text={contractAddress}>
                            {splitAddress(contractAddress, { numSplit: 10 })}

                        </p>
                        <img src={IconCoppy} width={20} height={20} alt="Icon Coppy" className="ml-2" />

                    </p>

                </div>
            </div >
        </>
    );
};
export default TokenmicsBoBo;