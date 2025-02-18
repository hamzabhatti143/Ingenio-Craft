import React from 'react'
import Header from '../components/Header'
import Footer from "../components/Footer";
import Head from 'next/head';
const page = () => {
  return (
    <>
<Head>
        <title>Contact Us</title>
        <meta name="description" content="we deliver top-tier engineering solutions" />
      </Head>
    <Header />
    <h1 className='text-5xl font-bold text-center mt-10'>Contact US</h1>
      <form name="contact" method="POST" data-netlify="true"  data-netlify-honeypot="bot-field"
    className="w-full flex flex-col justify-center items-center h-screen gap-6">
        <input type="hidden" name="form-name" value="contact" />

        <div className="hidden">
            <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
        </div>
        <div className="w-1/2 flex gap-4">
            <div className="w-1/2 flex flex-col gap-4">
                <label htmlFor="firstname">First Name*</label>
                <input type="text" name="firstname" id="firstname"  placeholder="Enter Your First Name" className="border-black border-2 rounded p-2"
                    required />
            </div>
            <div className="w-1/2 flex flex-col gap-4">
                <label htmlFor="lastname">Last Name*</label>
                <input type="text" name="lastname" id="lastname"  placeholder="Enter Your Last Name" className="border-black border-2 rounded p-2"
                    required />
            </div>
        </div>
        <div className="w-1/2 flex gap-4">
            <div className="w-1/2 flex flex-col gap-4">
                <label htmlFor="email">Email*</label>
                <input type="email" name="email" id="email"  placeholder="Enter Your Email Address" className="border-black border-2 rounded p-2"
                    required />
            </div>
            <div className="w-1/2 flex flex-col gap-4">
                <label htmlFor="number">Phone Number*</label>
                <input type="tel" name="number" id="number" 
                placeholder="Enter Your Number" className="border-black border-2 rounded p-2" required />
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
    <Footer />
    </>
  )
}

export default page
