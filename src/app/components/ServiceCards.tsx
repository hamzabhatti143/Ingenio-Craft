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
        <div className='w-full md:w-1/3 hover:scale-95 md:hover:scale-110 space-y-0 md:space-y-4  
        border-2 border-yellow-500 rounded-xl hover:bg-gray-800 hover:text-white p-6 cursor-pointer'>
        <Link href={"/ansys"}>
        <h2 className='font-bold text-2xl'>Finite Element Analysis (FEA) with Ansys</h2>
        <p className='text-lg font-medium text-justify'>
        Incorporation of Active Design in the sport of architecture has shown to improve spatial geometry and in turn help in ease of design development.</p></Link>
        </div>

        <div className='w-full md:w-1/3 hover:scale-95 md:hover:scale-110 space-y-0 md:space-y-4 
        border-2 border-yellow-500 rounded-xl hover:bg-gray-800 hover:text-white p-6 cursor-pointer'>
        <Link href={"/autocad"}>
        <h2 className='font-bold text-2xl'>AutoCAD Design & Drafting Services</h2>
        <p className='text-lg font-medium text-justify'>Auto CAD is the specialty of the ultra-sophisticated 2D&3D model that is tailored to architectural blueprints and mechanical designs.</p></Link>
        </div>

        <div className='w-full md:w-1/3 hover:scale-95 md:hover:scale-110 space-y-0 md:space-y-4  
        border-2 border-yellow-500 rounded-xl hover:bg-gray-800 hover:text-white p-6 cursor-pointer'>
        <Link href={"/cfd"}>
        <h2 className='font-bold text-2xl'>CFD Simulation & Analysis Services</h2>
        <p className='text-lg font-medium text-justify'>CFD simulations for enhanced fluid flow and heat transfer with performance analysis concerning velocity, pressure, and turbulence in automotive.</p></Link>
        </div>
      </div>
    </>
  )
}

export default ServiceCards
