import React from 'react';
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


const Footer = ({ openModal }) => {
  return (
    <div className='p-5'>
      <div className=" max-w-7xl mx-auto flex flex-col justify-center items-center">
        <div className='w-full py-4 border-b border-[#379723]'>
          <h1 className='text-3xl font-semibold mb-5'>GET IN TOUCH</h1>
          <div>
            <button 
            className='border border-[#115d02] p-3 mb-5 font-semibold  hover:text-white hover:bg-[#115d02] transition-all ease-in-out duration-300'
            onClick={openModal}
            >
              Contact Us
            </button>
          </div>
          <p className='text-sm sm:text-lg font-medium'>118 Aka Road, Close to William Street Uyo, Nigeria.</p>
        </div>
        <div className='w-full py-4 flex justify-between'>
          <p className='text-[12px] sm:text-lg font-light'>Copyright © 2024. Calvary Family Church</p>
          <div className='flex gap-5 text-2xl'>
            <a href="" target='_blank'>
              <FaFacebook />
            </a>
            <a href="" target='_blank'>
              <SiGmail />
            </a>
            <a href="" target='_blank'>
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
