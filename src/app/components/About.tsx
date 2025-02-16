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
        <p className='text-justify text-white'>At IngenioCraft, we specialize in providing high-quality engineering solutions using cutting-edge tools like Ansys, AutoCAD, and CFD simulations. Our expert team is dedicated to delivering precise structural analysis, fluid flow simulations, and advanced CAD designs to help businesses optimize their projects with accuracy and efficiency.

With a strong commitment to innovation and excellence, we empower industries ranging from automotive, aerospace, and construction to energy and manufacturing. Whether its Finite Element Analysis (FEA), Computational Fluid Dynamics (CFD), or detailed CAD drafting, we ensure that our clients receive the best solutions tailored to their specific needs.</p>
        </div>
        <div data-aos="fade-left" data-aos-duration="1200" className='w-full md:w-1/2 flex items-center justify-center'>
            <Image src={"/images/about.jpg"} alt='about' width={100} height={100} className='w-3/4 rounded-lg '/>
        </div>
      </div>
    </>
  )
}

export default About
