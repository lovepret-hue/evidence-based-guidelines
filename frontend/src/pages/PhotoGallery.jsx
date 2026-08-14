import React from 'react'
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
const PhotoGallery = () => {
  const images = [
    {
      src:'https://www.dhr.gov.in/static/uploads/2026/05/fd81f0817245fd9b6ba8283b39e6eeaa.jpg',
      caption: "National Research Conference 2025 ",
      date:'14-07-2026'
    },
    {
      src: "https://dhr.gov.in/static/uploads/2026/05/7f2637d9029accdecc99d4ee4af7d8ec.jpg",
      caption: "Scientific Workshop Session",
       date:'14-07-2026'
    },
    {
      src: "https://dhr.gov.in/static/uploads/2026/05/60a2043767f5750afe947c51b11ef86a.jpg",
      caption: "Laboratory Research Activities",
      date:'14-07-2026'
    },
    {
      src: "https://dhr.gov.in/static/uploads/2026/05/82491bc520cdf84e05f1b8c63a2d974b.jpg",
      caption: "Annual Healthcare Summit",
      date:'14-07-2026'
    },
    {
      src: "https://dhr.gov.in/static/uploads/2026/05/a401b9e4ad59e42c0217cc6e7832e757.png",
      caption: "Medical Research Presentation",
      date:'14-07-2026'
    },
    {
      src: "https://dhr.gov.in/static/uploads/2026/05/8f9138e4fd8f9448c4af95b60b66569c.png",
      caption: "Innovation and Technology Meet",
      date:'14-07-2026'
    },
     {
      src: "https://dhr.gov.in/static/uploads/2026/05/8f9138e4fd8f9448c4af95b60b66569c.png",
      caption: "Innovation and Technology Meet",
      date:'14-07-2026'
    },
     {
      src: "https://dhr.gov.in/static/uploads/2026/05/8f9138e4fd8f9448c4af95b60b66569c.png",
      caption: "Innovation and Technology Meet",
      date:'14-07-2026'
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const openImage = (index) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedIndex(
      (prev) => (prev - 1 + images.length) % images.length
    );
  };

  return (
     <>
     <nav className="breadcrumb-banner relative overflow-hidden">
        <div className="container mx-auto px-5 lg:px-8 py-8 lg:py-14">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
                <h1 className="text-2xl lg:text-4xl font-medium text-white">
                 Gallery <span className="font-medium">Media</span>
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
                   Gallery
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
    
      <div className="mx-auto container py-16 px-4">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {images.map((image, index) => (
                <>
            <div
                key={index}
                onClick={() => openImage(index)}
                className="group relative cursor-pointer overflow-hidden rounded-xl shadow-md"
            >
                <div className='h-60 overflow-hidden'>
                    <img
                        src={image.src}
                        alt={image.caption}
                        className="h-60 w-full object-cover transition duration-300 group-hover:scale-110"
                    />
                </div>   
                <div className="bg-gray-200 p-4">
                    <p className="font-medium line-clamp-1" title={image.caption}>
                        {image.caption}
                    </p>
                  <span className='text-gray-800 p-1 font-medium rounded-md text-sm'> {image.date}</span>
                </div>
            </div>
            </>
            ))}
        </div>

      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <button
            onClick={closeModal}
            className="absolute right-6 top-6 rounded-full bg-white p-2 shadow-lg transition hover:scale-110"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 rounded-full bg-white/90 p-3 shadow-lg transition hover:bg-white"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>

          <div className="flex max-w-5xl flex-col items-center">
            <img
              src={images[selectedIndex].src}
              alt={images[selectedIndex].caption}
              className="h-[650px] max-w-full rounded-t-xl object-contain"
            />

            <div className="mt-0 w-full rounded-b-xl bg-blue-800 px-5 py-3 text-center text-white backdrop-blur-sm">
            <p className="font-medium">
                {images[selectedIndex].caption}
              </p>
            </div>

            <div className="mt-3 text-sm text-gray-300">
              {selectedIndex + 1} / {images.length}
            </div>
          </div>

          <button
            onClick={nextImage}
            className="absolute right-4 rounded-full bg-white/90 p-3 shadow-lg transition hover:bg-white"
          >
            <ChevronRight className="h-7 w-7" />
          </button>
        </div>
      )}
    </div>
    </>
  )
}

export default PhotoGallery