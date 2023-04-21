import React from "react";
import { FaLocationArrow, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Rating from "../../../common/Rating";
import Camera from "../../../common/svg/Camera";

export default function UserTopInfo() {
  return (
    <UserTopInfoContent>
      {/* top */}
      <div className="w-100 flex item-center justify-center column gap-1">
        {/* images */}
        {/* <img
          src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/27adb135f2b57c4298fbf62c2a6f6425-806712771571943595909/JPEG_20191025_025953_4527436476841105584.jpg"
          alt=""
          className="image"
        /> */}
        {/* profile name */}

        {/* profile image */}
        <div className="w-100 ProfileImage flex item-center justify-center cardImage">
          <div className="image dark flex item-center justify-center">
            <Camera/>
          </div>
          <div className="image grey fs-35 text-grey flex item-center justify-center">
            E
          </div>
        </div>

        <Link to={"/"} className="fs-24 text-center text-dark">
          {/* name */}
          johncatangay
          {/* role */}
          <span className="block text-grey text-light fs-16">
            Aerial Roof Measurement Expert
          </span>
        </Link>
        {/* rating */}
        {/* <div className="w-100 flex item-center justify-center fs-18">
          <Rating value={5} />
        </div> */}
        {/* contact button */}
        {/* <div className="w-100 flex item-center gap-2">
          <Link className="contactBtn green family1">Contact Me</Link>
          <Link className="contactBtn family1">Contact Me</Link>
        </div> */}
        {/* previw button */}
        <Link className="contactBtn family1">Preview Fiverr Profile</Link>
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
    </UserTopInfoContent>
  );
}

const UserTopInfoContent = styled.div`
  padding: 2rem;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background-color: #fff;
  a:hover {
    text-decoration: underline;
  }
  .images {
    width: 6rem;
    height: 6rem;
    fill: #fff;
  }
  .ProfileImage {
    position: relative;
    width: 16rem;
    height: 16rem;
    border-radius: 50%;
    z-index: 300;
    &:hover .image {
      &.dark {
        opacity: 1;
        visibility: visible;
      }
      &.grey {
        opacity: 0;
        visibility: hidden;
      }
    }
  }

  .image {
    width: 16rem;
    height: 16rem;
    border-radius: 50%;
    transition: all 0.4s;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);

    &.grey {
      background-color: var(--light-grey);
    }
    &.dark {
      background-color: var(--grey-1);
      opacity: 0;
      visibility: hidden;
    }
  }
`;
