import React from "react";
import { FaLocationArrow, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Rating from "../../../common/Rating";
import Camera from "../../../common/svg/Camera";
import { useSelector, useDispatch } from "react-redux";
import { BsFillPencilFill } from "react-icons/bs";
import { onProfileModal } from "../../../../Features/user/userSlice";

export default function UserTopInfo({ image, setImage }) {
  const { userInfo } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleFileUpload = async (e) => {
    // get the file
    console.log('hello');
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "fiverr");
    console.log('hello');

    // try {
    //   const { url } = await axios.post(
    //     "https://api.cloudinary.com/v1_1/dl93zl9fn/image/upload",
    //     formData
    //   );
    //   console.log(url);
    //   return url;
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <UserTopInfoContent>
      {/* top */}
      <div className="w-100 flex item-center justify-center column gap-1">
        {/* images */}
        {/* check if there is any image else seet the image folder */}
        {userInfo?.image ? (
          <label
            className="ProfileImage w-100 flex item-center justify-center cardImage"
            htmlFor="upload"
          >
            <img src={userInfo?.image} alt="" className="image" />
            <div className="image grey flex item-center justify-center">
              <Camera />
            </div>
            <input
              type="file"
              id="upload"
              placeholder="Gig Image"
              autoComplete="off"
              style={{ display: "none" }}
              onChange={handleFileUpload}
              multiple
            />
          </label>
        ) : (
          <label
            className="ProfileImage w-100 flex item-center justify-center cardImage"
            htmlFor="upload"
          >
            <div className="image grey fs-45 text-white flex item-center justify-center">
              {userInfo?.username.charAt(0)}
            </div>
            <div className="image dark flex item-center justify-center">
              <Camera />
            </div>
            <input
              type="file"
              id="upload"
              placeholder="Gig Image"
              autoComplete="off"
              style={{ display: "none" }}
              multiple
            />
          </label>
        )}

        {/* profile name */}
        <div className="fs-24 text-center text-dark">
          {/* name */}
          {userInfo?.username}
          {/* role */}
          <span className="block text-grey text-light fs-16">
            {userInfo?.about.information
              ? userInfo?.about.information
              : "Please add a short description of yourself"}
          </span>
        </div>
        <div className="w-100 text-center">
          <BsFillPencilFill
            onClick={() => dispatch(onProfileModal())}
            fontSize={"20px"}
            color="var(--grey-1)"
          />
        </div>
        <Link className="contactBtn family1">Preview Fiverr Profile</Link>
      </div>

      {/* bototm */}
      <ul className="w-100 py-2 flex column gap-1">
        <li className="flex family1 w-100 fs-14 text-grey text-light justify-space item-center">
          <span className="flex item-center gap-2">
            <FaLocationArrow /> From
          </span>
          <span className="text-bold">
            {userInfo?.about.from ? userInfo?.about.from : "Unknown"}
          </span>
        </li>
        <li className="flex family1 w-100 fs-14 text-grey text-light justify-space item-center">
          <span className="flex item-center gap-2">
            <FaUser /> Member since
          </span>
          <span className="text-bold">{userInfo?.createdAt}</span>
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
    object-fit: cover;
    background-color: rgba(0, 0, 0, 0.4);

    &:hover .image {
      &.dark {
        opacity: 1;
        visibility: visible;
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
    object-fit: cover;
    cursor: pointer;
    font-size: 85px;
    display: flex;
    align-items: center;
    justify-content: center;

    &.grey {
      background-color: rgba(0, 0, 0, 0.3);
    }
    &.dark {
      background-color: rgba(0, 0, 0, 0.6);
      opacity: 0;
      visibility: hidden;
    }
  }
`;
