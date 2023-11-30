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
    const contractAddress = '0x786A2e06EBC4b4679393977616ab911946Fdcbea'; 
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
            <div className="flex-col z-20 md:pt-0 pt-20 md:pl-40 pl-0 md:pb-0 pb-10">
            <h1 className="text-title-box text-white md:text-start text-center md:text-5xl text-6xl">Tokenomic</h1>
                <div className="all-center md:!items-start !items-center md:gap-3 gap-4 flex-col md:-mt-3 mt-10">
                    <div className="flex md:gap-2 gap-4 md:flex-row flex-col">
                        <div className="flex flex-col">
                            {/* <p className="text-title-token pb-1">Total Supply</p> */}
                            <Link to={'/'}>
                                <button className="text-token text-white py-5 pl-5 md:w-[320px] w-[415px] md:h-10 h-20 shadow-custom all-center md:!justify-start !justify-center border-2 rounded-xl blur-20 border-white">
                                        <p className='!font-normal'>Total Supply</p>  -  211,200,500 $KABOSU
                                </button>
                            </Link>
                        </div>
                        <div className="flex flex-col">
                            {/* <p className="text-title-token pb-1 ">Total Supply</p> */}
                            <Link to={'/'}>
                                <button className="text-token text-white py-5 pl-5 md:w-[160px] w-[415px] md:h-10 h-20 shadow-custom all-center md:!justify-start !justify-center border-2 rounded-xl blur-20 border-white">
                                    <p className='!font-normal'>TAXT</p> -  0% / 0%
                                </button>
                            </Link>
                        </div>
                    </div>
                   <div className="flex md:gap-2 gap-4 md:flex-row flex-col">
                    <div className="flex flex-col">
                            {/* <p className="text-title-token pb-1">TAXt</p> */}
                            <Link to={'/'}>
                                <button className="text-token text-white py-5 pl-5 md:w-[240px] w-[415px] md:h-10 h-20 shadow-custom all-center md:!justify-start !justify-center border-2 rounded-xl blur-20 border-white">
                                    <p className='!font-normal'>LP BURNT</p> -  FOREVER
                                </button>
                            </Link>
                        </div>
                        <div className="flex flex-col">
                            {/* <p className="text-title-token pb-1">Ownership</p> */}
                            <Link to={'/'}>
                                <button className="text-token text-white py-5 pl-5 md:w-[240px] w-[415px] md:h-10 h-20 shadow-custom all-center md:!justify-start !justify-center border-2 rounded-xl blur-20 border-white">
                                    Ownership Renounced
                                </button>
                            </Link>
                        </div>
                   </div>
                </div>
                <div className="gap-2 cursor-pointer all-center md:mt-2 mt-4 ">
                    <p className="text-address items-center flex gap-2 md:!text-black !text-white pb-1 ">
                        Contract -  <p ref={buttonRef} data-clipboard-text={contractAddress}>
                            {splitAddress(contractAddress, { numSplit: 10 })}
                            
                            </p>
                            <img src={IconCoppy} width={14} height={14} alt="Icon Coppy" className="ml-2"/> 
                        
                    </p>
                        
                </div>
            </div>
        </>
    );
};
export default Tokenmics;
