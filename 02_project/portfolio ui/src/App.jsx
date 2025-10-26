import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero_Section } from "./components/HeroSection/Hero_Section";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Hero_Section />
      </div>
    </>
  );
};

export default App;
