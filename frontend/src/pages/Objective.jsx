import React from 'react'
import assets from '../assets/assets'
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const objectives = [
  "To undertake HTA studies aiming at maximizing health in the population, reducing out of pocket expenditure (OOP) and reducing inequity.",
  "To support the process of decision-making in health care at the Central and State policy level by providing reliable information based on scientific evidence.",
  "Develop systems and mechanisms to assess new and existing health technologies by transparent and inclusive processes.",
  "To appraise health interventions and technologies based on available data on resource use, cost, clinical effectiveness, and safety.",
  "To collect and analyse evidence in a systematic and reproducible way and ensure its accessibility and usefulness to inform health policy.",
  "Disseminate research findings and resulting policy decisions to educate and empower the public to make better informed decisions for health.",
];
gsap.registerPlugin(ScrollTrigger);
const Objective = () => {
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
          " Objectives";
  return (
    <>
    <nav className="breadcrumb-banner relative overflow-hidden">
     <div className="container mx-auto px-5 lg:px-8 py-8 lg:py-14">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <div>
            <h1 className="text-2xl lg:text-4xl font-medium text-white">
              Mandate / <span className="font-medium">Objectives</span>
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
                Objectives
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
  
     <section className="bg-slate-50 py-14">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-12 text-center">
        
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
          <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-blue-600"></div>

          <div className='pt-9'>
            <p>The Centre for Evidence-Based Guidelines develops evidence-based clinical and public health guidelines to support informed decision-making and improved health outcomes. Through rigorous evidence synthesis, systematic reviews, and meta-analyses aligned with national healthcare priorities, the Centre provides standardized recommendations that enhance the quality, consistency, and effectiveness of healthcare delivery.</p>
          </div>
        </div>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <img
              src={assets.submission}
              alt="Objectives"
              className="h-[400px] xl:h-[540px] w-full rounded-2xl object-cover shadow-xl border p-3"
            />
          </div>

          {/* Content */}
          <div>
           
            <ul className="space-y-5">
              {objectives.map((item, index) => (
                <li key={index} className="flex gap-4">
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">
                    {index + 1}
                  </div>

                  <p className="leading-relaxed text-slate-700">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
      </>
  )
}

export default Objective