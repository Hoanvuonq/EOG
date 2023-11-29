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
            <div className="all-center flex-col z-20 md:pt-0 pt-10">
            {/* <p className="text-contentz text-white text-center sm:!text-base !text-xl max-w-[80%] overflow-hidden text-ellipsis whitespace-nowrap"> Contract Address : 0x4938e35e85905e9ab7a23fe9eddac39e3d91649a</p> */}
                <div className="all-center md:gap-3 gap-10 flex-col">
                    <div className="flex flex-col">
                        <p className="text-title-token pb-1">Contract Address</p>
                        <Link to={'/'}>
                            <button
                                ref={buttonRef}
                                className="text-token u text-white py-5 px-10 md:w-[315px] w-[360px] md:h-10 h-20 shadow-custom all-center border-4 blur-10 border-white"
                                data-clipboard-text={contractAddress}
                                >
                                {splitAddress(contractAddress, { numSplit: 5 })}
                             
                                <img src={IconCoppy} width={20} height={20} alt="Icon Coppy" className="ml-2"/>
                            </button>
                        </Link>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-title-token pb-1">Total Supply</p>
                        <Link to={'/'}>
                            <button className="text-token u text-white py-5 px-10 md:w-[315px] w-[360px] md:h-10 h-20 shadow-custom all-center border-4 blur-10 border-white">
                                420,000,000 $PM1
                            </button>
                        </Link>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-title-token pb-1">LP Burnt</p>
                        <Link to={'/'}>
                            <button className="text-token text-white py-5 px-10 md:w-[315px] w-[360px] md:h-10 h-20 shadow-custom all-center border-4 blur-10 border-white">
                                FOREVER
                            </button>
                        </Link>
                    </div>

                    {/* <div className="flex flex-col">
                        <p className="text-title-token pb-1">LP Locked 3 months</p>
                        <Link to={'/'}>
                            <button className="text-token text-white py-5 px-10 md:w-[315px] w-[360px] md:h-10 h-20 shadow-custom all-center border-4 blur-10 border-white">
                                $3000BCE
                            </button>
                        </Link>
                    </div> */}

                    <div className="flex flex-col">
                        <p className="text-title-token pb-1">Ownership</p>
                        <Link to={'/'}>
                            <button className="text-token text-white py-5 px-10 md:w-[315px] w-[360px] md:h-10 h-20 shadow-custom all-center border-4 blur-10 border-white">
                                Ownership Renounced
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Tokenmics;
