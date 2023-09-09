import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllinvestment,
  addProductToCart,
  clearCartMessage,
} from "../../Features";
import Message from "../loaders/Message";

export default function ApartmentsIndex() {
  const dispatch = useDispatch();

  const { investment } = useSelector((store) => store.investment);
  const { bag, showAlert, alertText, alertType } = useSelector(
    (store) => store.bag
  );
  useEffect(() => {
    dispatch(getAllinvestment());
  }, []);

  return (
    <ApartmentContainer className="flex column gap-6 item-start">
      <div className="apartmentWrapper w-90 py-6 auto">
        <div className="w-100 flex column gap-3 item-start">
          <div className="w-100 hidden">
            <h2
              className="text-light family1 fs-40"
              data-aos="fade-up"
              data-aos-duration="1100"
              data-aos-delay="200"
            >
              Listing for <strong className="text-bold text-blue">Sale</strong>
            </h2>
          </div>
          {/* houses for sale */}
          <div className="houseList grid-3 grid-gap2 w-100">
            {investment?.map((x, index) => {
              return (
                <div className="w-100 hidden">
                  <div
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
                      <div className="w-100 px-3 flex column gap-2">
                        <h3 className="text-dark text-light capitalize family1 text-bold fs-18">
                          Category:{" "}
                          <span className="text-bold">{x?.title}</span>
                        </h3>
                        <div className="w-100">
                          <Link to={`/country/${x._id}`} className="btn">
                            Choose Destination
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* sidebar */}
        <div className="w-100 flex column gap-3 item-start">
          <div className="w-100 hidden">
            <h3
              className="text-bold fs-24"
              data-aos="fade-up"
              data-aos-duration="1100"
              data-aos-delay="200"
            >
              Special Offers
            </h3>
          </div>
          <div className="w-100 hidden">
            <div
              className="w-100 banner1"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="300"
            >
              <div className="back"></div>
              <img src="img/jet_1.jpg" alt="" className="img w-100" />
              <header className="w-100 h-100 px-3 flex item-start justify-center column gap-1">
                <h4 className="fs-20 text-bold text-white start w-100">
                  Amazing Jet Collection Soon
                  <span className="block fs-20 family1 text-white text-light pt-1">
                    FROM $45,000
                  </span>
                </h4>
                <button className="btn-1 py-1 px-3 blue text-white family1 fs-16 text-light uppercase">
                  View Soon
                </button>
              </header>
            </div>
          </div>
          <div className="w-100 hidden">
            <div
              className="w-100 banner1"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="300"
            >
              <div className="back"></div>
              <img src="img/house_1.jpg" alt="" className="img w-100" />
              <header className="w-100 h-100 px-3 flex item-start justify-center column gap-1">
                <h4 className="fs-20 text-bold text-white start w-100">
                  Amazing Houses Collection Soon
                  <span className="block fs-16 family1 text-white text-bold pt-1">
                    FROM $100,000
                  </span>
                </h4>
                <button className="btn-1 py-1 px-3 blue text-white fs-16 family1 uppercase">
                  View Soon
                </button>
              </header>
            </div>
          </div>
        </div>
      </div>
    </ApartmentContainer>
  );
}

const ApartmentContainer = styled.div`
  padding: 7rem 0;
  background-color: #f7f7f7;
  .btn-1 {
    border-radius: 30px;
    font-size: 15px;
  }
  .grid-3 {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    @media (max-width: 980px) {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
  }
  .item-center {
    @media (max-width: 980px) {
      align-items: center;
    }
  }
  .btn {
    font-size: 0.9rem;
    padding: 0.6rem 2rem;
  }
  .inputWrapper {
    width: 100%;
    input {
      border: none;
      outline: none;
      font-size: 1.6rem;
      font-weight: 600;
      background-color: #fff;
      padding: 1.4rem;
      width: 100%;
      border-radius: 10px;
      font-weight: 400;
    }
  }
  .letter {
    background-color: #c1bebe77;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    p {
      width: 30%;
      text-align: start;
      font-size: 12px;
    }
  }
  .Card {
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
  }
  .banner1 {
    position: relative;
    height: 38rem;
    border-radius: 10px;
    .img {
      position: absolute;
      top: 0;
      height: 100%;
      width: 100%;
      border-radius: 10px;
    }
    header {
      position: relative;
      z-index: 600;
    }
  }
  .apartmentWrapper {
    display: grid;
    grid-template-columns: 1fr 20vw;
    grid-gap: 2rem;
    grid-row-gap: 8rem;
    @media (max-width: 980px) {
      grid-template-columns: 1fr;
    }
  }
  .back {
    position: absolute;
    top: 0%;
    left: 0%;
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
    z-index: 40;
    border-radius: 10px;
  }
`;
