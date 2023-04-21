import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Head from "../../common/Head";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const options2 = {
  items: 3,
  dots: true,
  margin: 20,
  dotsClass: "owl-dots custom-dots",
  dotClass: "owl-dot custom-dot",
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
  },
};


const FeatData = [
  {
    id: 1,
    text: "Start an online business from home",
    desc: "A complete guide for start a small business online",
    image:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/d532c0ad4feed007b3899cebad595286-1599611560157/guide-start-online-business-552-x2.png",
  },
  {
    id: 2,
    text: "Digital Matketing made easy",
    desc: "A practical guide for understand what is digital marketing",
    image:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/d532c0ad4feed007b3899cebad595286-1599611560168/guide-digital-marketing-552-x2.png",
  },
  {
    id: 31,
    text: "Start an online business from home",
    desc: "A complete guide for start a small business online",
    image:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/d532c0ad4feed007b3899cebad595286-1599611560155/guide-create-a-logo-552-x2.png",
  },
];

export default function Features2Index() {
  return (
    <Features2IndexContainer>
      <div className="features1wrapper w-90 py-6 auto flex column gap-2">
        <div className="w-100 Heades flex item-center justify-space">
          <Head text={"Fiverr guides"} />
          <Link to={""} className="link flex item-center gap-1">
            See More Guides <BiChevronRight />
          </Link>
        </div>
        <div className="w-100 grid grid-auto grid-gap2">
        <OwlCarousel className="owl-theme" {...options2}>
          {FeatData.map((x) => {
            return (
              <Link to={'/'} className="w-100 flex column gap-2" key={x.id}>
                <div className="w-100 card">
                  <img src={x.image} alt="" className="radius1 w-100" />
                  <div className="backdrop"></div>
                </div>
                <div className="w-100 flex column">
                  <h3 className="fs-18 text-extra-bold text-dark">{x.text}</h3>
                  <h4 className="fs-16 text-light text-grey2">{x.desc}</h4>
                </div>
              </Link>
            );
          })}
          </OwlCarousel>
        </div>

      </div>
    </Features2IndexContainer>
  );
}

const Features2IndexContainer = styled.div`
  width: 100%;
  .Heades {
    @media (max-width:780px) {
      flex-direction: column;
      justify-content: flex-start;
    }
  }
  .card {
    height: 24rem;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    &:hover {
      img {
        transform: scale(1.1);
      }
    .backdrop {
      background-color: rgba(255,255,255,.05);
    }
  }
    .backdrop {
      position:absolute;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,.2);
      border-radius: 10px;
      transition: all .4s;
    }
    img {
      position:absolute;
      transition: all .4s;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
