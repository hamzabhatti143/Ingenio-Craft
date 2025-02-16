import Header from "./components/Header";
import Link from "next/link"
import Image from "next/image"
import Servicecards from "./components/ServiceCards"
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
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
      <Image src={'/images/3in1.png'} alt="3 in 1" className="w-full block md:hidden" width={100} height={100}/>
    </div>

    <Servicecards />

    <About />

    <Contact />
    <Footer />
    </>
  );
}
