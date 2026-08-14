import React from 'react'
import assets from '../assets/assets'

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
     <div
        className="w-full min-h-[280px] flex items-center justify-center relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${assets.htainBanner})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative z-10 text-white text-4xl font-bold uppercase">
        Workshops Conducted
        </h1>
      </div>
    
   
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