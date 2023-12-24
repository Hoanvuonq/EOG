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
        <>
            <div className="all-center flex-col md:pt-0 pt-32 md:pl-20 pl-0 md:pb-0 pb-10 relative z-40">
                <h1 className="text-title-box text-white md:text-start text-center md:text-[80px] text-[52px] md:hidden block md:absolute relative z-[70] md:mt-0 -mt-20">Tokenomic</h1>
                <div className="all-center md:!items-start !items-center md:gap-0 gap-4 md:flex-row flex-col md:-mt-3 mt-10">
                    <div className="flex md:gap-0 gap-4 md:flex-row flex-col">
                        <div className="flex flex-col">
                            <Link to={'/'}>
                                <button className="text-token flex gap-2 text-white py-5 text-center px-4 md:w-[280px] w-[380px] md:h-10 h-20 shadow-custom all-center border-2 md:rounded-none rounded-xl sm:blur-20 blur-10 border-white">
                                    <p className='!font-normal'>Total Supply</p>
                                    <p> - </p>
                                    <p> 690,420,000,000 $WOJAK</p>
                                </button>
                            </Link>
                        </div>
                        <div className="flex flex-col">
                            <Link to={'/'}>
                                <button className="text-token flex gap-2 text-white py-5 text-center px-4 md:w-[130px] w-[380px] md:h-10 h-20 shadow-custom all-center border-2 md:rounded-none rounded-xl sm:blur-20 blur-10 border-white">
                                    <p className='!font-normal'>TAX</p>
                                    <p> - </p>
                                    <p> 0% / 0% </p>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex md:gap-0 gap-4 md:flex-row flex-col">
                        <div className="flex flex-col">
                            <Link to={'/'}>
                                <button className="text-token flex gap-2 text-white py-5 text-center px-4 md:w-[160px] w-[380px] md:h-10 h-20 shadow-custom all-center border-2 md:rounded-none rounded-xl sm:blur-20 blur-10 border-white">
                                    <p className='!font-normal'>LP BURNT</p>
                                    <p> - </p>
                                    <p> FOREVER </p>
                                </button>
                            </Link>
                        </div>
                        <div className="flex flex-col">
                            <Link to={'/'}>
                                <button className="text-token text-white py-5 text-center px-4 md:w-[176px] w-[380px] md:h-10 h-20 shadow-custom all-center border-2 md:rounded-none rounded-xl sm:blur-20 blur-10 border-white">
                                    OWNERSHIP REVOKED
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
            </div>
        </>
    );
};
export default Tokenmics;