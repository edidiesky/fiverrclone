import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Details from "./Details";
import Summary from "./Summary";
import { useDispatch, useSelector } from "react-redux";
import { getSellerReviews } from "../../../../Features";
import Form from "./Form";

export default function ReviewsInfo({ id }) {
  const dispatch = useDispatch();
  // console.log(id);
  const { reviewSuccess } = useSelector((store) => store.reviews);

  useEffect(() => {
    dispatch(getSellerReviews(id));
    if(reviewSuccess) {
      dispatch(getSellerReviews(id));
    }
  }, [id, dispatch, reviewSuccess]);
  const { GigsDetails } = useSelector((store) => store.gigs);
  return (
    <ReviewsInfoContent className="flex column gap-2">
      <Details />
      <Summary />
      <Form id={id} />
      <div className="w-100 column gap-2 flex py-4">
        <h3 className="fs-20 text-bold text-dark">Related Tags</h3>
        <div className="w-100 linkwrapper flex item-center gap-2">
          {GigsDetails?.category?.map((x,index) => {
            return (
              <Link to={"/"} key={index} className="a family1">
                {x}
              </Link>
            );
          })}
        </div>
      </div>
    </ReviewsInfoContent>
  );
}

const ReviewsInfoContent = styled.div`
  .linkwrapper {
    flex-wrap: wrap;
  }
  a {
    padding: 0.7rem 2rem;
    border: 1px solid rgba(0, 0, 0, 0.08);
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--grey-1);
    border-radius: 4px;
  }
`;
