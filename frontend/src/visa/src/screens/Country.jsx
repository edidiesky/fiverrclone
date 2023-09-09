import React, { useEffect } from "react";
import styled from "styled-components";
import { countryData } from "../data/Country";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToCart,
  getSingleVisaDetails,
  getSingleinvestmentDetails,
} from "../Features";
import Message from "../components/loaders/Message";

export default function Country() {
  const { id } = useParams();
  const { showAlert, alertText, alertType } = useSelector((store) => store.bag);
  const dispatch = useDispatch();
  const { investmentDetails } = useSelector((store) => store.investment);
  const { visaDetails } = useSelector((store) => store.visa);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    if (id) {
      dispatch(getSingleinvestmentDetails(id));
      dispatch(getSingleVisaDetails(id));
    }
  }, [id]);

  const cartVisa = {
    title: visaDetails?.title,
    image: visaDetails?.image,
    price: visaDetails?.price,
    _id: visaDetails?._id,
  };
  const investmentVisa = {
    title: investmentDetails?.title,
    image: investmentDetails?.image,
    price: investmentDetails?.price,
    _id: investmentDetails?._id,
  };

  // console.log(investmentVisa, cartVisa);

  const addToCart = (x) => {
    dispatch(
      addProductToCart(
        investmentDetails
          ? { ...investmentVisa, country: x.title }
          : { ...cartVisa, country: x.title }
      )
    );
  };

  return (
    <CountryContent>
      {
        <Message
          showAlert={showAlert}
          alertText={alertText}
          alertType={alertType}
        />
      }
      <div className="w-90 py-4 auto flex column gap-4">
        <h1 className="fs-64 text-light family1">
          Select Your Country
          <span className="block fs-20 text-light" style={{ fontSize: "24px" }}>
            We have over 10+ countries to choose from
          </span>
        </h1>
        <div className="w-100 grid grid-auto">
          {countryData.map((x, index) => {
            return (
              <div className="w-100 Card" key={index}>
                <div className="w-100 ImgWrapper">
                  <img src={x?.image} alt="" className="w-100" />
                  <div className="back"></div>
                </div>

                <div className="CardBottom w-100 flex py-1 gap-2 column">
                  <div
                    className="w-100 flex justify-center gap-2 column item-center"
                    style={{
                      justifyContent: "center",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <h4 className="text-white fs-24 text-bold w-100 text-center">
                      {x.title}
                    </h4>
                    <div className="btn fs-12" onClick={() => addToCart(x)}>
                      Choose Your Destination
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </CountryContent>
  );
}

const CountryContent = styled.div`
  padding-top: 8rem;
  .grid-auto {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  .Card {
    border-radius: 10px;
    position: relative;
    height: 35rem;
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
      background-color: #04173a9e;
      z-index: 300;
      padding: 3rem 1rem;
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
  h1 {
    font-size: 64px;
    @media (max-width:680px) {
      font-size:4.5rem;
    }
  }
  .imageWrapper {
    height: 60vh;
    position: relative;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
