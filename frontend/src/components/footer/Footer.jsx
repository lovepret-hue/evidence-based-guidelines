import React, { useEffect, useState } from "react";
import { RiTwitterXFill } from "react-icons/ri";
import { FaArrowUpLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#23252d] text-gray-400">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Useful Links */}
          <div>
            <h3 className="mb-4 font-semibold tracking-widest text-white uppercase">
              Useful Links
            </h3>

            <div className="space-y-2">
              {/* <Link
                to="#"
                className="block transition duration-300 hover:text-white"
              >
                Resource Centres
              </Link> */}

              <Link
                to="#"
                className="block transition duration-300 hover:text-white"
              >
                FAQ
              </Link>

              <Link
                to="#"
                className="block transition duration-300 hover:text-white"
              >
                Contact Us
              </Link>

              <Link
                to="#"
                className="block transition duration-300 hover:text-white"
              >
                About CEG
              </Link>
            </div>
          </div>

          {/* Social Connect */}
          <div className="md:text-right">
            <h3 className="mb-4 font-semibold tracking-widest text-white uppercase">
              Social Connect
            </h3>
           <div>
              <Link
                to="#"
                className="inline-flex text-xl transition duration-300 hover:text-white"
              >
              <RiFacebookFill />
              </Link> 
              <Link
                to="#"
                className="inline-flex text-xl px-4 transition duration-300 hover:text-white"
              >
              <FaInstagram />
              </Link> 
              <Link
                to="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-xl transition hover:text-white"
              >
                <RiTwitterXFill />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-gray-700 pt-6">
          <p className="text-center text-sm md:text-left">
            © Copyright 2026 by DHR. All Rights Reserved. Designed by DHR
           
          </p>
        </div>
      </div>

      {/* Back To Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed right-6 bottom-6 z-50 flex h-12 w-12 items-center justify-center rounded bg-blue-600 text-white shadow-lg transition-all duration-300 hover:bg-blue-700"
        >
          <FaArrowUpLong />
        </button>
      )}
    </footer>
  );
};

export default Footer;
