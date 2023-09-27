import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Rating from "../../../common/Rating";
import { useSelector } from "react-redux";

export default function Title() {
  const { GigsDetails } = useSelector((store) => store.gigs);
  return (
    <div>
      <div className="flex w-100 py-2 column item-start gap-1">
        <h2 className="fs-40 text-dark text-extra-bold">
          {GigsDetails?.title}
        </h2>
        {/* author pics */}
        <div className="w-100 flex gap-1 item-center">
          <img
            src={GigsDetails?.sellerId?.image}
            alt=""
            style={{
              width: "6rem",
              height: "6rem",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
          {/* author name */}
          <div className="flex column" style={{ gap: ".5rem" }}>
            <Link
              to={`/profile/${GigsDetails?.sellerId?.username}?sellerId=${GigsDetails?.sellerId?._id}`}
              className="link text-dark"
            >
              <h4 className="fs-20 family2 text-dark family2 text-extra-bold">
                {GigsDetails?.sellerId?.name}{" "}
                <span
                  style={{ marginLeft: "1px" }}
                  className="fs-14 family2 text-bold text-grey"
                >
                  @{GigsDetails?.sellerId?.username}
                </span>
              </h4>
            </Link>
            {/* level */}
            <div className="flex relative item-center">
              <h4
                style={{ paddingRight: "1rem", borderRight: "1px solid #777" }}
                className="fs-14 family2 text-grey text-bold"
              >
                {GigsDetails?.sellerId?.level}
              </h4>
              <div
                className="flex item-center gap-1 fs-16 family2"
                style={{ paddingLeft: "1rem" }}
              >
                <Rating value={4} /> 5{/* no of reviews */}
                <h4 className="fs-14 family2 text-grey text-light">(102)</h4>
              </div>
            </div>
          </div>
          {/* rating */}
        </div>
      </div>
    </div>
  );
}
