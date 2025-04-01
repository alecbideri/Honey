import React, { useEffect } from "react";
import { NavbarMenu } from "../assets/assets.js";
import { Search, ShoppingBasket } from "lucide-react";
import { assets } from "../assets/assets";
import ResponsiveMenu from "./ResponsiveMenu.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isShadowVisible, setIsShadowVisible] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 32) {
        setIsShadowVisible(true);
      } else {
        setIsShadowVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Navbar class and all properties

  const navbarClasses = `bg-white fixed top-0  left-0 right-0 z-50 transition-shadow duration-300 ease-in-out ${
    isShadowVisible ? "shadow-md" : " "
  }`;

  return (
    <>
      <nav className={navbarClasses}>
        <div className="container mx-auto h-16 px-8 flex items-center justify-between">
          {/* Logo section */}
          <div className="flex items-center gap-2 uppercase">
            <div className="text-sm bg-primary px-5 py-4 rounded-full w-12 h-12 text-white text-center flex items-center">
              <h1>H</h1>
            </div>
            <p className="text-xl font-bold cursor-pointer hover:text-primary">
              <a href="#">Honey</a>
            </p>
          </div>

          {/* Menu section */}
          <div className="max-lg:hidden flex items-center justify-center flex-1">
            <ul className="flex items-center gap-6">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="inline-block hover:text-primary font-semibold"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Icons section and Login button */}
          <div className="  flex items-center gap-4">
            <button className="font-semibold cursor-pointer hover:bg-primary hover:text-white rounded-full p-1 duration-200 hidden md:block">
              <Search size="20" />
            </button>
            <button className="font-semibold cursor-pointer hover:bg-primary hover:text-white rounded-full p-1 duration-200 hidden md:block">
              <ShoppingBasket size={20} />
            </button>
            <button className="bg-primary px-5 py-2 rounded-lg text-white cursor-pointer hover:border hover:border-primary hover:text-primary hover:bg-transparent hidden md:block">
              Sign Up
            </button>
          </div>
          {/* Menu icon*/}
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img src={assets.menu_icon} alt="menu icon" />
          </div>
        </div>
      </nav>
      {/*Responsive Menu*/}
      <div className="md:hidden">
        <ResponsiveMenu open={isOpen} />
      </div>
    </>
  );
};

export default Navbar;
