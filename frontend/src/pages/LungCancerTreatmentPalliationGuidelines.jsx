import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import assets from "../assets/assets";
import { FaRegFilePdf } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
gsap.registerPlugin(ScrollTrigger);

const documents = [
  {
    title:
      "Evidence-Based Guidelines for Lung Cancer Treatment – Guidelines (12 recommendations)",
    file: "https://www.dhr.gov.in/static/uploads/2026/03/63ecdd00678256437ad7a98b2691ca53.pdf",
  },
   {
    title:
      "Evidence-Based Guidelines for Lung Cancer Treatment – Supplement",
    file: "https://www.dhr.gov.in/static/uploads/2026/03/3a0ac88d4deb234a0fef6a32919c103b.pdf",
  },
   {
    title:
      "Evidence-Based Guidelines for Lung Cancer Palliation – Guidelines (3 recommendations)",
    file: "https://www.dhr.gov.in/static/uploads/2026/03/2da8377e5173dee05475edc47d1ca848.pdf",
  },
   {
    title:
      "Evidence-Based Guidelines for Lung Cancer Palliation – Supplement",
    file: "https://www.dhr.gov.in/static/uploads/2026/03/fa22c783abc718d1c9ae67f7787a30f9.pdf",
  },
  
];

const caregivers = [
 {
    title:
      "Treatment options for Early-stage non-small cell Lung Cancer",
    file: "https://www.dhr.gov.in/static/uploads/2026/03/63ecdd00678256437ad7a98b2691ca53.pdf",
  },
   {
    title:
      "Treatment options for Advanced-stage non-small cell Lung Cancer",
    file: "https://www.dhr.gov.in/static/uploads/2026/03/3a0ac88d4deb234a0fef6a32919c103b.pdf",
  },
   {
    title:
      "Treatment options for small cell lung cancer",
    file: "https://www.dhr.gov.in/static/uploads/2026/03/2da8377e5173dee05475edc47d1ca848.pdf",
  },
   {
    title:
      "Palliative care recommendations for patients with lung cancer",
    file: "https://www.dhr.gov.in/static/uploads/2026/03/fa22c783abc718d1c9ae67f7787a30f9.pdf",
  },
]
const LungCancerTreatmentPalliationGuidelines = () => {
     const titleRef = useRef(null);
    
     useEffect(() => {
        const splitText = new SplitType(titleRef.current, {
          types: "chars",
        });
    
        gsap.from(splitText.chars, {
          y: 80,
          opacity: 0,
          rotateX: -90,
          stagger: 0.05,
          duration: 0.8,
          ease: "power4.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
    
        return () => {
          splitText.revert();
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
      }, []);
  return (
    <>
      <nav className="breadcrumb-banner relative overflow-hidden">
        <div className="container mx-auto px-6 py-6 lg:py-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
              <h1 className="text-2xl lg:text-4xl font-medium text-white">
                   Lung Cancer Treatment & <span className="font-medium"> Palliation Guidelines </span>
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
                   Lung Cancer Treatment
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
   
    <section className="bg-white py-16">
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block rounded-full bg-red-100 px-4 py-1 text-sm font-semibold text-red-600">
            World Cancer Day • 3 February 2026
          </span>
           <h2
              ref={titleRef}
              className="text-2xl max-w-5xl mx-auto md:text-4xl lg:text-4xl text-center text-gray-900 mb-6 leading-tight overflow-hidden pb-5"
            >
            On the Eve of World Cancer Day Honorable Union Health Minister
            Releases Evidence Based Guidelines for Lung Cancer Treatment and
            Palliation
         </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid items-center gap-10 lg:grid-cols-2">
          
          {/* Left Image */}
          <div>
            <img
              src={assets.cancer}
              alt="Cancer Awareness"
              className="max-h-[450px] w-full rounded-2xl object-cover shadow-xl"
            />
          </div>

          {/* Right Content */}
          <div>
            <div className="rounded-2xl p-6 md:p-8">
              <p className="leading-8 text-slate-700">
                The Department of Health Research today marked a significant
                milestone in India’s cancer care journey with the official
                release of the National Evidence-Based Guidelines for Lung
                Cancer Treatment and Palliation by the Hon’ble Union Minister
                for Health & Family Welfare, Shri Jagat Prakash Nadda.
              </p>

              <p className="mt-3 leading-8 text-slate-700">
                Developed through a rigorous, transparent, and multidisciplinary
                process, these guidelines provide 15 key evidence-informed
                recommendations focused on the management and palliation of lung
                cancer, tailored to the Indian healthcare context.
              </p>

              <p className="mt-3 leading-8 text-slate-700">
                The guidelines aim to promote standardized, high-quality
                clinical care, reduce unwarranted variations in practice, and
                strengthen decision-making across levels of healthcare delivery.
              </p>

              <p className="mt-3 leading-8 text-slate-700">
                This initiative reflects the Government of India’s continued
                commitment to improving cancer outcomes and integrating
                evidence-based approaches into national health policy and
                clinical practice.
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
    <section className="pb-12">
        <div className="mx-auto container px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-normal pb-4">The Evidence-Based Guidelines for Lung Cancer Treatment and Palliation can be accessed below:</h2>
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
                            <span className="mb-1 block text-lg font-bold uppercase text-slate-500 md:hidden">
                              Document Name
                            </span>
                            {doc.title}
                        </td>

                        <td
                            className="
                            block md:table-cell
                            md:px-6 md:py-4
                            md:text-end
                            "
                        >
                            <span className="mb-2 block text-lg font-semibold uppercase text-slate-500 md:hidden">
                             Action
                            </span>

                            <a
                            href={doc.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                inline-flex w-full items-center justify-center gap-2
                                rounded-lg bg-blue-700 px-3 py-3
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
    </section>


    <section className="pb-12">
        <div className="mx-auto container  px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-normal pb-4">Plain language summary for patients, caregivers and families can be accessed here</h2>
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="hidden md:table-header-group">
                    <tr className="bg-slate-100">
                        <th className="px-6 py-4 text-left font-semibold text-slate-700">
                        Document Name
                        </th>
                        <th className="px-8 py-4 text-end font-semibold text-slate-700">
                          View
                        </th>
                    </tr>
                    </thead>

                    <tbody>
                    {caregivers.map((doc, index) => (
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
                            md:text-end
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
                                rounded-lg bg-blue-700 px-3 py-3
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
    </section>
     </>
  )
}

export default LungCancerTreatmentPalliationGuidelines