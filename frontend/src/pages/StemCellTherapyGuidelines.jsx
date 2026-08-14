import React from 'react'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import assets from '../assets/assets';
import { FaRegFilePdf } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
const documents = [
  {
    title:
      "LIST OF MOHFW APPROVED DISEASE CONDITIONS FOR STEM CELL THERAPY AS STANDARD CARE",
    file: "https://www.dhr.gov.in/static/uploads/2026/03/680590b2d3ba48a79d424af5ab4ecb36.pdf",
  },
   {
    title:
      "Evidence-based Guidelines for the use of Stem Cell Therapy Hepatology : Guideline",
    file: "https://www.dhr.gov.in/static/uploads/2026/05/1ca299d1df7d22e532d0097c2bccb2b7.pdf",
  },
   {
    title:
      "Evidence-based Guidelines for the use of Stem Cell Therapy Hepatology:Supplement",
    file: "https://www.dhr.gov.in/static/uploads/2026/05/c25adf36630bc1227bebb176229f49f9.pdf",
  },
   {
    title:
      "Evidence-based Guidelines for the use of Stem Cell Therapy Dermatology : Supplement",
    file: "https://www.dhr.gov.in/static/uploads/2026/05/a8aac077675b61252beabf36077bd68f.pdf",
  },
   {
    title:
      "Evidence-based Guidelines for the use of Stem Cell Therapy in Neurological Conditions : Guidelines",
    file: "https://www.dhr.gov.in/static/uploads/2025/10/355b89fdd4ba243d46a101fb8548d79c.pdf",
  },
   {
    title:
      "Evidence-based Guidelines for the use of Stem Cell Therapy in Neurological Conditions : Supplement",
    file: "https://www.dhr.gov.in/static/uploads/2025/10/2b7ba4bb462f328b53fe59d4645e546e.pdf",
  },
   {
    title:
      "Evidence-based Guidelines for the use of Stem Cell Therapy in Orthopedic Conditions : Guidelines",
    file: "https://www.dhr.gov.in/static/uploads/2025/10/a46a0495152555adb6058679b055acbf.pdf",
  },
   {
    title:
      "Evidence-based Guidelines for the use of Stem Cell Therapy in Orthopedic Conditions : Supplement",
    file: "https://www.dhr.gov.in/static/uploads/2025/10/3b3ffcb719d45fac5279c80d5cc16744.pdf",
  },
   {
    title:
      "Evidence-based Guidelines for the use of Stem Cell Therapy in Pediatric Conditions : Guidelines",
    file: "https://www.dhr.gov.in/static/uploads/2025/10/8f27eec2662b19eded8c1ad93cd6709c.pdf",
  },
   {
    title:
      "Evidence-based Guidelines for the use of Stem Cell Therapy in Pediatric Conditions : Supplement",
    file: "https://www.dhr.gov.in/static/uploads/2025/10/86fe66b6a8c389ac95766f56d43f3ba7.pdf",
  },
   {
    title:
      "Evidence-based Guidelines for the use of Stem Cell Therapy in Cardiac Conditions : Guidelines",
    file: "https://www.dhr.gov.in/static/uploads/2025/10/5af130d2d84a23b59841e50d3d06e285.pdf",
  },
    {
    title:
      "Evidence-based Guidelines for the use of Stem Cell Therapy in Cardiac Conditions : Supplement",
    file: "https://www.dhr.gov.in/static/uploads/2025/10/09ffcb91a6a2c94b8f30e457eebeca89.pdf",
  },
    {
    title:
      "Evidence-based Guidelines for the use of Stem Cell Therapy in Endocrinological Conditions : Guidelines",
    file: "https://www.dhr.gov.in/static/uploads/2026/02/491b198dd15cff8a1466389f75a8ee0d.pdf",
  },
    {
    title:
      "Evidence-based Guidelines for the use of Stem Cell Therapy in Endocrinological Conditions : Supplement",
    file: "https://www.dhr.gov.in/static/uploads/2026/02/12e19c948caaacd1dd2733e0e07a2ac5.pdf",
  },
   {
    title:
      "Evidence-based Guidelines for the use of Stem Cell Therapy in Respiratory Conditions : Guidelines",
    file: "https://www.dhr.gov.in/static/uploads/2026/02/3092bb0eb21e76da98761d66a6923cf9.pdf",
  },
   {
    title:
      "Evidence-based Guidelines for the use of Stem Cell Therapy in Respiratory Conditions : Supplement",
    file: "https://www.dhr.gov.in/static/uploads/2026/02/5ac9201db527199edd15038fd38f3d31.pdf",
  },

];
const StemCellTherapyGuidelines = () => {
     const titleRef = useRef(null);

  useEffect(() => {
    const split = new SplitType(titleRef.current, {
      types: "words, chars",
    });

    gsap.from(split.chars, {
      opacity: 0,
      y: 80,
      rotateX: -90,
      stagger: 0.03,
      duration: 1,
      ease: "back.out(1.7)",
    });

    return () => split.revert();
  }, []);
  return (
    <>
    
      <nav className="breadcrumb-banner relative overflow-hidden">
        <div className="container mx-auto px-6 py-6 lg:py-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
              <h1 className="text-2xl lg:text-4xl font-medium text-white">
                    Stem Cell Therapy   <span className="font-medium"> Guidelines </span>
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
                   Stem Cell Therapy Guidelines
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
      <div className='py-16'>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12 gap-8 items-center">
            
            {/* 5 Columns */}
            <div className="col-span-12 lg:col-span-5">
              <img
                src={assets.indiaMap}
                alt="India Map"
                className="w-full h-auto object-contain border border-gray-100 p-4 rounded-md"
              />
            </div>

            {/* 7 Columns */}
            <div className="col-span-12 lg:col-span-7">
              <h1
                ref={titleRef}
                className="text-2xl md:text-3xl lg:text-4xl tracking-wide"
              >
                Release of evidence-based guidelines for
                <br className="hidden md:block" />
                the use of STEM cell therapy
              </h1>

              <p className="mt-6 text-gray-600 leading-relaxed">
              The Evidence based guidelines for the use of stem cell therapy in Neurological, Orthopedic, Pediatric and Cardiac disease conditions have been updated by adding a subgroup analysis based on the level of manipulation of stem cells in the included studies. In view of the update, the previous guidelines in the above four conditions stand null and void. The level of manipulation done to develop stem cell and stem cell derived products was interpreted by DHR secretariat into less than or more than minimal manipulation as defined by CDSCO (Annexed in guidelines) and the information provided in the trial itself.
              </p>
            </div>

          </div>
        </div>
      
        <div className='container mx-auto py-10'>
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="hidden md:table-header-group">
                    <tr className="bg-slate-100">
                      <th className="px-6 py-4 text-left font-semibold text-slate-700">
                        Document Name
                      </th>
                      <th className="px-6 py-4 text-center font-semibold text-slate-700">
                        View
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {documents.map((doc, index) => (
                      <tr
                        key={index}
                        className="
                          block border-b p-4 md:table-row md:p-0
                          hover:bg-blue-50 transition
                        "
                      >
                        <td
                          className="
                            block pb-3 md:table-cell
                            md:px-6 md:py-5
                            font-medium text-slate-800
                          "
                        >
                          <span className="mb-1 block text-xs font-semibold uppercase text-slate-500 md:hidden">
                            Document Name
                          </span>
                          {doc.title}
                        </td>

                        <td
                          className="
                            block md:table-cell
                            md:px-6 md:py-5
                            md:text-center
                          "
                        >
                          <span className="mb-2 block text-xs font-semibold uppercase text-slate-500 md:hidden">
                            Action
                          </span>

                          <a
                            href={doc.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                              inline-flex w-full items-center justify-center gap-2
                              rounded-lg bg-blue-700 px-4 py-3
                              text-sm font-medium text-white
                              transition hover:bg-blue-800
                              md:w-auto
                            "
                          >
                            <FaRegFilePdf className="text-xl" />
                            <span>View PDF</span>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default StemCellTherapyGuidelines