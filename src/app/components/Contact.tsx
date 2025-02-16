"use client"
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Contact = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <>
      <h1 data-aos="fade-down" data-aos-duration="1200" className='text-5xl font-bold text-center mt-10'>Contact US</h1>
      <form name="contact" method="POST" data-netlify="true" data-aos="fade-up" data-aos-duration="1200"  data-netlify-honeypot="bot-field"
    className="w-full flex flex-col justify-center items-center mt-4 gap-6">
        <input type="hidden" name="form-name" value="contact" />

        <div className="hidden">
            <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
        </div>
        <div className="w-1/2 flex gap-4">
            <div className="w-1/2 flex flex-col gap-4">
                <label htmlFor="name">Full Name*</label>
                <input type="text" name="name" id="name"  placeholder="Enter Your Full Name" className="border-black border-2 rounded p-2"
                    required />
            </div>
            <div className="w-1/2 flex flex-col gap-4">
                <label htmlFor="email">Email*</label>
                <input type="email" name="email" id="email"  placeholder="Enter Your Email Address" className="border-black border-2 rounded p-2"
                    required />
            </div>
        </div>
        <div className="w-1/2 gap-4">
            <div className="w-full flex flex-col gap-4">
                <label htmlFor="message">Submit Your Message*</label>
                <textarea name="message" id="message" cols={8} rows={5} 
                placeholder="Enter Your Message" required className='w-full 
                rounded p-2 border-2 border-black' />
            </div>
        </div>
        <button type="submit"
            className="w-1/2 bg-blue-600 text-lg text-white 
            hover:bg-blue-800 focus:bg-blue-400 focus:text-black p-3 rounded-md">Contact Us</button>
    </form>
    </>
  )
}

export default Contact
