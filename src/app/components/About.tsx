"use client"
import React, { useEffect } from 'react'
import Image from "next/image"
import AOS from 'aos';
import 'aos/dist/aos.css';
const About = () => {
  useEffect(() => {
      AOS.init();
    }, []);
  return (
    <>
      <div className='w-full flex flex-col md:flex-row bg-gray-800'>
        <div data-aos="fade-right" data-aos-duration="1200" className='w-full md:w-1/2 p-6'>
        <h1 className='font-bold text-3xl text-center text-white'>About Us</h1>
        <p className='text-justify text-white'>At IngenioCraft, we deliver top-tier engineering solutions using Ansys, AutoCAD, and CFD simulations. Our experts provide precise structural analysis, fluid flow simulations, and CAD designs to optimize projects with accuracy and efficiency. Serving industries like automotive, aerospace, and manufacturing, we specialize in FEA, CFD, and CAD drafting, ensuring tailored, high-quality results.</p>
        </div>
        <div data-aos="fade-left" data-aos-duration="1200" className='w-full md:w-1/2 flex items-center justify-center'>
            <Image src={"/images/about.jpg"} alt='about' width={200} height={200} className='w-3/4 rounded-lg '/>
        </div>
      </div>
    </>
  )
}

export default About
