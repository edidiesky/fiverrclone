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
          <div className="deleteCardTop">
            <h3>Delete User?</h3>
            <p>
              Are you sure you want to delete "{userDetails?.firstname}" from
              the database?
              <br /> You can't undo this action.
            </p>
          </div>

          <div className="deleteCardBottom">
            <button onClick={() => dispatch(clearUserAlertError())}>
              Cancel
            </button>
            <button
              className="deleteBtn"
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
        className={"deleteCard family1"}
      >
        <div
          className="cross"
          onClick={() => dispatch(clearDeleteGigModalAlert())}
        >
          <RxCross2 />
        </div>
        <div className="deleteCardTop">
          <h3>Delete Gig?</h3>
          <p>
            Are you sure you want to delete "{GigsDetails?.title}"?
            <br /> You can't undo this action.
          </p>
        </div>
        <div className="deleteCardBottom">
          <button
            className="text-dark"
            onClick={() => dispatch(clearDeleteGigModalAlert())}
          >
            Cancel
          </button>
          <button
            className="deleteBtn"
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
    background: rgba(0, 0, 0, 0.3);

    position: absolute;
    height: 100%;
    width: 100%;
  }
  .deleteCard {
    /* width: clamp(60%, 200px, 100%); */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: var(--white);
    padding: 4rem 3rem;
    gap: 2rem;
    border-radius: 6px;
    box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.1);
    position: relative;
    @media (max-width: 380px) {
      padding: 4rem 3rem;
      width: 250px;
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
    .deleteCardBottom {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 2rem;
      gap: 1rem;
      button {
        padding: 1.2rem 2rem;
        border: none;
        font-size: 1.2rem;
        font-weight: 600;
        background: var(--grey-4);
        color: #000;
        outline: none;
        border-radius: 40px;
        cursor: pointer;
        &:hover {
          background: var(--grey-3);
          color: var(--text-color);
        }
        &.deleteBtn {
          background: var(--red);
          &:hover {
            opacity: 0.8;
            color: #fff;
          }
        }
      }
    }
    .deleteCardCenter {
      padding: 2rem;
      width: 100%;
      background: var(--grey-3);
      border-left: 5px solid var(--red);
      display: flex;
      align-items: center;
      gap: 2rem;
      svg {
        font-size: 2rem;
        color: var(--red);
      }
      h4 {
        font-size: 1.6rem;
        font-weight: 400;
        color: var(--red);
        .deleteSpan {
          font-weight: 600;
          display: block;
          padding-bottom: 1rem;
        }
      }
    }

    .deleteCardTop {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 1.4rem;
      h3 {
        font-size: 1.8rem;
        font-weight: 600;
        color: var(--text-color);
      }
      p {
        font-size: 1.3rem;
        font-weight: 400;
        color: var(--grey);
        text-align: center;
      }
    }
  }
`;
