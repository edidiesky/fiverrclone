import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Rating from "../../../common/Rating";
import { useSelector } from "react-redux";

export default function Title() {
  const { GigsDetails } = useSelector((store) => store.gigs);
  return (
    <div>
      <div className="flex w-100 column item-start gap-1">
        <h2 className="fs-30 text-dark text-extra-bold">
          {GigsDetails?.title}
        </h2>
        {/* author pics */}
        <div
          className="w-100 flex gap-1 item-center"
          style={{
            paddingBottom: "2rem",
            borderBottom: "1px solid rgba(0,0,0,.1)",
          }}
        >
          <img src={GigsDetails?.sellerId?.image} alt="" className="avatar" />
          {/* author name */}
          <Link to={"/"}>
            <h4 className="fs-16 text-bold text-dark">
              {GigsDetails?.sellerId?.username}
            </h4>
          </Link>
          {/* level */}
          <div className="flex relative">
            <h4 className="fs-16 text-grey text-light">{GigsDetails?.sellerId?.level}</h4>
          </div>
          {/* rating */}
          <div
            className="flex item-center gap-1 fs-16"
            style={{ paddingLeft: "1rem", borderLeft: "1px solid #777" }}
          >
            <Rating value={4} /> 5{/* no of reviews */}
            <h4 className="fs-16 text-grey text-light">(102)</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
