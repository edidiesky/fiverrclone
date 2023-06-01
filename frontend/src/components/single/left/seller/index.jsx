import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Rating from "../../../common/Rating";
import { useSelector } from "react-redux";

export default function SellerInfo() {
  const { GigsDetails } = useSelector((store) => store.gigs);
  return (
    <SellerInfoContent className="flex w-100 column gap-2">
      <div className="top w-100 ">
        <div className="w-100 flex column gap-2">
          <h3 className="fs-20 text-bold text-dark">About the Seller</h3>
          <div className="flex item-center gap-2">
            <img
              src={GigsDetails?.sellerId?.image}
              alt=""
              style={{ width: "10rem", height: "10rem", borderRadius: "50%" }}
            />
            <div className="flex column item-start gap-2">
              <h4 className="fs-16 text-dark text-bold">
                {GigsDetails?.sellerId?.username}
              </h4>
              <div
                className="flex item-center gap-1 fs-18"
                style={{
                  paddingLeft: "1rem",
                }}
              >
                <Rating value={5} />
                <h4 className="fs-16 text-grey text-bold">{5} (101)</h4>
              </div>
              <div className="w-100 flex">
                <Link to={"/"} className="contactBtn fs-14 family1">
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* seller details and additional information */}
      <div
        className="w-100 flex column gap-1"
        style={{
          padding: "2rem",
          border: "1px solid rgba(0,0,0,.08)",
        }}
      >
        <ul
          className="radius1"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <li
            className="flex gap-1 text-grey2 fs-18 text-light column"
            style={{ width: "50%" }}
          >
            From <span className="block text-bold text-grey">{GigsDetails?.sellerId?.about?.from}</span>
          </li>
          <li className="flex gap-1 text-grey2 fs-18 text-light column">
            Member since{" "}
            <span className="block text-bold text-grey">Sep 2022</span>
          </li>
          <li
            className="flex gap-1 text-grey2 fs-18 text-light column"
            style={{ width: "50%" }}
          >
            Languages <span className="block text-bold text-grey">English</span>
          </li>
        </ul>
        <div
          className="py-2"
          style={{ borderTop: "1px solid rgba(0,0,0,.09)" }}
        >
          <p className="fs-18 text-light text-grey">
            {/* I’m a full-time graphic designer/art director with over a decade of
            professional experience. I provide the highest-quality graphic
            design: branding, logo design, photoshop editing, illustrations,
            typographic designs, posters, brochures, postcards, invitations, and
            folder design. As a highly motivated, dedicated, and skilled
            professional, I will make sure my designs and services are on par
            with your expectations. I strove deeper into the design field and
            took my talent to the field of graphic design as an independent
            contractor. Don't forget to SAVE my gig!! */}
            {GigsDetails?.sellerId?.about?.description}
          </p>
        </div>
      </div>
    </SellerInfoContent>
  );
}

const SellerInfoContent = styled.div`
  .contactBtn {
    padding: 1rem 2rem;
    border: 1px solid var(--dark-1);
    display: block;
    color: var(--dark-1);
    border-radius: 6px;
    &:hover {
      background-color: var(--dark-1);
      color: #fff;
      text-decoration: none;
    }
  }
`;
