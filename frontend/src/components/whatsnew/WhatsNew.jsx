import React from 'react'
import {
  Globe,
  ChevronRight,
  ShieldCheck,
  FileText,
  Microscope,
  Database,
  ExternalLink,
} from "lucide-react";

import { Link } from 'react-router-dom';

  const categories = [
    {
      title: "Gazette Notification for National Registry",
      pdf: "/pdfs/national-registry.pdf",
    },
    {
      title: "Gazette Notification for UT Board With and Without Legislature",
      pdf: "/pdfs/ut-board.pdf",
    },
    {
      title: "Gazette Notification Appropriate Authority",
      pdf: "/pdfs/appropriate-authority.pdf",
    },
    {
      title: "Gazette Notification National ART and Surrogacy Board",
      pdf: "/pdfs/national-art-surrogacy-board.pdf",
    },
    {
      title:
        "Gazette Notification for Removal of Difficulty (ART Act and Surrogacy Act, 2021)",
      pdf: "/pdfs/removal-of-difficulty.pdf",
    },
 ];

  const whatsNewData = [
  {
    title: "Expression of Interest (EOI) for Establishing Technical Resource Centres (TRCs) under the Centre for Evidence based Guidelines, DHR",
    path: "https://www.dhr.gov.in/static/uploads/2026/05/8508d0ab0db90db2bdd6be7c873def6d.pdf",
  },
  {
    title: "On the Eve of World Cancer Day Honorable Union Health Minister Releases Evidence Based Guidelines for Lung Cancer Treatment and Palliation (3 February 2026)",
    path: "#",
  },
];

const importantLinks = [
  {
    title: "ePMS Portal",
    icon: Database,
    path: "https://epms.icmr.org.in",
  },
  {
    title: "HTAIn",
    icon: Microscope,
    path: "https://htaindia.nic.in",
  },
  {
    title: "Ethics",
    icon: ShieldCheck,
    path: "https://naitik.gov.in/DHR/Homepage",
  },
  {
    title: "ICMR",
    icon: Globe,
    path: "https://www.icmr.gov.in",
  },
  {
    title: "HMSC",
    icon: FileText,
    path: "https://hmsc.icmr.org.in",
  },
  {
    title: "CTRI",
    icon: Database,
    path: "https://ctri.nic.in",
  },
];

const WhatsNew = () => {
  return (
    <section className="bg-white py-10 lg:py-16">
      <div className="container mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Explore Guidelines */}
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm lg:col-span-3">
            <div className="flex items-center justify-between p-5">
              <h3 className="text-lg font-semibold text-gray-800 uppercase">
                Explore Guidelines
              </h3>
              <button className="text-sm font-medium text-blue-600 uppercase">
                View All
              </button>
            </div>
              <div className="guideline-container max-h-[400px] overflow-y-auto">
                <div className="w-full max-w-md overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                  <div>
                    {categories.map((item, index) => (
                      <a
                        key={index}
                        href={item.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 border-b border-gray-100 px-5 py-4 transition-all duration-200 hover:bg-blue-50/40"
                      >
                        {/* PDF Icon */}
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-all duration-200 group-hover:bg-blue-600 group-hover:text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.8"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 4.5A2.5 2.5 0 018.5 2h7L20 6.5V19a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 016 19V4.5z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 2v5h5"
                            />
                          </svg>
                        </div>

                        {/* Title */}
                        <div className="min-w-0 flex-1">
                          <h3 className="text-[15px] font-medium leading-6 text-gray-800 group-hover:text-blue-600">
                            {item.title}
                          </h3>

                          <p className="mt-0.5 text-sm text-gray-400">
                            View PDF
                          </p>
                        </div>

                        {/* Arrow */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 shrink-0 text-gray-400 transition-all duration-200 group-hover:translate-x-1 group-hover:text-blue-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          {/* Development Process */}
          <div className="rounded-xl border border-gray-200 bg-white p-3 xl:p-6 shadow-sm lg:col-span-6">
            <div className="mb-8 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800 uppercase">
               What’s New
              </h3>

              <button className="text-sm font-medium text-blue-600 uppercase">
                View All
              </button>
            </div>

            <div className="grid grid-cols-1 gap-3 guideline-container max-h-[400px] overflow-y-auto">
            {whatsNewData.map((item, index) => (
              <a
                key={index}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="xl:flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold hidden">
                      {index + 1}
                    </div>

                    <div className="flex-1">
                      <h3 className="text-[0.95rem]  text-gray-900 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    <svg
                      className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
            </div>
          </div>

          {/* Latest Updates */}
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm lg:col-span-3">
            <div className="flex items-center justify-between p-5">
              <h3 className="text-lg font-semibold text-gray-800 uppercase">
               Important Links
              </h3>
              <button className="text-sm font-medium text-blue-600 uppercase">
                View All
              </button>
            </div>

            <div className="space-y-4 p-5 pt-0 guideline-container max-h-[400px] overflow-y-auto">
                <div className="grid gap-3">
                  {importantLinks.map((link) => {
                    const Icon = link.icon;

                    return (
                      <a
                        key={link.title}
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 transition-colors group-hover:bg-blue-100">
                            <Icon className="h-6 w-6 text-blue-600" />
                          </div>

                          <div>
                            <h3 className="font-semibold text-gray-800">
                              {link.title}
                            </h3>
                            <p className="text-sm text-gray-500">
                              Open portal
                            </p>
                          </div>
                        </div>

                        <ExternalLink className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-600" />
                      </a>
                    );
                  })}
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatsNew