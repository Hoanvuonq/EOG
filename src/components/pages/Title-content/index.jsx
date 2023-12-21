import React, { useRef, useEffect } from 'react';
import ItemBox from '../../../assets/avax/item-box-5.png'
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


const TitleContent = () => {
    const contractAddress = '0x99D23240F136b307C073bDB9b93A00b2B7F8FDa5';
    const buttonRef = useRef(null);

    useEffect(() => {
        const clipboard = new ClipboardJS(buttonRef.current);

        clipboard.on('success', (e) => {
            console.log('Copied to clipboard:', e.text);
        });

        return () => {

        };
    }, []);
    return (
        <div className="md:pb-0 pb-24 md:mt-3 mt-6 relative z-40 all-center">
            <div className="all-center flex-col">
                <div className="all-center flex-col md:absolute relative top-0">
                    <img src={ItemBox} alt="ItemBox" className='rounded-t-3xl md:h-auto h-[200px]' />
                    <div className="gap-2 cursor-pointer flex justify-end w-full absolute md:top-6 top-2 md:right-6 right-2 z-50 ">
                        <p className="text-address items-center flex gap-2 !text-white bg-black rounded-3xl py-2 px-4">
                            Contract Address
                            <p>-</p>
                            <p>{splitAddress(contractAddress, { numSplit: 10 })} </p>
                            <img ref={buttonRef} data-clipboard-text={contractAddress} src={IconCoppy} width={20} height={20} alt="Icon Coppy" className="ml-2 shadow-custom" />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default TitleContent;