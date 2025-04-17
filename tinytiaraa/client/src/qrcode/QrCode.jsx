import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import LinksComponent from './LinksComponent';
import ShopComponent from './ShopComponent';
import { IoClose } from "react-icons/io5";
import { RiFacebookFill } from 'react-icons/ri';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { CiLink } from 'react-icons/ci';
import { FiLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Tooltip from "@mui/material/Tooltip";
import { FaPeopleGroup } from 'react-icons/fa6';

const QrCode = () => {

    const [activeTab, setActiveTab] = useState("Links");
    const [showSharePopup, setShowSharePopup] = useState(false);

    const currentUrl = window.location.href; // Get the current page URL
    const [copied, setCopied] = useState(false);
  

  const message = encodeURIComponent("Check this out: "); // Custom share message

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`,
    whatsapp: `https://api.whatsapp.com/send?text=${message}${currentUrl}`,
    email: `mailto:?subject=Check this out&body=${message}${currentUrl}`,
    instagram: "https://www.instagram.com/direct/inbox/", // Instagram doesn't support direct link sharing
    affiliate:"/referrals",
    

  };
    const handleCopy = () => {
      navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    };
  return (
    <div className='w-full min-h-screen bg-[#fff5cc] flex flex-col items-center '>

        <div className='max-w-[580px] w-full  border border-black'>


        <div className='flex justify-end pt-6 px-2'>
        <div className='w-10 h-10 p-2 flex justify-center items-center rounded-full bg-[#1a1a1a59] text-white cursor-pointer' onClick={() => setShowSharePopup(true)}>
        <BsThreeDots size={16}/>
        </div>

        </div>

         {/* Share Popup */}
         {showSharePopup && (
                <div className=" fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="max-w-[540px] bg-gray-100 w-full mx-4 p-4 rounded-xl relative">
                    <div className="flex justify-between items-center border-b border-gray-200 py-3">
                        <div className="flex items-center justify-center">
                        <p className="text-xl font-bold text-gray-800">Share TinyTiaraa</p>
                        </div>

                        <div
                        className="bg-gray-300 hover:bg-gray-500 cursor-pointer hover:text-gray-300 font-sans text-gray-500 w-8 h-8 flex items-center justify-center rounded-full"
                        onClick={() => setShowSharePopup(false)}
                        >
                        <IoClose />
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div>
                        <img
                            src="https://admin.tinytiaraa.com/uploads/images/logowebsite/pgqpod1dbwdxo4kudbjl.webp"
                            alt="Logo"
                            className="w-24 h-24"
                        />
                        </div>

                        <div>
                        <h2 className="px-6 text-center text-sm text-[#080c20]">
                            Adorable gold & diamond jewelry for kids 💖 Safe, certified, and hypoallergenic!
                        </h2>
                        </div>
                    </div>

                    <div className="my-4">
                        <p className="text-sm text-gray-700 font-semibold">Share this link via</p>

                        <div className="flex justify-start gap-4 my-4 px-4">
                        <Tooltip title="Facebook" arrow>
                        {/* Facebook */}
                        <a
                            href={shareLinks.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group border w-10 h-10 md:w-12 md:h-12 border-blue-200 rounded-full flex items-center justify-center shadow-md cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#1877f2] hover:shadow-blue-500/50 hover:text-white"
                        >
                            <RiFacebookFill size={20} className="text-[#1877f2] group-hover:text-white" />
                        </a>
                        </Tooltip>

                        {/* Instagram (Redirects to profile, no direct sharing) */}
                        <Tooltip title="Instagram" arrow>

                        <a
                            href={shareLinks.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group border w-10 h-10 md:w-12 md:h-12 border-pink-200 rounded-full flex items-center justify-center shadow-md cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#bc2a8d] hover:shadow-pink-500/50 hover:text-white"
                        >
                            <FaInstagram size={20} className="text-[#bc2a8d] group-hover:text-white" />
                        </a>
                        </Tooltip>

                        {/* WhatsApp */}
                        <Tooltip title="WhatsApp" arrow>

                        <a
                            href={shareLinks.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group border w-10 h-10 md:w-12 md:h-12 border-green-200 rounded-full flex items-center justify-center shadow-md cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#25D366] hover:shadow-green-500/50 hover:text-white"
                        >
                            <FaWhatsapp size={20} className="text-[#25D366] group-hover:text-white" />
                        </a>
                        </Tooltip>


                        {/* Email */}
                        <Tooltip title="Email" arrow>

                        <a
                            href={shareLinks.email}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group border w-10 h-10 md:w-12 md:h-12 border-sky-200 rounded-full flex items-center justify-center shadow-md cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#229ED9] hover:shadow-sky-500/50 hover:text-white"
                        >
                            <MdOutlineEmail size={20} className="text-[#229ED9] group-hover:text-white" />
                        </a>
                        </Tooltip>

                        {/* Affiliate */}
                        <Tooltip title="Affiliate" arrow>
                        <a
                            href={shareLinks.affiliate}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group border w-10 h-10 md:w-12 md:h-12 border-[#c04b7e34] rounded-full flex items-center justify-center shadow-md cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#c04b7e] hover:shadow-sky-500/50 hover:text-white"
                        >
                            <FaPeopleGroup size={20} className="text-[#c04b7e] group-hover:text-white" />
                        </a>

                        </Tooltip>

                        
                        </div>

                        <p className="text-sm text-gray-700 font-semibold">Or copy link</p>

                        <div className="border-2 border-gray-200 flex justify-between items-center mt-4 py-2 rounded-lg px-3">
                            <FiLink size={24} className="text-gray-600" />

                            <input
                            className="w-full outline-none bg-transparent px-2 text-gray-700"
                            type="text"
                            value={currentUrl}
                            readOnly
                            />

                            <button
                            className="bg-indigo-500 text-white rounded text-sm py-2 px-5 hover:bg-indigo-600 transition-all"
                            onClick={handleCopy}
                            >
                            {copied ? "Copied!" : "Copy"}
                            </button>
                        </div>
                        </div>


                    <div className="flex justify-center mt-6 mb-3">
                            <Link to="https://www.tinytiaraa.com" target="_blank" rel="noopener noreferrer"
                                className="text-sm text-gray-600 transition-colors duration-200 hover:text-blue-600">
                                www.tinytiaraa.com
                            </Link>
                            </div>
                    </div>
                     
                </div>
                
                )}



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