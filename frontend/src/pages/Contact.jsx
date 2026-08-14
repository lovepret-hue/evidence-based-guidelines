import React from 'react'
import { GoLocation } from "react-icons/go";
const Contact = () => {
  return (
    <div className="bg-slate-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900">
            Contact Us
          </h1>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Get in touch with Health Technology Assessment in India (HTAIn),
            Department of Health Research.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl border border-gray-100 border-t-4 border-t-blue-600 p-8 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-16 h-16 rounded-full bg-blue-50 inline-flex items-center justify-center flex-shrink-0">
                  <GoLocation className="text-3xl text-blue-600" />
                </div>

                <h3 className="text-2xl text-gray-900">
                  Department of Health Research
                </h3>
              </div>

              <div className="text-gray-600 leading-7">
                <p>
                  2nd Floor, IRCS Building,<br />
                  1, Red Cross Road,
                  New Delhi – 110001
                </p>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="font-semibold text-gray-800">Website:</span>{" "}
                  <a
                    href="https://dhr.gov.in"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    dhr.gov.in
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 border-t-4 border-t-blue-600 p-8 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-16 h-16 rounded-full bg-blue-50 inline-flex items-center justify-center flex-shrink-0">
                  <GoLocation className="text-3xl text-blue-600" />
                </div>

                <h3 className="text-2xl text-gray-900">
                  Department of Health Research
                </h3>
              </div>

              <div className="text-gray-600 leading-7">
                <p>
                
                   2nd Floor, IRCS Building, 1, Red Cross Road, New Delhi – 110001.
                </p>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="font-semibold text-gray-800">Website:</span>{" "}
                  <a
                    href="https://dhr.gov.in"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    dhr.gov.in
                  </a>
                </div>
              </div>
            </div>
           <div className="bg-white rounded-2xl border border-gray-100 border-t-4 border-t-blue-600 p-8 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-16 h-16 rounded-full bg-blue-50 inline-flex items-center justify-center flex-shrink-0">
                  <GoLocation className="text-3xl text-blue-600" />
                </div>

                <h3 className="text-2xl text-gray-900">
                  Web Information Manager 
                </h3>
              </div>

              <div className="text-gray-600 leading-7">
                <p>
                   Shri Sanjeev Singh<br />
                   Under Secretary, 
                   2nd Floor, IRCS Building,
                   <br/>
                   1, Red Cross Road, New Delhi – 110001.
                </p>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="font-semibold text-gray-800">Website:</span>{" "}
                  <a
                    href="https://dhr.gov.in"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    dhr.gov.in
                  </a>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact