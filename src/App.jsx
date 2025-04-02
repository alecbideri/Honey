import React from "react";
import Navbar from "./component/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Ingridients from "./sections/Ingridients.jsx";
import Products from "./sections/Products.jsx";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Ingridients />
      <Products />
      <section className="h-100 bg-black"></section>
    </div>
  );
};
export default App;
