import React, { useEffect } from "react";
import SingleLeftIndex from "./left";
import RightIndex from "./right";
import styled from "styled-components";
import { Header } from "../common";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleGigsDetails } from "../../Features";
import LoaderIndex from "../loaders";

export default function SingleIndex() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { gigsIsLoading } = useSelector((store) => store.gigs);
  useEffect(() => {
    dispatch(getSingleGigsDetails(id));
  }, [id, dispatch]);

  return (
    <SingleIndexContent>
      {/* contact Btn */}
      <div className="messageBtn flex item-start gap-2 fs-16">
        <img
          src="https://fiverr-res.cloudinary.com/image/upload/t_profile_small,q_auto,f_auto/v1/attachments/profile/photo/ed16a994fb873e0815435aa19250a098-1663604096116/614b9a69-0365-4a0e-a076-f47392dd383b.jpg"
          alt=""
          className="avatar"
        />
        <h4 className="fs-20 text-grey text-bold">
          Message VanillaATTA
          <div className="flex item-center gap-1">
            <span className="fs-14 text-light text-grey">Away</span>
            <span className="fs-14 text-light text-grey">Average Response time</span>
            <span className="fs-14 text-extra-bold text-grey">1hr</span>
          </div>
        </h4>
      </div>
      {gigsIsLoading ? (
        <LoaderIndex />
      ) : (
        <>
          <Header />
          <div className="w-90 auto py-4 grid grid-auto grid-gap4">
            <SingleLeftIndex id={id} />
            <RightIndex />
          </div>
        </>
      )}
    </SingleIndexContent>
  );
}

const SingleIndexContent = styled.div`
  width: 100%;

  .messageBtn {
    position: fixed;
    bottom: 5%;
    background-color: #fff;
    left: 3%;
    z-index: 2000;
    padding: 1rem;
    min-width: 300px;
    border-radius: 100px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    .avatar {
      width: 5rem !important;
      height: 5rem !important;
    }
  }
  .grid-auto {
    display: grid;
    padding: 3rem;
    grid-template-columns: 1fr 33.6%;
    grid-gap: 7rem;
    @media (min-width: 1500px) {
      grid-template-columns: 1fr 33.6%;
    }
    @media (max-width: 980px) {
      grid-template-columns: 1fr;
      display: flex;
      padding: 3rem 0;
      flex-direction: column-reverse;
    }
  }
`;
