import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import icons1 from "../../assets/hub.png";
import icons2 from "../../assets/centers.png";
import icons3 from "../../assets/partners.png";
import icons4 from "../../assets/study.png";
import icons5 from "../../assets/ongoing.png";
import icons6 from "../../assets/publications.png";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    name: "Resource Hubs",
    percentage: "08",
    icon: <img src={icons1} alt="Resource Hubs" className="w-12 h-12 p-2 xl:p-0 xl:text-4xl" />,
    path: "/resource-hubs",
  },
  {
    name: "Resource Centers",
    percentage: "20",
    icon: <img src={icons2} alt="Resource Centers" className="w-12 h-12 p-2 xl:p-0 xl:text-4xl" />,
    path: "/resource-centers",  
  },
  {
    name: "Workshops Conducted",
    percentage: "10",
    icon: <img src={icons3} alt="Technical Partners" className="w-12 h-12  p-2 xl:p-0 xl:text-4xl" />,
    path: "/workshop-conducted",
  },
  {
    name: "Completed Guidelines",
    percentage: "",
    icon: <img src={icons4} alt="Guidelines Completed" className="w-12 h-12 p-2 xl:p-0 xl:text-4xl" />,
    path: "#",
  },
  {
    name: "Ongoing Guidelines",
    percentage: "",
    icon: <img src={icons5} alt="Ongoing Guidelines" className="w-12 h-12  p-2 xl:p-0 xl:text-4xl" />,
    path: "#",
  },
  {
    name: "Total Guidelines",
    percentage: "",
    icon: <img src={icons6} alt="Total Guidelines" className="w-12 h-12  p-2 xl:p-0 xl:text-4xl" />,
    path: "#",
  },
];

const KeyStatistics = () => {
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
    <section className="bg-gray-100 py-10 lg:py-16">
      <div className="container mx-auto px-5 lg:px-8">
          <h2
              ref={titleRef}
              className="text-2xl md:text-4xl lg:text-4xl text-center text-gray-900 mb-6 leading-tight overflow-hidden pb-5 xl:pb-6"
            >
              Key Statistics
         </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <Link to={skill.path}
                key={index}
                className="w-auto h-[80px] sm:h-[100px] lg:h-[120px] xl:h-[128px] group rounded-full border bg-white border-gray-200 flex items-center px-5 transition-all duration-300 hover:shadow-lg"
              >
                {/* Icon Circle */}
                <div className="w-15 h-15 xl:w-24 xl:h-24 rounded-full bg-blue-800 flex items-center justify-center group-hover:bg-gray-900 transition-colors duration-300">
                 <span className="filter invert">{skill.icon}</span>
                </div>

                {/* Content */}
                <div className="ml-6">
                  <h3 className="text-xl font-normal text-black pb-3">
                    {skill.name}
                  </h3>
                  <h2 className="text-2xl sm:text-3xl xl:text-4xl font-medium leading-none text-black">
                     {skill.percentage}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
    </section>
  );
};

export default KeyStatistics;