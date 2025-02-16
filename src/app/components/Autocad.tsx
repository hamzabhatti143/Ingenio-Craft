"use client"
import React, { useEffect } from 'react'
import Image from "next/image"
import Link from "next/link"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './Header';
import Footer from './Footer';

const Autocad = () => {
    useEffect(() => {
        AOS.init();
    }, []);
  return (
    <>
      <Header />
      <div className='w-full mt-10 gap-6 flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-bold'>AutoCAD Design & Drafting Services</h1>
        <Image src={"/images/autocad3.webp"} data-aos="fade-up" data-aos-duration="1200" alt='AutoCAD' width={100} height={100} className='w-96'/>
        <p className='p-10 space-y-4' data-aos="fade-down" data-aos-duration="1200">
        At IngenioCraft, we provide high-quality AutoCAD design and drafting solutions to help businesses and industries create precise, optimized, and industry-compliant engineering designs. Our team of experts specializes in 2D drafting and 3D modeling, ensuring that your projects are developed with accuracy and efficiency.
        
        <br /><br /><strong className='text-2xl font-bold'>Our AutoCAD Services</strong>
        <br /><br /><strong className='text-xl font-bold'>1. 2D CAD Drafting Services
        </strong>
        <br />
        We offer detailed 2D technical drawings for architectural, mechanical, electrical, and civil engineering projects. Our AutoCAD drafting ensures that every design follows industry standards and specifications, helping you streamline production and construction processes.<br /><br />
        
        <strong>Architectural blueprints & floor plans</strong><br /><br />
        <strong>Mechanical part & assembly drawings</strong><br /><br />
        <strong>Electrical & HVAC system layouts</strong><br /><br />
        <strong>Piping & plumbing diagrams</strong><br /><br />


        <br /><strong className='text-xl font-bold'>2. 3D Modeling & Rendering</strong>
        <br /><br />
        Our 3D CAD modeling services help businesses visualize and refine their designs before production. Whether you are working on product design, industrial machinery, or construction projects, we provide realistic 3D models with precise dimensions and material specifications. <br /> <br />
        
        <strong>Solid & surface modeling for complex designs</strong><br /><br />
        <strong>3D visualization & photorealistic rendering</strong><br /><br />
        <strong>Walkthroughs & animations for architectural projects</strong><br /><br />
        <strong>Parametric modeling for design optimization</strong><br /><br />

        <br /><strong className='text-xl font-bold'>3. CAD Conversion & Optimization</strong>
        <br /><br />
        We specialize in converting hand-drawn sketches, PDFs, and outdated CAD files into modern, editable AutoCAD formats to ensure your designs remain accurate and up to date.

 <br /> <br />
        
        <strong>Paper to CAD conversion</strong><br /><br />
        <strong>PDF to DWG/DXF transformation</strong><br /><br />
        <strong>Legacy CAD file updates & optimization</strong><br /><br />
        <strong>Standardization & compliance adjustments</strong><br /><br />
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

export default Autocad
