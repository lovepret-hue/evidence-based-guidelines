import React from 'react'
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import assets from '../assets/assets';
import { FaEyeLowVision } from "react-icons/fa6";
import { SiTransmission } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
gsap.registerPlugin(ScrollTrigger);
const AboutHtain = () => {
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
    "Centre for Evidence Based Guidelines";
  return (
    <section>
      <nav className="breadcrumb-banner relative overflow-hidden">
        <div className="container mx-auto px-5 lg:px-8 py-8 lg:py-14">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
                <h1 className="text-2xl lg:text-4xl font-medium text-white">
                Gallery <span className="font-medium">Meadia</span>
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
      <div className="container mx-auto px-5 lg:px-8 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] xl:gap-12">
          <div className="overflow-hidden rounded-2xl order-2 md:order-1">
            <img
              src={assets.aboutGuidLine}
              alt="About Us"
              className="w-full max-w-md mx-auto object-cover rounded-2xl border border-gray-200 shadow-lg p-5"
            />
          </div>

          <div className='order-1 md:order-2'>
            <h2
              ref={titleRef}
              className="text-2xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-3 xl:mb-6 leading-tight overflow-hidden"
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

            <p className="text-gray-600 leading-8 mb-6 text-justify">
             The development of evidence-based guidelines is crucial for enhancing healthcare quality, optimizing treatment strategies, and ensuring the efficient use of resources. Globally, organizations like the World Health Organization (WHO) continuously refine these guidelines through rigorous research and expert consensus. In India, the need for such guidelines is particularly pressing due to diverse healthcare challenges, regional disparities, and resource limitations. The fragmented nature of guideline development, along with the absence of a centralized authority, has impacted the uniformity and scientific rigor of clinical standards. The National Health Policy 2017 emphasized the importance of standardized, evidence-based guidelines applicable to both public and private healthcare sectors. The Department of Health Research (DHR) under the Department of Health and Family Welfare (DoHFW) initiated the Centre for Evidence-Based Guidelines (CEG) in February 2023. The CEG is mandated to systematically review available evidence, apply the GRADE methodology, and develop robust guidelines. It also engages in training sessions and workshops to enhance expertise in systematic reviews and evidence synthesis. In September 2024, the Centre launched 27 Technical Resource Centers (TRCs). Five specialized research hubs were also established to promote interdisciplinary collaboration and evidence-based decision-making.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {/* Vision Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
                <FaEyeLowVision className='text-4xl'/>
              </div>
              <h3 className="text-2xl text-gray-800">Vision</h3>
            </div>

            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-blue-600 mt-1">✓</span>
                <span className="text-gray-600">
                  To improve healthcare quality in India.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-blue-600 mt-1">✓</span>
                <span className="text-gray-600">
                  To lead efforts in gathering and coordinating healthcare research.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-blue-600 mt-1">✓</span>
                <span className="text-gray-600">
                  To make scientifically backed guidelines accessible to healthcare
                  professionals.
                </span>
              </li>
            </ul>
          </div>

          {/* Mission Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
               <SiTransmission className='text-4xl'/>
              </div>
              <h3 className="text-2xl text-gray-800">Mission</h3>
            </div>

            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-green-600 mt-1">✓</span>
                <span className="text-gray-600">
                  The Centre is committed to coordinating the development of
                  evidence-based guidelines that reflect the best available scientific
                  research.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-green-600 mt-1">✓</span>
                <span className="text-gray-600">
                  It aims to ensure these guidelines are aligned with national health
                  priorities and India’s specific healthcare needs.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-green-600 mt-1">✓</span>
                <span className="text-gray-600">
                  It seeks collaboration with DoHFW, NHSRC, ICMR, and other health
                  agencies.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHtain