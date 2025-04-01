import React from "react";
import { assets } from "../assets/assets.js";

const About = () => {
  return (
    <section id="about" className="px-4 py-6 sm:px-10">
      <h1 className="font-black text-4xl max-sm:text-5xl text-center mb-10">
        About
      </h1>
      <div className="flex flex-col items-center px-4 sm:px-20 lg:flex-row lg:items-start">
        <div className="w-full lg:w-1/2">
          <img
            className="w-full h-auto object-contain "
            src={assets.bee}
            alt="Bee"
          />
        </div>
        <div className="flex flex-col gap-8 mt-6 lg:mt-0 lg:ml-20 w-full max-w-[400px] sm:max-w-[500px]">
          <h1 className="font-black text-4xl max-sm:text-2xl text-center lg:text-right">
            The <span className="text-primary">Buzzz</span> about your Honey!
          </h1>
          <div className="w-full border-2 p-4 rounded-lg border-primary/40 lg:mt-30 ">
            <p className="text-right mb-2">
              Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus..
            </p>
            <p className="text-right">
              Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus..
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
