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
  const reviewOptions = [
    { text: "select your rating", value: "" },
    { text: "5- Excellent", value: 5 },
    { text: "4- Very Good", value: 4 },
    { text: "3- Good", value: 3 },
    { text: "2- Average", value: 2 },
    { text: "1- Poor", value: 1 },
  ];
  const [form, setForm] = useState({
    description: "",
    rating: 0,
    email: "",
    username: "",
  });
  const { description, rating } = form;
  const {
    reviews,
    reviewSuccess,
    showAlert,
    alertText,
    alertType,
  } = useSelector((store) => store.reviews);
  const dispatch = useDispatch();

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const Reviewdata = { description, rating: parseInt(rating) };
  // console.log(Reviewdata);
  const handleReview = (e) => {
    dispatch(createReviews({ Reviewdata, id }));
  };

  const { userInfo } = useSelector((store) => store.user);

  useEffect(() => {
    if (userInfo) {
      const { email, username } = userInfo;
      setForm({ email, username });
    }
  }, [userInfo, setForm]);

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
        <div className="flex item-center justify-space w-100">
          <h4 className="fs-20 text-extra-bold text-grey">
            Communication with seller
            <span
              style={{ fontSize: "13px" }}
              className="block family2 text-light"
            >
              How responsive was the seller during this process?
            </span>
          </h4>
          <SelectReview />
        </div>
        {/* service */}
        <div className="flex item-center justify-space w-100">
          <h4 className="fs-20 text-extra-bold text-grey">
            Service as described
            <span
              style={{ fontSize: "13px" }}
              className="block family2 text-light"
            >
              Did the result match the gig description?
            </span>
          </h4>
          <SelectReview />
        </div>
        {/* service */}
        <div className="flex item-center justify-space w-100">
          <h4 className="fs-20 text-extra-bold text-grey">
            Buy Again or Recommend
            <span
              style={{ fontSize: "13px" }}
              className="block family2 text-light"
            >
              Would you recomend buying this Gig?
            </span>
          </h4>
          <SelectReview />
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
          onChange={handleForm}
          required
        />
      </label>
      {/* <div className="flex w-100 column gap-1">
        <label
          htmlFor="comments"
          className="fs-18 flex column gap-1 text-light text-dark"
        >
          Comments
          <textarea
            id="comments"
            className="textarea"
            placeholder="Send a message"
            name="description"
            onChange={handleForm}
            required
          />
        </label>
        <div className="flex wrapper w-100 gap-1 item-center">
          <label
            htmlFor="name"
            className="w-100 text-light fs-18 column flex gap-1 text-dark"
          >
            Name
            <input
              id="name"
              className="input inputs family1"
              type="text"
              name="username"
              onChange={handleForm}
              value={form.username}
              placeholder="Name (required)"
            />
          </label>
          <label
            htmlFor="email"
            className="w-100 text-light fs-18 column flex gap-1 text-dark"
          >
            Email
            <input
              id="email"
              className="input inputs family1"
              type="text"
              placeholder="Email (required)"
              name="email"
              value={form.email}
              onChange={handleForm}
            />
          </label>
          <label
            htmlFor="select"
            className="w-100 flex column gap-1 text-light fs-18 text-dark"
          >
            Rating
            <select
              id="select"
              className="select"
              name="rating"
              onChange={handleForm}
              placeholder="Choose one"
            >
              {reviewOptions.map((x, index) => {
                return (
                  <option value={x.value} key={index}>
                    {x.text}
                  </option>
                );
              })}
            </select>
          </label>
        </div>
      </div> */}
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
