"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Header";
import Footer from "./Footer";

const CFD = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header />
      <div className="w-full mt-10 gap-6 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">
          CFD Simulation & Analysis Services
        </h1>
        <Image
          src={"/images/cfd3.png"}
          alt="CFD"
          width={100}
          height={100}
          className="w-96"
          data-aos="fade-up" data-aos-duration="1200"
        />
        <p className="p-10 space-y-4" data-aos="fade-down" data-aos-duration="1200">
          At IngenioCraft, we specialize in Computational Fluid Dynamics (CFD)
          simulations, providing cutting-edge solutions for fluid flow, heat
          transfer, and aerodynamic analysis. Our CFD experts help businesses
          optimize product performance, reduce energy consumption, and enhance
          efficiency across various industries, including automotive, aerospace,
          HVAC, and industrial processes.
          <br />
          <br />
          <strong className="text-2xl font-bold">Our CFD Services</strong>
          <br />
          <br />
          <strong className="text-xl font-bold">
            1. Fluid Flow & Aerodynamics Analysis
          </strong>
          <br />
          Understanding fluid behavior is critical for optimizing designs in
          automotive, aerospace, and industrial machinery. Our CFD simulations
          help improve aerodynamics, reduce drag, and enhance fluid flow
          efficiency.
          <br />
          <br />
          <strong>External & internal flow simulations</strong>
          <br />
          <br />
          <strong>Drag & lift analysis for vehicles & aircraft</strong>
          <br />
          <br />
          <strong>Wind load & ventilation system optimization</strong>
          <br />
          <br />
          <strong>Pipe & duct flow analysis for industrial processes</strong>
          <br />
          <br />
          <br />
          <strong className="text-xl font-bold">
            2. Heat Transfer & Thermal Analysis
          </strong>
          <br />
          <br />
          We offer advanced heat transfer simulations to analyze and optimize
          cooling systems, thermal management, and heat exchanger performance in
          various industries.
          <br /> <br />
          <strong>Conduction, convection, and radiation analysis</strong>
          <br />
          <br />
          <strong>Electronics cooling & PCB thermal management</strong>
          <br />
          <br />
          <strong>Heat exchanger performance evaluation</strong>
          <br />
          <br />
          <strong>HVAC system efficiency improvement</strong>
          <br />
          <br />
          <br />
          <strong className="text-xl font-bold">
            3. Multiphase & Turbulence Modeling
          </strong>
          <br />
          <br />
          Our expertise in multiphase flow simulations allows us to analyze
          liquid-gas interactions, cavitation, and spray dynamics for industrial
          and chemical processing applications.
          <br /> <br />
          <strong>Turbulence modeling (RANS, LES, DNS)</strong>
          <br />
          <br />
          <strong>Liquid-gas interaction & multiphase flow analysis</strong>
          <br />
          <br />
          <strong>Combustion & chemical reaction simulations</strong>
          <br />
          <br />
          <strong>Particle tracking & dispersion analysis</strong>
          <br />
          <br />
          <br />
          <strong className="text-xl font-bold">
            3. CFD Optimization & Performance Improvement
          </strong>
          <br />
          <br />
          We use CFD-driven design optimization to help businesses achieve
          better performance, energy efficiency, and reduced operational costs
          by refining their designs through iterative simulations.
          <br /> <br />
          <strong>Design optimization for efficiency & performance</strong>
          <br />
          <br />
          <strong>Parametric studies & sensitivity analysis</strong>
          <br />
          <br />
          <strong>Computational mesh refinement & accuracy improvement</strong>
          <br />
          <br />
          <strong>Custom CFD solutions tailored to project needs</strong>
          <br />
          <br />
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
  );
};

export default CFD;
