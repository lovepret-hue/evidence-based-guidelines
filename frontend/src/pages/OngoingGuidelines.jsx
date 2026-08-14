import React from 'react'
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
const OngoingGuidelines = () => {
  return (
    <>
    <nav className="breadcrumb-banner relative overflow-hidden">
        <div className="container mx-auto px-5 lg:px-8 py-8 lg:py-14">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
                <h1 className="text-2xl lg:text-4xl font-medium text-white">
                Gallery <span className="font-medium">Meadia</span>
                </h1>

                <div className="flex items-center gap-3 mt-4 text-sm">
                <a
                    href="/" className="text-gray-300 font-medium hover:text-blue-300 transition"
                >
                    Home
                </a>

                <span className="text-slate-400">&gt;</span>

                <span className="text-white">
                    About Us
                </span>
                </div>
            </div>

            <div className="flex-grow-0 lg:flex items-center gap-5 bg-violet-500 px-6 py-3 rounded-full shadow-lg hidden">
                <button className="text-white hover:scale-110 transition">
                    <BsTwitterX/>
                </button>

                <button className="text-white hover:scale-110 transition">
                <FaLinkedinIn/>
                </button>

                <button className="text-white hover:scale-110 transition">
                    <FaFacebookF/>
                </button>
                <button className="text-white hover:scale-110 transition">
                    <FaInstagram/>
                </button>
            </div>
        </div>
        </div>
    </nav>
    </>
  )
}

export default OngoingGuidelines
