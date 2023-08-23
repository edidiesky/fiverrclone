import React from "react";
import { FaLocationArrow, FaUser } from "react-icons/fa";
import moment from "moment";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Rating from "../../../common/Rating";
import Camera from "../../../common/svg/Camera";
import { useSelector, useDispatch } from "react-redux";
import { BsFillPencilFill } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { SiMinutemailer } from "react-icons/si";
import { onProfileModal } from "../../../../Features/user/userSlice";

export default function UserTopInfo({ image, setImage }) {
  const { userInfo, profilemodal } = useSelector((store) => store.user);
  const { userDetails } = useSelector((store) => store.user);
  const dataJoined = moment(userDetails?.createdAt).format("MMMM Do YYYY");

  const checkifitUser = userInfo?.name === userDetails?.name;

  const profiledata = [
    {
      icons: <FaLocationArrow />,
      text: "from",
      subtext: `${userDetails?.about?.from}`,
    },
    {
      icons: <FaUser />,
      text: "Member since",
      subtext: `${dataJoined}`,
    },
    {
      icons: <BiTime />,
      text: "Avg. Response Time",
      subtext: "1 hour",
    },
    {
      icons: <SiMinutemailer />,
      text: "Last Delivery",
      subtext: "13 hours",
    },
  ];
  const dispatch = useDispatch();

  const handleFileUpload = async (e) => {
    // get the file
    console.log("hello");
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "fiverr");
    console.log("hello");

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
        {checkifitUser ? (
          <label
            className="ProfileImage w-100 flex item-center justify-center cardImage"
            htmlFor="upload"
          >
            <div className="ProfileImage w-100 flex item-center justify-center cardImage">
              {userDetails?.image ? (
                <img src={userDetails?.image} alt="" className="image" />
              ) : (
                <div className="image grey fs-45 text-white flex item-center justify-center">
                  {userDetails?.username.charAt(0)}
                </div>
              )}
            </div>
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
          <div className="ProfileImage w-100 flex item-center justify-center cardImage">
            {userDetails?.image ? (
              <img src={userDetails?.image} alt="" className="image" />
            ) : (
              <div className="image grey fs-45 text-white flex item-center justify-center">
                {userDetails?.username.charAt(0)}
              </div>
            )}
          </div>
        )}

        {/* profile name */}
        <div className="fs-24 text-center text-dark">
          {/* name */}
          {userDetails?.name}
          <span className="fs-18 block text-center text-light text-grey">
            @{userDetails?.username}
          </span>

          {/* role */}
          <span className="block text-grey py-1 text-light fs-18">
            {userDetails?.about.occupation
              ? userDetails?.about.occupation
              : "Please add a short description of yourself"}
          </span>
        </div>
        {checkifitUser && (
          <>
            <div className="w-100 text-center">
              <BsFillPencilFill
                onClick={() => dispatch(onProfileModal())}
                fontSize={"20px"}
                color="var(--grey-1)"
              />
            </div>
            <Link className="contactBtn family1">Preview Fiverr Profile</Link>
          </>
        )}
      </div>

      {/* bototm */}
      <ul
        style={{
          padding: "1.4rem 0",
          borderTop: "1px solid rgba(0,0,0,.1)",
          gap: "1.5rem",
        }}
        className="w-85 auto py-2 flex column"
      >
        {profiledata.map((x, index) => {
          return (
            <li
              key={index}
              className="flex family1 w-100 fs-16 text-grey text-light justify-space item-center"
            >
              <span className="flex item-center gap-2">
                {x.icons} {x.text}
              </span>
              <span className="text-bold">{x.subtext}</span>
            </li>
          );
        })}
      </ul>
    </UserTopInfoContent>
  );
}

const UserTopInfoContent = styled.div`
  padding: 3.5rem 2rem;
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
