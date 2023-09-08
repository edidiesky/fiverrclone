import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  clearDeleteGigModalAlert,
  DeleteGig,
  adminDeleteCustomer,
  clearUserAlertError,
} from "../../../Features";
import { RxCross2 } from "react-icons/rx";

export default function Delete({ type, click }) {
  const dropin = {
    hidden: {
      y: "-100vh",
      opacity: 0,
      transition: {
        delay: 0.5,
      },
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        damping: 26,
        stiffness: 600,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  // dispatch
  const dispatch = useDispatch();
  // get the cart alert
  const { GigsDetails } = useSelector((store) => store.gigs);
  const { userAlert, userDetails } = useSelector((store) => store.user);
  // open modal if type  === users
  if (type === "users") {
    return (
      <DeleteContainer
        as={motion.div}
        initial={{ opacity: 0, visibility: "hidden", duration: 0.6 }}
        exit={{ opacity: 0, visibility: "hidden", duration: 0.6 }}
        animate={{ opacity: 1, visibility: "visible", duration: 0.6 }}
      >
        <div
          className="backdrop"
          onClick={() => dispatch(clearUserAlertError())}
        ></div>
        <motion.div
          variants={dropin}
          initial="hidden"
          animate="visible"
          exit={"exit"}
          className={"deleteCard family1"}
        >
          <div
            className="cross"
            onClick={() => dispatch(clearUserAlertError())}
          >
            <RxCross2 />
          </div>
          <div className="deleteCardTop flex column gap-1">
            <h3 className="fs-30 text-center">
              Delete User?
              <span className="block family2 text-light fs-14">
                Are you sure you want to delete "{GigsDetails?.title}"?
                <br /> You can't undo this action.
              </span>
            </h3>
          </div>

          <div className="flex column gap-2">
            <button
              className="btn btn-1 fs-14 text-bold family2"
              onClick={() => dispatch(clearUserAlertError())}
            >
              Cancel
            </button>
            <button
              className="deleteBtn btn btn-2 fs-14 text-bold family2"
              onClick={() => dispatch(adminDeleteCustomer(userDetails?._id))}
            >
              Delete User
            </button>
          </div>
        </motion.div>
      </DeleteContainer>
    );
  }

  return (
    <DeleteContainer
      as={motion.div}
      initial={{ opacity: 0, visibility: "hidden", duration: 0.6 }}
      exit={{ opacity: 0, visibility: "hidden", duration: 0.6 }}
      animate={{ opacity: 1, visibility: "visible", duration: 0.6 }}
    >
      <div
        className="backdrop"
        onClick={() => dispatch(clearDeleteGigModalAlert())}
      ></div>
      <motion.div
        variants={dropin}
        initial="hidden"
        animate="visible"
        exit={"exit"}
        className={"deleteCard gap-4 family1"}
      >
        <div
          className="cross"
          onClick={() => dispatch(clearDeleteGigModalAlert())}
        >
          <RxCross2 />
        </div>
        <div className="deleteCardTop flex column gap-1">
          <h3 className="fs-30 text-center">
            Delete Gig?
            <span className="block family2 text-light fs-14">
              Are you sure you want to delete "{GigsDetails?.title}"?
              <br /> You can't undo this action.
            </span>
          </h3>
        </div>
        <div className="w-100 flex column gap-1">
          <button
            className="text-dark btn btn-1 fs-14 text-bold family2"
            onClick={() => dispatch(clearDeleteGigModalAlert())}
          >
            Cancel
          </button>
          <button
            className="deleteBtn btn btn-2 fs-14 text-bold family2"
            onClick={() => dispatch(DeleteGig(GigsDetails?._id))}
          >
            Delete Gig
          </button>
        </div>
      </motion.div>
    </DeleteContainer>
  );
}

const DeleteContainer = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;

  display: flex;
  z-index: 4900;
  align-items: center;
  justify-content: center;
  top: 0;
  .backdrop {
    background: rgba(0, 0, 0, 0.1);

    position: absolute;
    height: 100%;
    width: 100%;
  }
  .btn.btn-2 {
    background-color: var(--red);
    padding: 1.5rem !important;
    border-radius: 40px;

    cursor: pointer;
  }

  .btn.btn-1 {
    padding: 1rem 1.5rem !important;
    padding: 1.5rem !important;
    border-radius: 40px;
    background-color: transparent !important;
    color: var(--dark-1);
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;

    &:hover {
      background-color: var(--grey-hover) !important;
    }
  }
  .deleteCard {
    max-width: 600px;
    width: 360px;
    display: flex;
    flex-direction: column;
    background: var(--white);
    box-shadow: var(--shadow);
    position: relative;
    padding:3rem;
    border-radius: 20px;
    border-top-right-radius: 20px;
    @media (max-width: 980px) {
      width: 70%;
    }
    @media (max-width: 580px) {
      width: 90%;
    }
    .cross {
      position: absolute;
      right: 10px;
      top: 20px;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      &:hover {
        background: var(--grey-4);
      }
      svg {
        font-size: 20px;
      }
    }
  }
`;
