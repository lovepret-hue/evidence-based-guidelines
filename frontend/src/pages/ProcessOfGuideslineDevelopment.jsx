import React from 'react'
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import assets from '../assets/assets';

gsap.registerPlugin(ScrollTrigger);
const ProcessOfGuideslineDevelopment = () => {
     const titleRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".word",
        {
          yPercent: 100,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.08,
          ease: "power4.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    }, titleRef);

    return () => ctx.revert();
  }, []);

  const headingText =
    " The Overall Process of Guideline Development";
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
         <div className='grid grid-cols-1'>
                <div className='text-center'>
                    <h2
                    ref={titleRef}
                    className="text-2xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight overflow-hidden"
                    >
                    {headingText.split(" ").map((word, index) => (
                        <span
                        key={index}
                        className="word inline-block mr-2"
                        >
                        {word}
                        </span>
                    ))}
                </h2>
          </div>
            <div className='flex justify-center items-center'>
                <img src={assets.process} alt='Process' />
            </div>
         </div>
      </div>
      
    </section>
  )
}

export default ProcessOfGuideslineDevelopment