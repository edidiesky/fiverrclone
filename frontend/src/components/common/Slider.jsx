import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";


export default function SliderIndex({ children, options }) {
  return (
    <OwlCarousel
      className="owl-carousel owl-theme"
      {...options}
    >
      {children}
    </OwlCarousel>
  );
}
