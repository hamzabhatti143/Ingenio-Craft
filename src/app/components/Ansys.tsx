"use client"
import React, { useEffect } from 'react'
import Image from "next/image"
import Link from "next/link"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './Header';
import Footer from './Footer';
const Ansys = () => {
    useEffect(() => {
          AOS.init();
        }, []);
  return (
    <>
      <Header />
      <div className='w-full mt-10 gap-6 flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-bold'>Ansys Simulation Services</h1>
        <Image src={"/images/ansys3.jpg"} alt='Ansys' data-aos="fade-up" data-aos-duration="1200" width={100} height={100} className='w-96'/>
        <p className='p-10 space-y-4' data-aos="fade-down" data-aos-duration="1200">
        At IngenioCraft, we specialize in providing Ansys-based simulation solutions to 
        help businesses and industries achieve accurate, reliable, and efficient designs. 
        Our expertise in <strong>Finite Element Analysis (FEA) and Computational Fluid Dynamics (CFD)</strong> 
        allows us to analyze, optimize , and enhance the performance of complex engineering systems.
        
        <br /><br /><strong className='text-2xl font-bold'>Our Ansys Simulation Services</strong>
        <br /><br /><strong className='text-xl font-bold'>1. Finite Element Analysis (FEA) with Ansys</strong>
        <br />
            Our FEA solutions help identify stress points, deformation areas, 
            and material failures, ensuring your designs are structurally sound and 
            optimized for strength and durability. Whether you are working on mechanical c
            omponents, aerospace structures, or civil engineering projects, we provide precise 
            simulations to minimize risks and enhance product reliability. <br /><br />
        
        <strong>Structural analysis to detect weak points</strong><br /><br />
        <strong>Thermal analysis for heat distribution</strong><br /><br />
        <strong>Fatigue and durability assessments</strong><br /><br />
        <strong>Material optimization to reduce costs</strong><br /><br />


        <br /><strong className='text-xl font-bold'>2. Computational Fluid Dynamics (CFD) with Ansys</strong>
        <br /><br />
        Our CFD simulations help businesses improve fluid flow, heat transfer, and 
        aerodynamics by accurately predicting real-world behavior in industries like 
        automotive, HVAC, aerospace, and energy. <br /> <br />
        
        <strong>Velocity and pressure distribution analysis</strong><br /><br />
        <strong>Turbulence modeling for optimized designs</strong><br /><br />
        <strong>Aerodynamic and hydrodynamic performance improvements</strong><br /><br />
        <strong>Heat exchanger and cooling system simulations</strong><br /><br />

        <br /><strong className='text-xl font-bold'>3. Multiphysics Simulations</strong>
        <br /><br />
        We provide multiphysics analysis by combining different physical phenomena to enhance 
        product performance and efficiency. This includes fluid-structure interaction (FSI), 
        thermal-electrical simulations, and electromagnetic analysis to solve complex engineering 
        challenges. <br /> <br />
        
        <strong>Interaction between solid and fluid dynamics</strong><br /><br />
        <strong>Electrical and thermal conductivity simulations</strong><br /><br />
        <strong>Magnetohydrodynamics and heat dissipation studies</strong><br /><br />
        </p>
        <div className="w-1/4 flex justify-center">
            <Link
              href={"/projectsubmission"}
              className="text-black hover:text-white  border-2 border-yellow-500 hover:bg-yellow-500 p-2 rounded-md"
            >
              <button>Get Your Project Quote</button>
            </Link>
          </div>
      </div>
      <Footer />
    </>
  )
}

export default Ansys
