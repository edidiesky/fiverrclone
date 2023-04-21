import React from "react";
import { FaLocationArrow, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Rating from "../../common/Rating";

export default function SellerInfoTop() {
  return (
    <SellerInfoTopContent>
      {/* top */}
      <div className="w-100 flex item-center justify-center column gap-1">
        <img
          src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/27adb135f2b57c4298fbf62c2a6f6425-806712771571943595909/JPEG_20191025_025953_4527436476841105584.jpg"
          alt=""
          className="image"
        />
        <Link to={"/"} className="fs-24 text-center text-dark">
          {/* name */}
          johncatangay
          {/* role */}
          <span className="block text-grey text-light fs-16">
            Aerial Roof Measurement Expert
          </span>
        </Link>
        <div className="w-100 flex item-center justify-center fs-18">
          <Rating value={5} />
        </div>
        <div className="w-100 flex item-center gap-2">
          <Link className="contactBtn green family1">Contact Me</Link>
          <Link className="contactBtn family1">Contact Me</Link>
        </div>
      </div>
      {/* bototm */}
      <ul className="w-100 py-2 flex column gap-1">
        <li className="flex w-100 fs-16 text-grey text-light justify-space item-center">
          <span className="flex item-center gap-2">
            <FaLocationArrow /> From
          </span>
          <span className="text-bold">Philippines</span>
        </li>
        <li className="flex w-100 fs-16 text-grey text-light justify-space item-center">
          <span className="flex item-center gap-2">
            <FaUser /> Member since
          </span>
          <span className="text-bold">Oct 2019</span>
        </li>
        <li className="flex w-100 fs-16 text-grey text-light justify-space item-center">
          <span className="flex item-center gap-2">
            <FaUser /> Last Delivery
          </span>
          <span className="text-bold">1 Day</span>
        </li>
      </ul>
    </SellerInfoTopContent>
  );
}

const SellerInfoTopContent = styled.div`
  padding: 2rem;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.08);
  a:hover {
    text-decoration: underline;
  }

  .image {
    width: 18rem;
    height: 18rem;
    border-radius: 50%;
  }
`;
