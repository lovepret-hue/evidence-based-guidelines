import React from "react";
import { Link } from "react-router-dom";

const logos = [
  "/logos/dhs.png",
  "/logos/pm-india.png",
  "/logos/cpgrams.png",
  "/logos/india-gov.png",
  "/logos/mygov.png",
  "/logos/icmr_logo.png",
];

const ClientLogoCarousel = () => {
  return (
   <section className="bg-white py-6 sm:py-8 md:py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden">
          <div className="animate-marquee flex min-w-max items-center gap-6 sm:gap-10 md:gap-8 lg:gap-10">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center border border-gray-300 rounded-lg p-5
                           w-24 h-12
                           sm:w-32 sm:h-16
                           md:w-40 md:h-20
                           lg:w-48 lg:h-24
                           flex-shrink-0"
              >
                <Link to="#">
                <img
                  src={logo}
                  alt={`Client Logo ${index + 1}`}
                  className="max-h-full max-w-full object-contain
                            
                             transition-all duration-300"
                  loading="lazy"
                />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogoCarousel;