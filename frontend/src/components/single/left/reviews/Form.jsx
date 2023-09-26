import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  clearReviewsAlert,
  createReviewGigs,
  createReviews,
} from "../../../../Features";
import Message from "../../../loaders/Message";
import SelectReview from "./SelectReview";

const Form = ({ id }) => {
const [communicationreview, setCommunicationReview] = useState(0)
const [servicereview, setServiceReview] = useState(0);
const [recommendreview, setRecommendReview] = useState(0);
const avaerageRating = ((communicationreview + servicereview + recommendreview) / 3).toFixed(1)
// console.log(avaerageRating, communicationreview, servicereview, recommendreview)  


  const [description, setDescription] = useState('')
  const {
    reviews,
    reviewSuccess,
    showAlert,
    alertText,
    alertType,
  } = useSelector((store) => store.reviews);
  const dispatch = useDispatch();

  const Reviewdata = { description, rating: parseInt(avaerageRating) };
  // console.log(Reviewdata);
  const handleReview = (e) => {
    dispatch(createReviews({ Reviewdata, id }));
    setServiceReview(0)
    setRecommendReview(0)
    setCommunicationReview(0)
    setDescription('')
  };

  const { userInfo } = useSelector((store) => store.user);


  useEffect(() => {
    if (reviewSuccess) {
      setTimeout(() => {
        dispatch(clearReviewsAlert());
      }, 5000);
    }
  }, [reviewSuccess]);

  return (
    <FormWrapper className="flex w-100 gap-3 column">
      <Message
        alertType={alertType}
        showAlert={showAlert}
        alertText={alertText}
        handleClearAlert={dispatch(clearReviewsAlert())}
      />
      <h3 className="fs-24 text-extra-bold text-grey">
        Share your experience with the community, to help them make better
        decisions
      </h3>
      <div className="flex w-100 column gap-1">
        <div className="flex item-center justify-space w-100 gap-2">
          <h4 className="fs-20 text-extra-bold text-grey">
            Communication with seller
            <span
              style={{ fontSize: "13px" }}
              className="block family2 text-light"
            >
              How responsive was the seller during this process?
            </span>
          </h4>
          <SelectReview
            setTab={setCommunicationReview}
            tab={communicationreview}
          />
        </div>
        {/* service */}
        <div className="flex item-center justify-space w-100 gap-2">
          <h4 className="fs-20 text-extra-bold text-grey">
            Service as described
            <span
              style={{ fontSize: "13px" }}
              className="block family2 text-light"
            >
              Did the result match the gig description?
            </span>
          </h4>
          <SelectReview setTab={setServiceReview} tab={servicereview} />
        </div>
        {/* service */}
        <div className="flex item-center justify-space w-100 gap-2">
          <h4 className="fs-20 text-extra-bold text-grey">
            Buy Again or Recommend
            <span
              style={{ fontSize: "13px" }}
              className="block family2 text-light"
            >
              Would you recomend buying this Gig?
            </span>
          </h4>
          <SelectReview setTab={setRecommendReview} tab={recommendreview} />
        </div>
      </div>
      <label
        htmlFor="comments"
        className="fs-20 flex column gap-1 text-bold text-grey"
      >
        What was it like working with this seller?
        <textarea
          id="comments"
          className="textarea"
          placeholder="What did you like or did'nt like about the seller's service? share as many details as you can help other buyers make the right decisions fro their needs."
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <div className="w-100 py-2">
        <button
          className="btn fs-18 py-1 px-2 text-white text-bold"
          style={{ padding: "1.5rem 3rem" }}
          onClick={handleReview}
        >
          Create review
        </button>
      </div>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  .wrapper {
    @media (max-width: 480px) {
      flex-direction: column;
    }
  }
  .btn {
    background-color: var(--green);
    color: #fff;
    border: none;
    cursor: pointer;
  }
`;

export default Form;
