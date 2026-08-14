import React from 'react'
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import assets from '../assets/assets';
const achievements = [
  "Conducted, led, and coordinated research that significantly influenced health policies and programmes, with the potential to save over 10 lakh lives annually.",

  "Contributed to major innovations in newborn and child health, including zinc therapy for diarrhoea, early initiation and exclusive breastfeeding, outpatient management of severe neonatal infections, and Kangaroo Mother Care in intensive care units.",

  "Led the formulation of evidence-based global policy guidelines for maternal, newborn, child, and adolescent health over the past 20 years.",

  "Strengthened research capacity across 50+ institutions in 20 countries through hands-on support in proposal development, implementation, data analysis, and interpretation of research findings."
];
const Secretary = () => {
  return (
    <>
    <nav className="breadcrumb-banner relative overflow-hidden">
     <div className="container mx-auto px-5 lg:px-8 py-8 lg:py-14">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <div>
            <h1 className="text-2xl lg:text-4xl font-medium text-white">
              Secretary <span className="font-medium">Department of Health Research</span>
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
                Secretary
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
    
    <section className="bg-slate-50 py-16">
  <div className="container mx-auto px-5 lg:px-8">

    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 p-6 lg:p-12">
        <div className="flex flex-col lg:flex-row items-center gap-8">

          {/* Profile Image */}
          <div className="w-60 h-60 rounded-full overflow-hidden border-8 border-white shadow-2xl flex-shrink-0">
            <img
              src={assets.DrRajvie}
              alt="Secretary"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Profile Info */}
          <div className="text-center lg:text-left text-white flex justify-between w-full items-start">
            <div>
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
              Secretary
            </span>

            <h1 className="text-4xl lg:text-4xl font-medium mt-4">
              Dr Rajiv Bahl
            </h1>

            <p className="text-xl text-blue-100 mt-3">
              Secretary, Department of Health Research
            </p>

            <p className="text-blue-200 mt-2">
              Ministry of Health & Family Welfare, Government of India
            </p>
          </div>
            <div className="lg:flex flex-wrap justify-center lg:justify-start gap-4 mt-6 hidden">
              <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl">
                <h3 className="font-bold text-2xl">30+</h3>
                <p className="text-sm">Years Experience</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl">
                <h3 className="font-bold text-2xl">50+</h3>
                <p className="text-sm">Institutions</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl">
                <h3 className="font-bold text-2xl">20+</h3>
                <p className="text-sm">Countries</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Content */}
      <div className="grid lg:grid-cols-3 gap-8 p-8 lg:p-12">

        {/* Left Side */}
        <div className="space-y-6 hidden lg:flex flex-col">

          <div className="bg-slate-50 rounded-2xl p-6">
            <h3 className="font-bold text-xl text-blue-900 mb-4">
              Education
            </h3>

            <ul className="space-y-3 text-slate-600">
              <li>MD Pediatrics</li>
              <li>PhD Public Health</li>
              <li>Honorary Doctorate, Norway</li>
            </ul>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6">
            <h3 className="font-bold text-xl text-blue-900 mb-4">
              Expertise
            </h3>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-2 bg-blue-100 text-blue-800 rounded-full text-sm">
                Public Health
              </span>

              <span className="px-3 py-2 bg-blue-100 text-blue-800 rounded-full text-sm">
                Pediatrics
              </span>

              <span className="px-3 py-2 bg-blue-100 text-blue-800 rounded-full text-sm">
                Research Policy
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <p className="text-slate-600 leading-8 mb-2">
           Dr Rajiv Bahl, Secretary, Department of Health Research, (Ministry of Health & Family Welfare), Government of India and Director General, Indian Council of Medical Research (ICMR).
          </p>
          <p className="text-slate-600 leading-8 mb-2">
            Dr Rajiv Bahl is a physician-scientist, with specialization in paediatrics (MD Pediatrics: University of Delhi) and public health (PhD: All India Institute of Medical Sciences). He has also received an Honorary Doctorate from University of Bergen, Norway, in 2022 in recognition of his contributions to maternal and child health research. He has 30 years of experienceleading health research and translating research to public health policyboth in India and at a global level.
          </p>
          <p className="text-slate-600 leading-8 mb-2">Dr Bahl has been the Head of Research on Maternal, Newborn, Child and Adolescent Health at the World Health Organization (WHO), Geneva (2013-22). Prior to that, he was responsible for Newborn and Child Health research at WHO (2003-2012) and was a Scientist in the ICMR Advanced Centre for Diarrheal Disease and Nutrition Research at All India Institute of Medical Sciences 1994-2002.</p>

          <div className="border-l-4 border-blue-700 pl-6 space-y-8">

            <div>
              <h3 className="font-bold text-xl text-slate-900">
                Major Achievements
              </h3>
              <div className="mt-8">
              <ul className="space-y-5">
                {achievements.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl hover:shadow-md transition-all"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-800 text-white flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>

                    <p className="text-slate-700 leading-7">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            </div>

          </div>

        </div>

      </div>
    </div>

  </div>
</section>
    </>
  )
}

export default Secretary