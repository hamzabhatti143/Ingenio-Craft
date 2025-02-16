"use client"
import React, {useEffect} from 'react'
import Link from "next/link"
import AOS from 'aos';
import 'aos/dist/aos.css';
const ServiceCards = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
    
    <h2 className='text-center font-bold text-3xl pt-6'>Our Services</h2>
      <div  data-aos="fade-up" data-aos-duration="1200" className='w-full p-6 md:p-20 flex flex-col md:flex-row 
      justify-around items-center flex-wrap lg:flex-nowrap
      gap-6'>
        <div className='w-full md:w-1/3 hover:scale-110 space-y-4 
        border-2 border-yellow-500 rounded-xl hover:bg-gray-800 hover:text-white p-6 cursor-pointer'>
        <Link href={"/"}>
        <h2 className='font-bold text-2xl'>Finite Element Analysis (FEA) with Ansys</h2>
        <p className='text-lg font-medium text-justify'>Optimize your designs with precise structural analysis. 
            Our FEA simulations help identify stress points, reduce material waste, 
            and enhance product durability for efficient engineering solutions.</p></Link>
        </div>

        <div className='w-full md:w-1/3 hover:scale-110 space-y-4 
        border-2 border-yellow-500 rounded-xl hover:bg-gray-800 hover:text-white p-6 cursor-pointer'>
        <Link href={"/"}>
        <h2 className='font-bold text-2xl'>AutoCAD Design & Drafting Services</h2>
        <p className='text-lg font-medium text-justify'>Create precise 2D and 3D models with our 
            expert AutoCAD drafting solutions. From architectural blueprints to mechanical designs, we
             deliver accurate and optimized drawings for your engineering needs.</p></Link>
        </div>

        <div className='w-full md:w-1/3 hover:scale-110 space-y-4 
        border-2 border-yellow-500 rounded-xl hover:bg-gray-800 hover:text-white p-6 cursor-pointer'>
        <Link href={"/"}>
        <h2 className='font-bold text-2xl'>CFD Simulation & Analysis Services</h2>
        <p className='text-lg font-medium text-justify'>Optimize fluid flow and heat transfer with our 
            advanced CFD simulations. We analyze velocity, pressure distribution, and turbulence effects 
            to enhance performance in automotive, HVAC, and industrial applications.</p></Link>
        </div>
      </div>
    </>
  )
}

export default ServiceCards
