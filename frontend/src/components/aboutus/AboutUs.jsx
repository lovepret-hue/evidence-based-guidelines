import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import assets from '../../assets/assets'
gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const titleRef = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".word",
        {
          yPercent: 100,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.08,
          ease: "power4.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    }, titleRef);

    return () => ctx.revert();
  }, []);

  const headingText =
    "Centre for Evidence Based Guidelines";

  return (
    <section className="py-10 lg:py-16 bg-white">
      <div className="container mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-center">
          
          {/* Image */}
          <div className="overflow-hidden rounded-2xl hidden lg:flex">
            <img
              src={assets.centerForGuidLine}
              alt="About Us"
              className="w-full object-cover rounded-2xl border border-gray-200 shadow-lg p-4"
            />
          </div>
          <div>
            <p className="inline-block px-4 py-2 text-sm font-medium bg-red-100 text-red-600 rounded-full mb-3">About us</p>
            <h2
              ref={titleRef}
              className="text-2xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight overflow-hidden max-w-2xl"
            >
              {headingText.split(" ").map((word, index) => (
                <span
                  key={index}
                  className="word inline-block mr-2"
                >
                  {word}
                </span>
              ))}
            </h2>
            <div className="mb-6">
               <p className="text-gray-600 leading-7 line-clamp-6 lg:line-clamp-3 mb-4">
                The development of evidence-based guidelines is crucial for enhancing healthcare quality, optimizing treatment strategies, and ensuring the efficient use of resources. Globally, organizations like the World Health Organization (WHO) continuously refine these guidelines through rigorous research and expert consensus. In India, the need for such guidelines is particularly pressing due to diverse healthcare challenges, regional disparities, and resource limitations. The fragmented nature of guideline development, along with the absence of a centralized authority, has impacted the uniformity and scientific rigor of clinical standards. 
              </p>
             <a className="text-blue-600 p-2" href='/abouthtain'>Read more...</a>
            </div>
           
            
              <div className="flex flex-col lg:flex-row items-stretch gap-6">
              <div className="group relative flex flex-col sm:flex-row items-center sm:items-start p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 w-full overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-1 bg-blue-600"></div>

                <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                  <img
                    src={assets.icons2}
                    alt="Vision"
                    className="w-8 h-8 lg:w-10 lg:h-10 object-contain"
                  />
                </div>

                <div className="mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
                  <h3 className="text-xl md:text-2xl text-gray-700">
                    Our Vision
                  </h3>
                  <p className="mt-2 text-gray-600 leading-7 text-sm md:text-base">
                    To improve healthcare quality in India. To lead efforts in gathering
                    and coordinating healthcare research.
                  </p>
                </div>
              </div>

              <div className="group relative flex flex-col sm:flex-row items-center sm:items-start p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 w-full overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-1 bg-blue-600"></div>

                <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                  <img
                    src={assets.icons1}
                    alt="Mission"
                    className="w-8 h-8 lg:w-10 lg:h-10 object-contain"
                  />
                </div>

                <div className="mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
                  <h3 className="text-xl md:text-2xl text-gray-700">
                    Our Mission
                  </h3>
                  <p className="mt-2 text-gray-600 leading-7 text-sm md:text-base">
                    The Centre is committed to coordinating the development of
                    evidence-based guidelines that reflect the best available scientific
                    research.
                  </p>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;