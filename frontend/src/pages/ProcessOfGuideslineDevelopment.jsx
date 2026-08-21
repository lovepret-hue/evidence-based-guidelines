import React from 'react'
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import assets from '../assets/assets';

const ProcessOfGuideslineDevelopment = () => {
 
  return (
    <section>
    
   <nav className="breadcrumb-banner relative overflow-hidden">
      <div className="container mx-auto px-6 py-6 lg:py-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <div>
            <h1 className="text-2xl lg:text-4xl font-medium text-white">
                 Process of Guideline  <span className="font-medium"> Development </span>
            </h1>

            <div className="flex items-center gap-3 mt-4 text-sm">
            <a
                href="/"
                className="text-gray-300 font-medium hover:text-blue-300 transition"
            >
                Home
            </a>

            <span className="text-slate-400">&gt;</span>

            <span className="text-white">
                 Process of Guideline Development
            </span>
            </div>
        </div>

          <div className="flex-grow-0 xl:flex items-center gap-5 bg-violet-500 px-6 py-3 rounded-full shadow-lg hidden">
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
  
      <div className='container mx-auto py-10'>
         <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

            {/* Overall Process */}
            <div className="group">
              <div className="h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                {/* Header */}
                <div className="relative border-b border-slate-100 bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-5">
                  <div className="absolute left-0 top-0 h-full w-1 bg-blue-600 rounded-r-full"></div>

                  <span className="mb-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700">
                    Process
                  </span>

                  <h3 className="text-xl md:text-2xl font-bold text-slate-800">
                    The Overall Process of Guideline Development
                  </h3>
                </div>

                {/* Image */}
                <div className="p-5 md:p-6">
                  <div className="flex min-h-[280px] items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-3">
                    <img
                      src={assets.process}
                      alt="The Overall Process of Guideline Development"
                      className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>

              </div>
            </div>


            {/* Standard Operating Procedures */}
            <div className="group">
              <div className="h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                {/* Header */}
                <div className="relative border-b border-slate-100 bg-gradient-to-r from-emerald-50 to-teal-50 px-6 py-5">
                  <div className="absolute left-0 top-0 h-full w-1 bg-emerald-600 rounded-r-full"></div>

                  <span className="mb-2 inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700">
                    Guidelines
                  </span>

                  <h3 className="text-xl md:text-2xl font-bold text-slate-800">
                    Standard Operating Procedures
                  </h3>
                </div>

                {/* Image */}
                <div className="p-5 md:p-6">
                  <div className="flex min-h-[280px] items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-3">
                    <a href='https://www.dhr.gov.in/static/uploads/2026/07/b784d8cf04e325808a3ed07dccfa1b8a.pdf' target='_blank'>
                        <img
                        src={assets.guidelines}
                        alt="Standard Operating Procedures"
                        className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>
      </div>
      
    </section>
  )
}

export default ProcessOfGuideslineDevelopment