import React from 'react'
import {
  HeartPulse,
  Droplets,
  Bug,
  Baby,
  Brain,
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
      icon: HeartPulse,
      title: "Gazette Notification for National Registry",
      count: 25,
      path: "/gazette-notification-national-registry",
    },
    {
      icon: Droplets,
      title: "Gazette notification for UT Board With and Without Legislature",
      count: 18,
      path: "/gazette-notification-ut-board",
    },
    {
      icon: Bug,
      title: "Gazette Notification Appropriate Authority",
      count: 32,
      path: "/gazette-notification-appropriate-authority",
    },
    {
      icon: Baby,
      title: "Gazette Notification National ART and Surrogacy Board",
      count: 21,
      path: "/gazette-notification-national-art-surrogacy-board",
    },
    {
      icon: Brain,
      title: "Gazette notification for removal of difficulty (ART Act and Surrogacy Act, 2021)",
      count: 16,
      path: "/gazette-notification-removal-of-difficulty",
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
    path: "https://ethics.icmr.org.in",
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
                {categories.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.title}
                      to={item.path}
                      className="flex items-center justify-between border-t border-gray-100 px-5 py-4 hover:bg-gray-50"
                    >
                      <div className="flex items-start gap-3">
                        <Icon className="h-8 w-8 shrink-0 text-blue-600" />
                        <div>
                          <h4 className="text-[0.95rem] text-gray-800">{item.title}</h4>
                          <p className="text-sm text-gray-500">
                            {item.count} Guidelines
                          </p>
                        </div>
                      </div>

                      <ChevronRight className="h-5 w-5 shrink-0 text-gray-400" />
                    </Link>
                  );
                })}
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