import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { gsap } from "gsap";
import { slides } from "../../data/slides";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSlider = () => {
  
  const animateSlide = (slideEl) => {
    if (!slideEl) return;

    const image = slideEl.querySelector(".slide-image");

    if (!image) return;

    gsap.killTweensOf(image);

    gsap.fromTo(
      image,
      {
        scale: 1.15,
      },
      {
        scale: 1,
        duration: 6,
        ease: "power1.out",
        overwrite: true,
      }
    );
  };

  return (
    <section className="relative w-full">
  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    navigation
    pagination={{ clickable: true }}
    loop={true}
    speed={1800}
    autoplay={{
      delay: 5000,
      disableOnInteraction: false,
    }}
    onInit={(swiper) => {
      const slide = swiper?.slides?.[swiper.activeIndex];
      if (slide) animateSlide(slide);
    }}
    onSlideChangeTransitionStart={(swiper) => {
      const slide = swiper?.slides?.[swiper.activeIndex];
      if (slide) animateSlide(slide);
    }}
    className="
      hero-swiper
      h-[35vh]
      min-h-[250px]
      sm:h-[45vh]
      md:h-[55vh]
      lg:h-[70vh]
      xl:h-[85vh]
      2xl:h-screen
    "
  >
    {slides?.map((slide, index) => (
      <SwiperSlide key={slide?.id ?? index}>
        <div className="relative h-full w-full overflow-hidden">
          <img
            src={slide?.image}
            alt={slide?.title || `Slide ${index + 1}`}
            className="
              w-full
              h-full
              object-cover
              object-center
            "
          />

          {/* Optional Overlay */}
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Optional Content */}
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="text-center text-white max-w-4xl">
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold">
                {slide?.title}
              </h1>

              {slide?.description && (
                <p className="mt-3 text-sm sm:text-base md:text-lg lg:text-xl">
                  {slide.description}
                </p>
              )}
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>
  );
};

export default HeroSlider;