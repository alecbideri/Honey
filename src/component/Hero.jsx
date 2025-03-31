import React from "react";
import { assets } from "../assets/assets.js";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="p-4">
      <div className="flex gap-2 max-md:flex-col">
        <div className="flex items-center p-4 ">
          {" "}
          {/* Overall Structure */}
          <div className="max-lg:hidden flex items-center justify-center h-[450px]">
            <h1 className="transform -rotate-90 whitespace-nowrap text-[150px] lg:text-[200px] font-bold text-gray-300  origin-center tracking-tighter ">
              {" "}
              {/* Vertical Text */}
              Honey
            </h1>
          </div>
          <div className="flex flex-col gap-8">
            <p className="max-w-[400px] text-sm text-gray-500  font-medium">
              Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3 sm:-space-x-4">
                  {" "}
                  {/* Avatar Overlap */}
                  <img
                    className="rounded-full w-10 h-10 sm:w-12 sm:h-12 object-cover"
                    src={assets.profile1}
                    alt="Satisfied customer 1"
                  />
                  <img
                    className="rounded-full w-10 h-10 sm:w-12 sm:h-12 object-cover"
                    src={assets.profile2}
                    alt="Satisfied customer 2"
                  />
                  <img
                    className="rounded-full w-10 h-10 sm:w-12 sm:h-12 object-cover"
                    src={assets.profile3}
                    alt="Satisfied customer 3"
                  />
                </div>
                <div className="flex flex-col tracking-tight">
                  <p className="text-2xl sm:text-3xl font-bold">125+</p>
                  <p className="text-xs sm:text-sm font-bold">customers</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 mt-2">
                <button className="group bg-primary hover:bg-transparent border-2 border-transparent hover:border-primary w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900">
                  <Play className="w-5 h-5 sm:w-6 sm:h-6 stroke-white group-hover:stroke-primary transition-colors duration-200" />
                </button>
                <p className="font-medium  text-sm sm:text-base">
                  Watch testimonials
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2 max-md:flex-col px-8 items-center">
          <img
            className="rounded-full w-100 h-150 object-contain overflow-hidden max-md:ml-12"
            src={assets.hero}
            alt="Hero Honey picture"
          />

          <div className="py-60 max-md:flex gap-10 max-md:py-2 px-8 max-md:ml-7">
            <div>
              <h3 className="text-primary font-black text-4xl max-md:text-5xl">
                4k+
              </h3>
              <p className="text-sm ">Customers</p>
            </div>
            <div>
              <h3 className="text-primary font-black text-4xl max-md:text-5xl">
                50+
              </h3>
              <p>Farmers</p>
            </div>
            <div>
              <h3 className="text-primary font-black text-4xl max-md:text-5xl">
                10+
              </h3>
              <p>Partners</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
