import React from 'react'
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
const VideoSection = () => {
  return (
    <>
    <nav className="breadcrumb-banner relative overflow-hidden">
            <div className="container mx-auto px-5 lg:px-8 py-8 lg:py-14">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <div>
                    <h1 className="text-2xl lg:text-4xl font-medium text-white">
                    Video <span className="font-medium">Meadia</span>
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
                      Video
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
          <div className="bg-gray-100 flex items-center justify-center py-12 xl:py-16">
            <div className="container mx-auto px-5 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="aspect-video">
                    <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/8Z9c0JAGQSA?start=14"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    />
                </div>
                <div className="aspect-video">
                    <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/8Z9c0JAGQSA?start=14"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    />
                </div>
                <div className="aspect-video">
                    <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/8Z9c0JAGQSA?start=14"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    />
                </div>
                </div>
            </div>
        </div>
    </>
     
  )
}

export default VideoSection