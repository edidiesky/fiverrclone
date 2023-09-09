import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import './theme.css'
import styled from "styled-components";
import { Link } from "react-router-dom";
import { countryData } from "../../data/Country";
const options = {
  items:6,
  autoplay:true,
  margin:10,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
  // other configuration options
};

const caseData = [
  {
    id: 1,
    image: "img/Home/visa/pexels-damir-mijailovic-4264783.jpg",
    title: "Coporate Coaching",
    desc: "Okla",
  },
  {
    id: 2,
    image: "img/Home/visa/pexels-engin-akyurt-15483653.jpg",
    title: "Coporate Finanace",
    desc: "Okla",
  },
  {
    id: 3,
    image: "img/Home/visa/pexels-ingo-joseph-109629.jpg",
    title: "Economic consultating",
    desc: "Okla",
  },
  {
    id: 4,
    image: "img/Home/visa/pexels-sharefaith-1202723.jpg",
    title: "Tech Consulting",
    desc: "Okla",
  },
 
];
export default function Cases() {
  return (
    <CasesContent className="flex column gap-4 item-start">
      <div className="container">
        <h2 className="font-weight-bold text-color-dark pb-3">- Our Cases</h2>
      </div>
      <OwlCarousel {...options}>
        {countryData.map((x) => {
          return (
            <div key={x.id}>
              <Link
                to="/visa"
                className="text-decoration-none"
              >
                <div className="thumb-info">
                  <div className="thumb-info-wrapper">
                    <img src={x.image} className="img-fluid" alt="" />
                  </div>
                  <div className="thumb-info-caption">
                    <div className="custom-thumb-info-title">
                      <h3 className="fs-20 text-dark">{x.title}</h3>
                    </div>
                    <div className="custom-arrow"></div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </OwlCarousel>
    </CasesContent>
  );
}

const CasesContent = styled.div`
  background-color: #eef4f2 !important;
  padding: 8rem 0;
  width: 100%;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: flex-start;
  .container {
    width: 90%;
    margin: 0 auto;
  }
  a {
    width: 100%;
    .thumb-info {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      &:hover {
        .thumb-info-wrapper {
          width: 100%;
          img {
            transform: scale(1.1);
          }
        }
        .thumb-info-caption {
          background-color: var(--green);
          .custom-arrow {
            &::before {
              border-top: 1px solid #fff;
            }
            &::after {
              border-top: 1px solid #fff;
              border-right: 1px solid #fff;
            }
          }
          .custom-thumb-info-title {
            h3 {
              color: #fff;
            }
            p {
              color: var(--grey-2);
            }
          }
        }
      }
      .thumb-info-caption {
        width: 100%;
        transition: all 0.6s;
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 4rem 3rem;
        .custom-arrow {
          position: relative;
          width: 3rem;
          display: flex;
          align-items: center;
          &::before {
            content: "";
            display: block;
            position: absolute;
            top: 50%;
            right: -2px;
            width: 100%;
            border-top: 1px solid #1e1e24;
            transform: translateY(-50%);
          }
          &::after {
            content: "";
            display: block;
            position: absolute;
            top: 50%;
            right: 0;
            width: 15px;
            height: 15px;
            border-top: 1px solid #1e1e24;
            border-right: 1px solid #1e1e24;
            transform: translateY(-50%) rotate(45deg);
          }
        }
        .custom-thumb-info-title {
          display: flex;
          gap: 0.5rem;
          
          flex-direction: column;
          align-items: flex-start;
          h3 {
            font-size: 1.6rem;
            font-weight: 400;
          }
          p {
            font-size: 1.2rem;
            font-weight: 300;
            color: var(--grey-2);
          }
        }
      }
      .thumb-info-wrapper {
        width: 100%;
        overflow: hidden;
        height: 20rem;
        position: relative;
        img {
          width: 100%;
          object-fit: cover;
          position: absolute;
          height: 100%;
          transition: all 0.6s;
          overflow: hidden;
        }
      }
    }
  }
`;
