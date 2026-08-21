import React from 'react'
import { useState } from "react";
import { FaRegFilePdf } from "react-icons/fa6";
import { FileText, Dna } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import assets from '../assets/assets';
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

const guidedocuments = [
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
const guidelines = [
  {
    id: "stem-cell",
    title: "Stem Cell Therapy Guidelines",
    icon: Dna,
    content: (
       <div className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
         <div className="grid grid-cols-1 md:grid-cols-[4fr_1fr] gap-6">
            {/* Your Stem Cell content */}
            <div>
                <h3 className="text-2xl text-slate-800 mb-3">
                    Release of evidence-based guidelines for the use of STEM cell therapy
                </h3>
                <p className="text-slate-600 leading-7">
                The Evidence based guidelines for the use of stem cell therapy in Neurological, Orthopedic, Pediatric and Cardiac disease conditions have been updated by adding a subgroup analysis based on the level of manipulation of stem cells in the included studies. In view of the update, the previous guidelines in the above four conditions stand null and void. The level of manipulation done to develop stem cell and stem cell derived products was interpreted by DHR secretariat into less than or more than minimal manipulation as defined by CDSCO (Annexed in guidelines) and the information provided in the trial itself.
                </p>
            </div>
            <div className='flex items-end border p-3 bg-blue-400 rounded-md'>
                <img src={assets.indiaMap} className='w-[260px]'  alt='India' />
            </div>
         </div>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-5">
             <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="hidden md:table-header-group">
                    <tr className="bg-slate-100">
                        <th className="px-6 py-4 text-left font-semibold text-slate-700">
                        S No.
                        </th>
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
                        <td className="px-4 py-4 md:px-6 md:py-5">
                            <span
                            className="
                                inline-flex items-center justify-center
                                w-9 h-9
                                rounded-full
                                bg-blue-600
                                text-white
                                text-sm font-semibold
                                shadow-sm
                            "
                            >
                            {index + 1}
                            </span>
                        </td>
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
    ), 
  },
  {
    id: "lung-cancer",
    title: "Lung Cancer Treatment & Palliation Guidelines",
    icon: FileText,
    content: (
     <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-[4fr_1fr] gap-6">
            {/* Your Lung Cancer content */}
            <div>
            <h3 className="text-xl text-slate-800 mb-3">
            On the Eve of World Cancer Day Honorable Union Health Minister Releases Evidence Based Guidelines for Lung Cancer Treatment and Palliation
            </h3>
            <p className="text-slate-600 leading-7">
            The Department of Health Research today marked a significant milestone in India’s cancer care journey with the official release of the National Evidence-Based Guidelines for Lung Cancer Treatment and Palliation by the Hon’ble Union Minister for Health & Family Welfare, Shri Jagat Prakash Nadda.
            </p>
            <p className="text-slate-600 leading-7">Developed through a rigorous, transparent, and multidisciplinary process, these guidelines provide 15 key evidence-informed recommendations focused on the management and palliation of lung cancer, tailored to the Indian healthcare context.</p>
            <p className="text-slate-600 leading-7">The guidelines aim to promote standardized, high-quality clinical care, reduce unwarranted variations in practice, and strengthen decision-making across levels of healthcare delivery.</p>
            <p className="text-slate-600 leading-7">This initiative reflects the Government of India’s continued commitment to improving cancer outcomes and integrating evidence-based approaches into national health policy and clinical practice.</p>
            </div>
            <div>
                <img alt="Cancer Awareness" class="max-h-[450px] w-full rounded-2xl object-cover shadow-xl" src="/static/media/cancer-treatment.ba06b0a572421fad3aed.jpg"></img>
            </div>
        </div>
        <div className=''>
            <h3 className='text-xl py-4 text-slate-800 mb-3'>The Evidence-Based Guidelines for Lung Cancer Treatment and Palliation can be accessed below:</h3>
            <table className="w-full">
                <thead className="hidden md:table-header-group">
                <tr className="bg-slate-100">
                    <th className="px-6 py-4 text-left font-semibold text-slate-700">
                    S No.
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-slate-700">
                    Document Name
                    </th>
                    <th className="px-6 py-4 text-center font-semibold text-slate-700">
                    View
                    </th>
                </tr>
                </thead>

                <tbody>
                {guidedocuments.map((doc, index) => (
                    <tr
                    key={index}
                    className="
                        block border-b p-4 md:table-row md:p-0
                        hover:bg-blue-50 transition
                    "
                    >
                        <td className="px-4 py-4 md:px-6 md:py-5">
                        <span
                        className="
                            inline-flex items-center justify-center
                            w-9 h-9
                            rounded-full
                            bg-blue-600
                            text-white
                            text-sm font-semibold
                            shadow-sm
                        "
                        >
                        {index + 1}
                        </span>
                    </td>
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
          
            <h3 className='text-xl py-4 text-slate-800 mb-3'>Plain language summary for patients, caregivers and families can be accessed here</h3>
            <table className="w-full">
                <thead className="hidden md:table-header-group">
                <tr className="bg-slate-100">
                    <th className="px-6 py-4 text-left font-semibold text-slate-700">
                    S No.
                    </th>
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
                    <td className="px-4 py-4 md:px-6 md:py-5">
                        <span
                        className="
                            inline-flex items-center justify-center
                            w-9 h-9
                            rounded-full
                            bg-blue-600
                            text-white
                            text-sm font-semibold
                            shadow-sm
                        "
                        >
                        {index + 1}
                        </span>
                    </td>
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
    ),
  },
];
const CompletedGuidelines = () => {
  const [activeTab, setActiveTab] = useState("stem-cell");

  const activeGuideline = guidelines.find(
    (item) => item.id === activeTab
  );
  return (
    <div>
      <nav className="breadcrumb-banner relative overflow-hidden">
        <div className="container mx-auto px-5 lg:px-8 py-8 lg:py-14">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
                <h1 className="text-2xl lg:text-4xl font-medium text-white">
                Completed <span className="font-medium">Guidelines</span>
                </h1>

                <div className="flex items-center gap-3 mt-4 text-sm">
                <a
                    href="/" className="text-gray-300 font-medium hover:text-blue-300 transition"
                >
                    Home
                </a>

                <span className="text-slate-400">&gt;</span>

                <span className="text-white">
                   Completed Guidelines
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
      <section className="lg:px-8 py-10 lg:py-10">
      <div className='container mx-auto px-5'>
      {/* Tabs */}
      <div className="mb-8 overflow-x-auto">
        <div className="mx-auto flex min-w-max justify-start gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-2">

          {guidelines.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`
                  relative flex items-center gap-3 rounded-xl px-5 py-4
                  text-sm md:text-base font-bold
                  transition-all duration-300
                  ${
                    isActive
                      ? "bg-white text-blue-700 shadow-md"
                      : "text-slate-600 hover:bg-white hover:text-slate-900"
                  }
                `}
              >
                <span
                  className={`
                    flex h-9 w-9 items-center justify-center rounded-lg
                    transition-all duration-300
                    ${
                      isActive
                        ? "bg-blue-100 text-blue-600"
                        : "bg-slate-200 text-slate-500"
                    }
                  `}
                >
                  <Icon size={19} />
                </span>

                <span>{item.title}</span>

                {isActive && (
                  <span className="absolute bottom-0 left-5 right-5 h-1 rounded-full bg-blue-600" />
                )}
              </button>
            );
          })}

        </div>
      </div>

      {/* Tab Content */}
      <div className="animate-in fade-in duration-500">
        {activeGuideline?.content}
      </div>
   </div>
    </section>
    </div>
  )
}

export default CompletedGuidelines
