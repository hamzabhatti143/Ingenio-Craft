"use client"
import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  return (
    <>
      <div className='bg-gray-800 w-full h-auto md:h-56 mt-4 flex flex-col md:flex-row space-x-3 space-y-4'>
        <div className='w-full md:w-1/3 text-white flex justify-center items-center'>
            <h2 className='text-4xl font-bold'>Ingenio Craft</h2>
        </div>
        <div className='w-full md:w-1/3 flex justify-center items-center md:items-start flex-col gap-4'>
        <Link href={"/"} className="hover:text-yellow-500 text-white">
              Home
            </Link>
            <Link href={"/about"} className="hover:text-yellow-500 text-white">
              About
            </Link>
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="hover:text-yellow-500 text-white focus:outline-none flex items-center gap-1"
              >
                Services <IoIosArrowDown />
              </button>
              {isServicesOpen && (
                <div className="absolute bg-gray-700 rounded-lg mt-2 w-48 shadow-lg z-10">
                  <ul className="text-sm">
                    <li className="hover:bg-gray-600 text-white px-4 py-2">
                      <Link href="/services/ansys">Ansys</Link>
                    </li>
                    <li className="hover:bg-gray-600 text-white px-4 py-2">
                      <Link href="/services/autocad">AutoCAD</Link>
                    </li>
                    <li className="hover:bg-gray-600 text-white px-4 py-2">
                      <Link href="/services/cfd">CFD</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <Link href={"/contact"} className="hover:text-yellow-500 text-white">
              Contact
            </Link>
        </div>
        <div className='w-full md:w-1/3 flex justify-center flex-col gap-4'>
        <div className='w-full md:w-2/3 flex flex-col justify-center items-center md:items-start'>
          <label htmlFor="newsletter" className='text-white'>Newsletter</label>
          <input type="email" name="newsletter" id="newsletter" className='border-2 border-yellow-500 
          p-2 bg-transparent' placeholder='Enter Email'/>
        </div>
        <div className='w-full md:w-2/3 flex flex-col md:flex-row items-center gap-6'>
        <FaFacebook  className='fill-white text-xl'/>
        <FaInstagram  className='fill-white text-xl'/> 
        <FaTwitter  className='fill-white text-xl'/>
        </div>
        </div>
      </div>
    </>
  )
}

export default Footer
