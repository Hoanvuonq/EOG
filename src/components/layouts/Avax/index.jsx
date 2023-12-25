import React from 'react'
import { Link } from "react-router-dom";
import Telegram from '../../../assets/avax/Telegram.png'
import Twitter from '../../../assets/avax/Twitter.png'
import Discord from '../../../assets/avax/Discord.png'
import LOONG from '../../../assets/avax/avax_1.png'



const Avax = () => {
  return (
    <div className='md:block hidden relative z-[120]'>
      <div className="absolute w-full z-[100]">
        <div className="absolute z-[100]">
          <div className="flex flex-col justify-between p-5 w-full h-screen">
            <img src={LOONG} alt="Design" width={18} />
            <div className="flex flex-col items-center gap-4">
              <Link to={"https://t.me/LoongAvax"} target="_blank">
                <button className="!text-white uppercase shadow-custom text-btn all-center">
                  <img src={Telegram} alt="Design" width={12} /></button>
              </Link>
              <Link to={"https://twitter.com/LoongAvax"} target="_blank">
                <button className="!text-white uppercase shadow-custom text-btn all-center">
                  <img src={Twitter} alt="Design" width={12} /></button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Avax;
