import React from "react";
import About from "./About";
import Benefit from "./Benefit";
import Choice from "./Choice";
import Expertise from "./Expertise";
import Hero from "./Hero";
import Partners from "./Partners";
import Services from "./Services";
import AboutUs from "./Aboutus";
import Cases from "./Cases";
import { Banner2 } from "../common";
import Discover from "./Discover";

export default function HomeIndex() {
  return (
    <div>
      <Hero />
      <Choice />
      <AboutUs />
      <Services />
      <Discover />
      <Benefit />
      <Cases />
      <About />
      <Banner2
        text={"Request Rate Online - Need Immediate Confirmation?"}
        subText={"Call Us at 888-123-4567"}
      />
      <Partners />
    </div>
  );
}
