import React from "react";
import styled from "styled-components";
import { projectData } from "../../../data";
import { sellerReview } from "../../../data/Reviews";
import { ReviewCard, ReviewDetails } from "../../common";
import Card from "../../common/Card";
import Head from "../../common/Head";
import Rating from "../../common/Rating";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { clearGigsAlert, getAllGigs } from "../../../Features";
import { getUserId } from "../../../Features/gigs/gigsSlice";

export default function ProfileRightIndex() {
  // let userInfo = "seller";
  const { sellerId, Gigs } = useSelector((store) => store.gigs);
  const dispatch = useDispatch();
  const { userInfo, userDetails, profilemodal } = useSelector(
    (store) => store.user
  );

  return (
    <ProfileRightIndexContent>
      <div className="w-100 flex w-90 gap-2 column">
        <Head text={`${userDetails?.name} Gigs`} />
        {/* seller Gigs */}
        <div className="w-100 gigs">
          {Gigs?.slice(0, 4)?.map((x) => {
            return <Card x={x} />;
          })}
        </div>
        {/* seller reviews */}
        {/* review count */}
        {/* <h5 className="family1 py-1 fs-16 text-dark flex item-center gap-1">
          255 reviews for this seller
          <Rating value={5} />
          <div className="flex text-secondary">5</div>
        </h5> */}
        {/* <ReviewDetails />
        <div className="py-2 flex column gap-2">
          {sellerReview.map((x) => {
            return <ReviewCard x={x} />;
          })}
        </div> */}
      </div>
    </ProfileRightIndexContent>
  );
}

const ProfileRightIndexContent = styled.div`
    width: 100%;

  .gigs {
    grid-template-columns: repeat(3, 1fr);
    display: grid;
    width: 100%;
    grid-gap: 3rem;
    @media (max-width: 980px) {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
  }
`;

const UserProfileRightIndexContent = styled.div`
  padding: 6rem 0;
  width: 90%;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.3);
  @media (max-width: 780px) {
    width: 100%;
  }
`;
