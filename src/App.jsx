import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Programs from "./components/programs/Programs";
import Title from "./components/title/Title";
import About from "./components/about/About";
import Campus from "./components/campus/Campus";
import Testimonials from "./components/testimonials/Testimonials";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle={"Our Programs"} title={"What we offer"} />
        <Programs />
        <About />
        <Title subTitle={"Gallery"} title={"Campus Photos"} />
        <Campus />
        <Title subTitle={"Testimonials"} title={"What Students Say"} />
        <Testimonials />
      </div>
    </>
  );
};

export default App;
