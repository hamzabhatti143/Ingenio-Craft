"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  return (
    <>
      <nav className="bg-gray-800 text-white p-4 w-full">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold w-1/4">SimCad</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex w-2/4 justify-around items-center">
            <Link href={"/"} className="hover:text-yellow-500">
              Home
            </Link>
            <Link href={"/about"} className="hover:text-yellow-500">
              About
            </Link>
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="hover:text-yellow-500 focus:outline-none flex items-center gap-1"
              >
                Services <IoIosArrowDown />
              </button>
              {isServicesOpen && (
                <div className="absolute bg-gray-700 rounded-lg mt-2 w-48 shadow-lg z-10">
                  <ul className="text-sm">
                    <li className="hover:bg-gray-600 px-4 py-2">
                      <Link href="/ansys">Ansys</Link>
                    </li>
                    <li className="hover:bg-gray-600 px-4 py-2">
                      <Link href="/autocad">AutoCAD</Link>
                    </li>
                    <li className="hover:bg-gray-600 px-4 py-2">
                      <Link href="/cfd">CFD</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <Link href={"/contact"} className="hover:text-yellow-500">
              Contact
            </Link>
          </div>
          <div className="w-1/4 hidden md:flex justify-end">
            <Link
              href={"/projectsubmission"}
              className="text-white  border-2 border-yellow-500 hover:bg-yellow-500 p-2 rounded-md"
            >
              <button>Get Your Project Quote</button>
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-700 rounded-lg mt-2 p-4">
            <ul className="space-y-4">
              <li>
                <Link href="/" className="hover:text-yellow-500 block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-yellow-500 block">
                  About
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="hover:text-yellow-500 w-full text-left focus:outline-none flex items-center gap-1"
                >
                  Services <IoIosArrowDown />
                </button>
                {isServicesOpen && (
                  <ul className="bg-gray-600 mt-2 rounded-lg space-y-2">
                    <li className="px-4 py-2 hover:bg-gray-500">
                      <Link href="/ansys">Ansys</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-500">
                      <Link href="/autocad">AutoCAD</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-500">
                      <Link href="/cfd">CFD</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link href="/contact" className="hover:text-yellow-500 block">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="w-full mt-4 ">
              <Link
                href={"/projectsubmission"}
                className="text-white  border-2 border-yellow-500 hover:bg-yellow-500 p-2 rounded-md"
              >
                <button>Get Your Project Quote</button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
