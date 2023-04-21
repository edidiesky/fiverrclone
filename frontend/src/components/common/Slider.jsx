import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
// const options = {
//   items: 1,
//   stagePadding: 10,
//   nav: true,
//   margin: 30,
//   navText: [
//     <BiChevronLeft className="owl-prev" />,
//     <BiChevronRight className="owl-next" />,
//   ],
//   responsive: {
//     0: {
//       items: 1,
//     },
//     768: {
//       items: 1,
//     },
//   },
// };

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
