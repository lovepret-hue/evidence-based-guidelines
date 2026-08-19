import React from 'react'
import assets from '../assets/assets'
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
const schedules = [
  {
    sno: 1,
    states: "Gujarat & Rajasthan",
    proposal: "Dr. Jaykaran Charan",
    institute: "All India Institute of Medical Sciences, Jodhpur",
    schedule: "14-19 October 2024",
  },
  {
    sno: 2,
    states: "Maharashtra, Daman & Diu and Dadra & Nagar Haveli",
    proposal: "Dr. Aravind Gandhi P",
    institute: "All India Institute of Medical Sciences, Nagpur",
    schedule: "21-25 October 2024",
  },
  {
    sno: 3,
    states: "Madhya Pradesh, Chhattisgarh & Odisha",
    proposal: "Dr. Amit Agrawal",
    institute: "All India Institute of Medical Sciences, Bhopal",
    schedule: "12-16 November 2024",
  },
  {
    sno: 4,
    states: "Karnataka & Goa",
    proposal: "Dr. Girish Thunga",
    institute:
      "Manipal College of Pharmaceutical Sciences, Manipal Academy of Higher Education, Manipal",
    schedule: "18-22 November 2024",
  },
  {
    sno: 5,
    states:
      "Tamil Nadu, Kerala, Puducherry & Andaman & Nicobar Islands",
    proposal: "Dr. Chandrashekar Janakiram",
    institute:
      "Amrita School of Dentistry, Amrita Vishwa Vidyapeetham, Kochi",
    schedule: "2-7 December 2024",
  },
  {
    sno: 6,
    states: "Uttar Pradesh & Uttarakhand",
    proposal: "Dr. Balendra Pratap Singh",
    institute: "King George Medical University, Lucknow",
    schedule: "4-7 December 2024",
  },
  {
    sno: 7,
    states:
      "Assam, Manipur, Tripura, Arunachal Pradesh, Meghalaya, Mizoram, Nagaland & Sikkim",
    proposal: "Dr. Krishna Undela",
    institute:
      "National Institute of Pharmaceutical Education and Research, Guwahati",
    schedule: "9-13 December 2024",
  },
  {
    sno: 8,
    states:
      "Punjab, Jammu & Kashmir, Ladakh, Himachal Pradesh, Chandigarh, Haryana & Delhi",
    proposal: "Dr. Sachit Anand",
    institute: "All India Institute of Medical Sciences, New Delhi",
    schedule: "18-22 December 2024",
  },
  {
    sno: 9,
    states: "West Bengal, Bihar & Jharkhand",
    proposal: "Dr. Seshadri Reddy Varikasuvu",
    institute: "All India Institute of Medical Sciences, Deoghar",
    schedule: "20-23 January 2025",
  },
  {
    sno: 10,
    states: "Telangana & Andhra Pradesh",
    proposal: "Dr. Sai Krishna Tikka",
    institute: "All India Institute of Medical Sciences, Bibinagar",
    schedule: "19-22 February 2025",
  },
];
const WorkshopsConducted = () => {
  return (
    <>
     <nav className="breadcrumb-banner relative overflow-hidden">
        <div className="container mx-auto px-5 lg:px-8 py-8 lg:py-14">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
                <h1 className="text-2xl lg:text-4xl font-medium text-white">
                Workshops  <span className="font-medium">Conducted</span>
                </h1>

                <div className="flex items-center gap-3 mt-4 text-sm">
                <a
                    href="/" className="text-gray-300 font-medium hover:text-blue-300 transition"
                >
                    Home
                </a>

                <span className="text-slate-400">&gt;</span>

                <span className="text-white">
                   Workshops Conducted
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
   
     <section className="bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        
        {/* Desktop Table */}
        <div className="hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg lg:block">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-blue-700 text-white">
                <tr>
                  <th className="px-4 py-4 text-left">S.No.</th>
                  <th className="px-4 py-4 text-left">States / UT</th>
                  <th className="px-4 py-4 text-left">
                    Recommended Proposal
                  </th>
                  <th className="px-4 py-4 text-left">
                    Institute / Medical College
                  </th>
                  <th className="px-4 py-4 text-left">Schedule</th>
                </tr>
              </thead>

              <tbody>
                {schedules.map((item, index) => (
                  <tr
                    key={item.sno}
                    className={`border-b hover:bg-slate-50 ${
                      index % 2 === 0 ? "bg-white" : "bg-slate-50"
                    }`}
                  >
                    <td className="px-4 py-5 font-semibold text-blue-700">
                      {item.sno}
                    </td>

                    <td className="px-4 py-5 font-medium text-slate-800">
                      {item.states}
                    </td>

                    <td className="px-4 py-5 text-slate-700">
                      {item.proposal}
                    </td>

                    <td className="px-4 py-5 text-slate-700">
                      {item.institute}
                    </td>

                    <td className="px-4 py-5">
                      <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                        {item.schedule}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="space-y-5 lg:hidden">
          {schedules.map((item) => (
            <div
              key={item.sno}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                  S.No. {item.sno}
                </span>

                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                  {item.schedule}
                </span>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    States / UT
                  </p>
                  <p className="font-medium text-slate-800">
                    {item.states}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Recommended Proposal
                  </p>
                  <p className="text-slate-700">
                    {item.proposal}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Institute / Medical College
                  </p>
                  <p className="text-slate-700">
                    {item.institute}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
     </>
  )
}

export default WorkshopsConducted