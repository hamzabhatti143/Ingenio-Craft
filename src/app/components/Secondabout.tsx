"use client"
import React, { useEffect } from 'react'
import Image from "next/image"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Secondabout = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <>
      <div className='w-full p-10' data-aos="fade-up" data-aos-duration="1200">
              <h1 className='font-bold text-3xl text-center'>About Us</h1>
              <div className='flex justify-center items-center'>
               <Image src={"/images/3in1.png"} alt='about' width={100} height={100} className='w-96 rounded-lg '/>
               </div>
              <p className='text-justify'>At IngenioCraft, we are passionate about delivering high-quality engineering solutions tailored to meet modern industry demands. With expertise in Finite Element Analysis (FEA), Computational Fluid Dynamics (CFD), and AutoCAD design, we help businesses optimize their designs for efficiency, durability, and innovation.   
       <br />
       <br />
       Our team of skilled engineers and designers leverages cutting-edge tools like Ansys, AutoCAD, and CFD simulations to provide accurate, data-driven insights. Whether its structural analysis, fluid flow simulations, or precision drafting, we ensure our clients receive optimized solutions that enhance performance and reduce costs.
       <br />
       <br />
       We take pride in empowering industries such as automotive, aerospace, manufacturing, energy, and HVAC, helping them turn complex engineering challenges into seamless solutions. At IngenioCraft, we don’t just design; we innovate, optimize, and bring ideas to life.


       </p>
            </div>
    </>
  )
}

export default Secondabout
