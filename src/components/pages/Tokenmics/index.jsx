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
        <div className="flex-col md:pt-0 pt-32 md:pl-60 pl-0 md:pb-0 pb-10 relative z-40 w-full justify-center">
            <h1 className="text-title-box text-white md:text-start text-center md:text-[80px] text-[94px] absolute z-[70] md:mt-0 -mt-20 w-full md:hidden flex justify-center">Tokenomic</h1>
            <div className="gap-2 cursor-pointer all-center md:mt-1 mt-12 w-full all-center">
                <p className="text-address items-center flex gap-2 !text-white p-4 border-2 border-white rounded-full">
                    Contract Address
                    <p>-</p>
                    <p>{splitAddress(contractAddress, { numSplit: 10 })}</p>
                    <img ref={buttonRef} data-clipboard-text={contractAddress} src={IconCoppy} width={20} height={20} alt="Icon Coppy" className="ml-2 shadow-custom" />
                </p>
            </div>
        </div>
    );
};
export default Tokenmics;