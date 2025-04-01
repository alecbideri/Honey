import React from "react";
import Navbar from "./component/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <section className="h-100 bg-black"></section>
    </div>
  );
};
export default App;
