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
            <div className="flex-col md:pb-0 pb-10 relative z-40 -ml-80">
                <div className="all-center md:!items-start !items-center md:gap-0 gap-10 md:flex-row flex-col md:-mt-3 mt-10">
                    <div className="flex gap-10 md:flex-row flex-col">
                        <div className="flex flex-col">
                            <Link to={'/'}>
                                <button className="text-token flex flex-col gap-2 text-white py-8 text-center px-4 md:w-[200px] w-[400px] md:h-32 h-20 shadow-custom all-center md:!justify-start !justify-center border-2 md:rounded-none rounded-3xl blur-1 border-white">
                                    <p className='!font-normal comic_nue'>TOTAL SUPPLY</p>
                                    <p> 100,000,000,000 </p>
                                </button>
                            </Link>
                        </div>
                        <div className="flex flex-col">
                            <Link to={'/'}>
                                <button className="text-token flex flex-col gap-2 text-white py-8 text-center px-4 md:w-[200px] w-[400px] md:h-32 h-20 shadow-custom all-center md:!justify-start !justify-center border-2 md:rounded-none rounded-3xl blur-1 border-white">
                                    <p className='!font-normal comic_nue'>TAX</p>
                                    <p> 0% / 0% </p>
                                </button>
                            </Link>
                        </div>
                        <div className="flex flex-col">
                            <Link to={'/'}>
                                <button className="text-token flex flex-col gap-2 text-white py-8 text-center px-4 md:w-[200px] w-[400px] md:h-32 h-20 shadow-custom all-center md:!justify-start !justify-center border-2 md:rounded-none rounded-3xl blur-1 border-white">
                                    <p className='!font-normal comic_nue'>LP BURNT</p>
                                    <p> FOREVER </p>
                                </button>
                            </Link>
                        </div>
                        <div className="flex md:gap-0 gap-4 md:flex-row flex-col">
                            <div className="flex flex-col">
                                <Link to={'/'}>
                                    <button className="text-token flex flex-col gap-2 text-white py-8 text-center px-4 md:w-[200px] w-[400px] md:h-32 h-20 shadow-custom all-center md:!justify-start !justify-center border-2 md:rounded-none rounded-3xl blur-1 border-white">
                                        <p className='!font-normal comic_nue'> RENOUNCED</p>
                                        <p>Ownership</p>
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