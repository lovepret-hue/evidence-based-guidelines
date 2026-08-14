import React from 'react'
import assets from '../assets/assets'
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const resourceHubs = [
"Department of Laboratory Medicine, Rajendra Institute of Medical Sciences, Ranchi, Jharkhand.",
"Department of Pediatric Surgery, All India Institute of Medical Sciences, New Delhi.",
"Department of Pharmacy Practices, National Institute of Pharmaceutical Education and Research (NIPER), Mohali, Punjab.",
"Department of Orthopedics, Postgraduate Institute of Medical Education and Research, Chandigarh.",
"Department of Pharmacology, All India Institute of Medical Sciences, Jodhpur, Rajasthan.",
"Department of Epidemiology and Clinical Research, Institute of Liver and Biliary Sciences, New Delhi.",
"Department of Pharmacology, All India Institute of Medical Sciences Gorakhpur, Uttar Pradesh.",
"Division of Medical Research, SRM Medical College Hospital and Research Centre, SRM Institute of Science and Technology, Kattankulathur, Tamil Nadu.",
"ICMR-Centre for Ageing and Mental Health, Kolkata, West Bengal.",
"Centre for Dental Education and Research, AIIMS, New Delhi.",
"ICMR-National Institute for Research in Tuberculosis, Chennai, Tamil Nadu.",
"Department of Infectious Diseases, Christian Medical College, Vellore, Tamil Nadu.",
"Department of Prosthodontics, King George’s Medical University, Lucknow, Uttar Pradesh.",
"Department of Pediatrics, All India Institute of Medical Sciences, Bhopal, Madhya Pradesh.",
"Department of Public Health, MS Ramaiah University of Applied Sciences, Karnataka.",
"Department of Biochemistry, All India Institute of Medical Sciences, Deoghar, Jharkhand.",
"Faculty of Nursing, Sri Ramachandra Institute of Higher Education and Research (Deemed to be University), Porur, Chennai, Tamil Nadu.",
"Department of Pediatric and Preventive Dentistry, Sri Ramchandra Institute of Higher Education and Research, Porur, Chennai, Tamil Nadu.",
"Department of Community Medicine, All Indian Institute of Medical Sciences, Nagpur, Maharashtra.",
"Department of Palliative Medicine and Supportive Care, KMC, MAHE, Manipal, Karnataka.",
"Department of Pharmacology, All India Institute of Medical Sciences, Guwahati, Assam.",
"Department of Ophthalmology, All India Institute of Medical Sciences, Guwahati, Assam.",
"School of Public Health, Postgraduate Institute of Medical Education and Research, Chandigarh, Punjab.",
"Department of Neonatology, Postgraduate Institute of Medical Education and Research, Chandigarh.",
"Department of Pharmacy Practice, Manipal College of Pharmaceutical Sciences, Karnataka.",
"Department of Public Health, Kalyan Singh Super Specialty Cancer Institute, Lucknow, Uttar Pradesh.",
"ICMR-National Institute for Research in Tuberculosis, Chennai, Tamil Nadu."
];
gsap.registerPlugin(ScrollTrigger);

const ResourceCenters = () => {
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
      "CGA Resource Centres (RRCs)";
  return (
    <>
    <section>
       <div className="w-full min-h-[280px] flex items-center justify-center relative overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: `url(${assets.htainBanner})` }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
              <h1 className="relative z-10 text-white text-4xl font-bold uppercase">
               Introduction
              </h1>
        </div>
    </section>
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50 py-16 lg:py-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-100 blur-3xl opacity-50"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
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
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {resourceHubs.map((hub, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                <svg
                  className="h-6 w-6 text-blue-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"
                  />
                </svg>
              </div>

              <p className="leading-relaxed text-slate-800">
                {hub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default ResourceCenters