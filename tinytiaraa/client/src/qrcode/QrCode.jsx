import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import LinksComponent from './LinksComponent';
import ShopComponent from './ShopComponent';

const QrCode = () => {

    const [activeTab, setActiveTab] = useState("Links");
  return (
    <div className='w-full min-h-screen bg-[#fff5cc] flex flex-col items-center '>

        <div className='max-w-[580px] w-full  border border-black '>


        <div className='flex justify-end pt-6 px-2'>
        <div className='w-10 h-10 p-2 flex justify-center items-center rounded-full bg-[#1a1a1a59] text-white cursor-pointer'>
        <BsThreeDots size={16}/>
        </div>

        </div>

        {/* //container */}

        <div className='flex flex-col items-center'>

        <div className=''>
        <img
        src="https://admin.tinytiaraa.com/uploads/images/logowebsite/pgqpod1dbwdxo4kudbjl.webp"
        alt="Logo"
        className="w-24 h-24 mt-2"
        />
        </div>

        <div>
            <h3 className=' text-[#080c20] text-ellipsis text-balance text-center text-lg font-[600] leading-[1.5]'>@tinytiaraa</h3>
            <h2 className='px-6 text-center mt-1 text-sm text-[#080c20]'>Adorable gold & diamond jewelry for kids 💖 Safe, certified, and hypoallergenic!</h2>
        </div>

        {/* toogle */}

         <nav
        data-testid="TabNav"
        className="w-[12rem] rounded-[64px] p-[2px] m-auto mt-4 bg-black/40"
        >
        <ul className="flex items-center justify-center rounded-[64px] relative overflow-hidden">
            {/* Links Tab */}
            <li className="flex items-center grow">
            <button
                data-testid="TabNav-Links"
                className="peer flex items-center h-12 grow justify-center rounded-[64px] transition relative"
                onClick={() => setActiveTab("Links")}
            >
                <span
                className={`text-sm md:text-md font-extrabold relative z-20 transition ${
                    activeTab === "Links" ? "text-black" : "text-white"
                }`}
                >
                Links
                </span>
            </button>
            </li>

            {/* Shop Tab */}
            <li className="flex items-center grow">
            <button
                data-testid="TabNav-Shop"
                className="peer flex items-center h-12 grow justify-center rounded-[64px] transition relative"
                onClick={() => setActiveTab("Shop")}
            >
                <span
                className={`text-sm md:text-md font-extrabold relative z-20 transition ${
                    activeTab === "Shop" ? "text-black" : "text-white"
                }`}
                >
                Shop
                </span>
            </button>
            </li>

            {/* Moving Pill Indicator */}
            <div
            data-testid="TabNav-Pill"
            className={`absolute left-0 top-0 bottom-0 h-12 w-1/2 rounded-[64px] bg-white z-10 pointer-events-none transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${
                activeTab === "Shop" ? "translate-x-full" : "translate-x-0"
            }`}
            ></div>
        </ul>
        </nav>

        </div>


        {/* Render the correct component based on activeTab */}
        <div className="w-full flex justify-center mt-4">
            {activeTab === "Links" ? <LinksComponent /> : <ShopComponent />}
        </div>
        </div>



    </div>
  )
}

export default QrCode