import React from 'react'
import Header from '../components/Header'

const page = () => {
  return (
    <>
    <Header />
      <h1 className='text-5xl font-bold text-center mt-10'>Submit Your Project</h1>
      <form name="projectSubmission" method="POST" data-netlify="true"  data-netlify-honeypot="bot-field"
    className="w-full flex flex-col justify-center items-center h-screen gap-6">
        <input type="hidden" name="form-name" value="projectSubmission" />

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
                <input type="tel" name="number" id="number" placeholder="Enter Your Number" className="border-black border-2 rounded p-2" required />
            </div>
        </div>

        <div className="w-1/2 gap-4">
            <div className="w-1/2 flex flex-col gap-4">
                <label htmlFor="projectname">Project Name*</label>
                <input type="text" name="projectname" id="projectname" placeholder="Enter Your Project Name" className="border-black border-2 rounded p-2"
                    required />
            </div>
        </div>
        <div className="w-1/2 gap-4">
            <div className="w-full flex flex-col gap-4">
                <label htmlFor="message">Project Details*</label>
                <p className="text-gray-500">Create a shareable drive link where you put all your project details and images
                    which you want</p>
                <input type="url" name="message" id="message" placeholder="Paste Your Project Description Link: "
                    className="border-black border-2 rounded p-2" required />
            </div>
        </div>
        <button type="submit"
            className="w-1/2 bg-blue-600 text-lg text-white hover:bg-blue-800 focus:bg-blue-400 focus:text-black p-3 rounded-md">Submit
            your Project</button>
    </form>
    </>
  )
}

export default page
