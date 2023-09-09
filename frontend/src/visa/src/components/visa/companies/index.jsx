import React, { useEffect } from "react";
import styled from "styled-components";
import { RxCross2 } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {
  addProductToCart,
  getAllVisa,
  clearCartMessage,
} from "../../../Features";
import Message from "../../loaders/Message";
import { Link } from "react-router-dom";

const options = {
  items: 3,
  //   autoplay: true,
  margin: 30,
  nav: true,
  navText: ["<", ">"],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
  // other configuration options
};

export default function CompaniesIndex() {
  const dispatch = useDispatch();

  
  const { bag, showAlert, alertText, alertType } = useSelector(
    (store) => store.bag
  );
  useEffect(() => {
    dispatch(getAllVisa());
  }, [dispatch]);

  const { visa } = useSelector((store) => store.visa);

  return (
    <CompaniesIndexWrapper>
      <div className="container">
        <OwlCarousel {...options}>
          {visa?.map((x, index) => {
            return (
              <div className="w-100 hidden">
                <CardWrapper
                  className="w-100 Card"
                  key={index}
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aos-delay={index * 300}
                >
                  <div className="w-100 ImgWrapper">
                    <img src={x?.image} alt="" className="w-100" />
                    <div className="back"></div>
                  </div>

                  <div className="CardBottom w-100 flex py-1 gap-2 column back-white">
                    <div className="w-100 px-3 flex item-center justify-space">
                      <h4 className="fs-20 text-light text-bold family1 ">
                        Price: <span className="text-bold">${x?.price}</span>
                      </h4>
                    </div>
                    <div className="w-100 px-3 flex column gap-2" style={{gap:'1.4rem'}}>
                      <h3 className="text-dark text-light capitalize family1 text-bold fs-18">
                        Category: <span className="text-bold">{x?.title}</span>
                      </h3>
                      <div className="w-100 py-1">
                        <Link to={`/country/${x._id}`} className="btn fs-10">
                          Choose Destination
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardWrapper>
              </div>
            );
          })}
        </OwlCarousel>
      </div>
    </CompaniesIndexWrapper>
  );
}

const CompaniesIndexWrapper = styled.div`
  width: 100%;
  padding: 5rem 0;
  position: relative;

  .owl-nav {
    position: absolute;
    top: 50%;
    width: 100%;
    z-index: 10;
    background-color: #fff;
    @media (max-width: 980px) {
      display: none;
    }
    button.owl-next {
      background-color: #fff;
      border-radius: 50%;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 55px;
      height: 55px;
      position: absolute;
      border-radius: 50%;
      transition: all 0.4s;
      font-size: 20px;
      color: #777;
      &:hover {
        background-color: #fff;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
        color: #777;
      }
    }
    button.owl-prev {
      background-color: #fff;
      border-radius: 50%;
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 55px;
      height: 55px;
      position: absolute;
      border-radius: 50%;
      transition: all 0.4s;
      color: #777;
      font-size: 20px;
      &:hover {
        background-color: #fff;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
        color: #777;
      }
    }
    button.owl-prev {
      left: -5%;
    }
    button.owl-next {
      right: -5%;
    }
  }
`;

const CardWrapper = styled.div`
  border-radius: 10px;
  position: relative;
  height: 45rem;
  border-radius: 20px;
  overflow: hidden;
  &:hover {
    .ImgWrapper {
      img {
        transform: scale(1.15);
      }
    }
    .CardBottom {
      bottom: 0;
    }
  }
  .fs-10 {
    font-size: 11px;
  }
  .CardBottom {
    transition: all 0.6s;
    position: absolute;
    width: 100%;
    bottom: -100%;
    background-color: #fff;
    z-index: 300;
    padding: 2rem 1rem;
          @media (max-width:780px) {
        bottom:0;
      }
  }
  .ImgWrapper {
    overflow: hidden;
    position: absolute;
    height: 100%;
    width: 100%;
    .back {
      position: absolute;
      top: 0%;
      left: 0%;
      background-color: rgba(0, 0, 0, 0.4);
      width: 100%;
      height: 100%;
      border-radius: inherit;
    }
    img {
      overflow: hidden;
      transition: all 0.6s;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }
  }
`;
