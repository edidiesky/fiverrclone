import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
// import {
//   clearDeleteGigModalAlert,
//   DeleteGig,
//   adminDeleteCustomer,
//   clearUserAlertError,
// } from "../../../Features";
import { RxCross2 } from "react-icons/rx";
import {
  clearUserAlertError,
  offAuthModal,
} from "../../Features/user/userSlice";
import Input from "../forms/Input";

export default function AuthModal({ type, click }) {
  const inputData = [
    {
      id: 1,
      name: "email",
      placeholder: "example@site.com",
      type: "email",
      text: "Email",
      errorMessage: "It should be a valid email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      placeholder: "Minimum 8 Characters",
      type: "password",
      text: "password",
      errorMessage:
        "Password should be 8-20 characters Long and should include 1 letter and 1 special Character",
      required: true,
    },
  ];
  const inputData2 = [
    {
      id: 1,
      name: "username",
      placeholder: "example@site.com",
      type: "text",
      text: "Choose a username",
      errorMessage: "username cannot be left empty",
      required: true,
    },
  ];

  const onChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  const [formdata, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });

  // framer motion set variants
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
  //   const { GigsDetails } = useSelector((store) => store.gigs);
  const { userAlert, userDetails } = useSelector((store) => store.user);
  // open modal if type  === users

  if (type === "username") {
    return (
      <AuthModalContainer
        as={motion.div}
        initial={{ opacity: 0, visibility: "hidden", duration: 0.6 }}
        exit={{ opacity: 0, visibility: "hidden", duration: 0.6 }}
        animate={{ opacity: 1, visibility: "visible", duration: 0.6 }}
      >
        <div
          className="backdrop"
          onClick={() => dispatch(offAuthModal())}
        ></div>
        <motion.div
          variants={dropin}
          initial="hidden"
          animate="visible"
          exit={"exit"}
          className={"deleteCard family1 shadow"}
        >
          {/* <div className="cross" onClick={() => dispatch(clearUserAlertError())}>
            <RxCross2 />
          </div> */}
          <div className="w-100">
            <div className="w-100 authTop fs-20 text-extra-bold text-dark text-center">
              Join Fiverr
            </div>
          </div>

          <div className="w-90 authBottom auto flex column gap-1">
            <div className="flex column gap-2">
              {inputData2.map((input) => {
                return (
                  <Input
                    id={input.text}
                    onChange={onChange}
                    placeholder={input.placeholder}
                    type={input.type}
                    name={input.name}
                    value={formdata[input.name]}
                    input={input}
                    key={input.id}
                    required={input.required}
                    pattern={input.pattern}
                    errorMessage={input.errorMessage}
                  />
                );
              })}
            </div>
            <div className="w-100 btnWrapper flex column gap-1">
              <div className="btn w-100 family1 fs-16 text-white text-center">
                Join
              </div>
              <p className="fs-14 text-center text-light text-grey text-center">
                By joining I agree to fiverr emails from Fiverr{" "}
                <span className="text-blue">Terms of service</span> <br /> as
                well as to receive occasional emails from us
              </p>
            </div>
          </div>
          <div className="w-100 authCenter family1 fs-14 text-light text-gery text-center">
            Already a member? Sign In
          </div>
        </motion.div>
      </AuthModalContainer>
      // <h2>hello</h2>
    );
  }

  return (
    <AuthModalContainer
      as={motion.div}
      initial={{ opacity: 0, visibility: "hidden", duration: 0.6 }}
      exit={{ opacity: 0, visibility: "hidden", duration: 0.6 }}
      animate={{ opacity: 1, visibility: "visible", duration: 0.6 }}
    >
      <div className="backdrop" onClick={() => dispatch(offAuthModal())}></div>
      <motion.div
        variants={dropin}
        initial="hidden"
        animate="visible"
        exit={"exit"}
        className={"deleteCard family1 shadow"}
      >
        {/* <div className="cross" onClick={() => dispatch(clearUserAlertError())}>
          <RxCross2 />
        </div> */}
        <div className="w-100">
          <div className="w-100 authTop fs-20 text-extra-bold text-dark text-center">
            Join Fiverr
          </div>
        </div>

        <div className="w-90 authBottom auto flex column gap-1">
          {/* socials logins */}
          <div className="flex column gap-1">
            <div className="authBtn btn1 flex fs-14 text-dark text-bold family1 item-center justify-center">
              <FaFacebook fontSize={"20px"} />{" "}
              <div className="w-100 text-center">Continue with Facebook</div>{" "}
            </div>
            <div className="authBtn flex fs-14 text-dark text-bold family1 item-center justify-space">
              <FcGoogle fontSize={"20px"} />{" "}
              <div className="w-100 text-center">Continue with Google</div>{" "}
            </div>

            <div className="authBtn flex fs-14 text-dark text-bold family1 item-center justify-center">
              <FaGithub fontSize={"20px"} />{" "}
              <div className="w-100 text-center">Continue with Github</div>{" "}
            </div>
          </div>
          <div className="option uppercase fs-18">or</div>
          <div className="flex column gap-2">
            {inputData.map((input) => {
              return (
                <Input
                  id={input.text}
                  onChange={onChange}
                  placeholder={input.placeholder}
                  type={input.type}
                  name={input.name}
                  value={formdata[input.name]}
                  input={input}
                  key={input.id}
                  required={input.required}
                  pattern={input.pattern}
                  errorMessage={input.errorMessage}
                />
              );
            })}
          </div>
          <div className="w-100 btnWrapper flex column gap-1">
            <div className="btn w-100 family1 fs-16 text-white text-center">
              Continue
            </div>
            <p className="fs-14 text-center text-light text-dark text-center">
              By joining I agree to receive emails from Fiverr.
            </p>
          </div>
        </div>
        <div className="w-100 authCenter fs-14 text-light text-gery text-center">
          Already a member? Sign In
        </div>
      </motion.div>
    </AuthModalContainer>
    // <h2>hello</h2>
  );
}

const AuthModalContainer = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;

  display: flex;
  z-index: 20900;
  align-items: center;
  justify-content: center;
  top: 0;
  .authCenter {
    padding: 1rem 0;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  }
  .btn {
    background: var(--green);
    color: #fff;
    padding: 1.3rem 2rem;
    border-radius: 5px;
    /* font-family: "Roboto Condensed", sans-serif; */
    font-weight: bold;
    font-size: 13px;
  }
  .btn1 {
    background-color: var(--blue-1);
    color: #fff;
  }
  .authBtn {
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 1.4rem 2rem;
    border-radius: 8px;
  }
  .btnWrapper {
  }
  .authBottom {
    position: relative;
    padding: 0 2.4rem;
    padding-bottom: 1.6rem;

    .option {
      width: 100%;
      position: relative;
      text-align: center;
      padding: 0 1.4rem;
      font-size: 12px;
      color: var(--grey-1);
      &::after {
        width: 45%;
        height: 0.4px;
        content: "";
        background-color: rgba(0, 0, 0, 0.5);
        left: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
      &::before {
        width: 45%;
        height: 0.4px;
        content: "";
        background-color: rgba(0, 0, 0, 0.5);
        right: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
  .backdrop {
    background: rgba(0, 0, 0, 0.6);

    position: absolute;
    height: 100%;
    width: 100%;
  }
  .authTop {
    padding: 2rem 0;
    font-size: 24px;
    padding-bottom: 2rem;
    /* border-bottom: 1px solid rgba(0, 0, 0, 0.1); */
  }
  .deleteCard {
    width: clamp(35%, 80px, 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #fff;
    gap: 2rem;
    border-radius: 5px;
    box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.1);
    position: relative;
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
