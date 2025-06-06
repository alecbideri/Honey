import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavbarMenu } from "../assets/assets.js";

const ResponsiveMenu = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div className="text-xl font-semibold uppercase  bg-primary text-white py-10 m-6 rounded-3xl">
            <ul className="flex flex-col justify-center items-center gap-5">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
              <li className="mt-4">
                <button className="bg-white px-5 py-2 rounded-lg text-primary cursor-pointer ">
                  Sign Up
                </button>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default ResponsiveMenu;
