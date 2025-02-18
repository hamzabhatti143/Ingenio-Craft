import Header from "./components/Header";
import Link from "next/link"
import Image from "next/image"
import Servicecards from "./components/ServiceCards"
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Head from "next/head";
export default function Home() {
  return (
    <>
     <Head>
        <title>SimCad</title>
        <meta name="description" content="we deliver top-tier engineering solutions" />
      </Head>
    <Header /> 
    <div className="bg-gray-800 h-auto md:h-[480px] flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 main text-white px-20 py-16">
      <h5 className="italic">What we Offer?</h5>
      <h2 className="text-4xl pt-6 pb-4">We Offer <span className="span text-yellow-500"></span> Service</h2>
      <p className="text-lg">Precision Engineering & Advanced Simulations for Your Projects. Optimize, Design, and Innovate with Our Expert Solutions.</p>
      <div className="mt-6">
            <Link
              href={""}
              className="text-white border-2 border-yellow-500 hover:bg-yellow-500 p-4 rounded-md"
            >
              <button>Get Your Project Quote</button>
            </Link>
          </div>
      </div>
      <div className="w-full md:w-2/4 image mr-0 md:mr-4 hidden md:block">
      </div>
      <div className="w-full flex items-center justify-center md:hidden">
      <Image src={'/images/3in1.png'} alt="3 in 1"  width={500} height={300}/>
      </div>
    </div>

    <Servicecards />

    <About />

    <Contact />
    <Footer />
    </>
  );
}
