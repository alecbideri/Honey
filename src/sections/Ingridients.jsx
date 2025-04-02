import React from "react";
import { assets } from "../assets/assets.js";

const Ingridients = () => {
  return (
    <section id="ingridients" className="px-4 py-6 sm:px-10">
      <div className="flex flex-col gap-15">
        <h1 className="text-4xl max-md:text-5xl font-bold text-primary text-center">
          Ingridients
        </h1>
        <div className="flex  items-center justify-center gap-20 max-md:flex-col max-md:gap-8">
          <div className="flex flex-col items-center gap-3 border-2 px-2 py-4 rounded-lg border-gray-200 hover:border-primary/50 cursor-pointer hover:shadow-md shadow-primary/50">
            <img
              src={assets.ingrid_1}
              alt="ingrid image"
              width={32}
              height={32}
            />
            <h3 className="font-bold ">Norem ipsum dolor sit amet, </h3>
            <p className="text-sm text-center max-w-[200px]">
              Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti{" "}
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 border-2 px-2 py-4 rounded-lg border-gray-200 hover:border-primary/50 cursor-pointer hover:shadow-md shadow-primary/50">
            <img
              src={assets.ingrid_2}
              alt="ingrid image"
              width={32}
              height={32}
            />
            <h3 className="font-bold ">Norem ipsum dolor sit amet, </h3>
            <p className="text-sm text-center max-w-[200px]">
              Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti{" "}
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 border-2 px-2 py-4 rounded-lg border-gray-200 hover:border-primary/50 cursor-pointer hover:shadow-md shadow-primary/50">
            <img
              src={assets.ingrid_3}
              alt="ingrid image"
              width={32}
              height={32}
            />
            <h3 className="font-bold ">Norem ipsum dolor sit amet, </h3>
            <p className="text-sm text-center max-w-[200px]">
              Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Ingridients;
