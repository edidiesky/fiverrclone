import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import styled from "styled-components";

const CarouselData = [
  { id: 1, img: "/img/logos/logo-1.png" },
  { id: 2, img: "/img/logos/logo-2.png" },
  { id: 3, img: "/img/logos/logo-3.png" },
  { id: 4, img: "/img/logos/logo-4.png" },
  { id: 5, img: "/img/logos/logo-5.png" },
  { id: 6, img: "/img/logos/logo-6.png" },
  { id: 7, img: "/img/logos/logo-4.png" },
  { id: 8, img: "/img/logos/logo-5.png" },
  { id: 5, img: "/img/logos/logo-5.png" },
  { id: 6, img: "/img/logos/logo-6.png" },
  { id: 7, img: "/img/logos/logo-4.png" },
  { id: 8, img: "/img/logos/logo-5.png" },
];
const options = {
  items: 6,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
  // other configuration options
};
export default function CarouselIndex() { 
  return (
    <CarouselIndexWrapper>
      <div className="container">
        <OwlCarousel {...options}>
          {CarouselData.map((x) => {
            return (
              <div key={x.id}>
                <img className="img-fluid" src={x.img} style={{fill:"#f5f5f5"}} alt="car" />
              </div>
            );
          })}
        </OwlCarousel>
      </div>
    </CarouselIndexWrapper>
  );
}

const CarouselIndexWrapper = styled.div`
  width: 100%;
  padding: 3rem 0;
  .container {
    width: 90%;
    margin: 0 auto;
  }
`;
