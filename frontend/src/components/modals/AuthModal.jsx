import React, { useEffect, useState } from "react";
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
import {
  UpdateProfile,
  adminUpdateCustomer,
  loginCustomer,
  registerCustomer,
} from "../../Features";
import LoaderIndex from "../loaders";
import { googleAuth } from "../../Features/user/userReducer";
import Message from "../loaders/Message";
import { BiCheck } from "react-icons/bi";

export default function AuthModal() {
  // swtich login and register tab
  const [auth, setAuth] = useState(false);
  const inputData = [
    {
      id: 3,
      name: "name",
      placeholder: "John Doe",
      type: "tyext",
      text: "Name",
      errorMessage: "It should be a valid name",
      required: true,
    },
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
    name: "",
    username: "",
  });
  const { email, username, password, name } = formdata;

  // framer motion set variants
  const dropin = {
    hidden: {
      y: "100vh",
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
  const {
    userDetails,
    usernamemodal,
    isLoading,
    showAlert,
    alertText,
    loginSuccess,
    registersuccess,
  } = useSelector((store) => store.user);

  useEffect(() => {
    if (loginSuccess) {
      setTimeout(() => {
        dispatch(offAuthModal());
      }, 4000);
    }
  }, [loginSuccess]);
  // form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // sign based on login and registration
    if (auth) {
      dispatch(registerCustomer({ email, password, name }));
      // console.log("registration");
    } else {
      dispatch(loginCustomer({ email, password }));
      // console.log("login");
    }
  };
  const HandleUsername = (e) => {
    e.preventDefault();
    // console.log('hello')
    dispatch(UpdateProfile({ username }));
  };
  const HandleGoogle = (e) => {
    window.open("https://localhost:5000/api/v1/auth/google", "_self");
  };
  // open modal if type  === users

  // update the user profile when process ahs been completed
  if (usernamemodal) {
    return (
      <AuthModalContainer
        as={motion.div}
        initial={{ opacity: 0, visibility: "hidden", duration: 0.6 }}
        exit={{ opacity: 0, visibility: "hidden", duration: 0.6 }}
        animate={{ opacity: 1, visibility: "visible", duration: 0.6 }}
      >
        {isLoading && <LoaderIndex />}
        <div className="backdrop"></div>
        <motion.div
          variants={dropin}
          initial="hidden"
          animate="visible"
          exit={"exit"}
          style={{ background: "#fff" }}
          className={"deleteCard usernameModal family1 shadow"}
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
              <div
                onClick={HandleUsername}
                className="btn w-100 family1 fs-16 text-white text-center"
              >
                Join
              </div>
              <p className="fs-14 text-center text-light text-grey text-center">
                By joining I agree to fiverr emails from Fiverr{" "}
                <span className="text-blue">Terms of service</span> <br /> as
                well as to receive occasional emails from us
              </p>
            </div>
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
      <Message
        showAlert={showAlert}
        alertText={alertText}
        handleClearAlert={clearUserAlertError}
      />
      {isLoading && <LoaderIndex />}
      <div className="backdrop" onClick={() => dispatch(offAuthModal())}></div>
      <motion.div
        variants={dropin}
        initial="hidden"
        animate="visible"
        exit={"exit"}
        className={"deleteCard family1 shadow"}
      >
        <div className="py-3 flex card_auth_wrapper item-center">
          <div className="left h-100 flex-1">
            <img
              src="https://npm-assets.fiverrcdn.com/assets/@fiverr-private/user_session/standard.7691fcf.png"
              alt=""
              className="w-100"
            />
            <div className="flex column left_content gap-2">
              <div className="w-85 auto flex column gap-2">
                <h3 className="fs-35 text-white">Success starts here</h3>
                <ul className="flex family1 column text-white gap-2 fs-20 text-light">
                  <li className="flex item-start gap-1">
                    <BiCheck fontSize={"24px"} /> Over 600 categories
                  </li>
                  <li className="flex item-start gap-1">
                    <BiCheck fontSize={"24px"} /> Pay per project, not per hour
                  </li>
                  <li className="flex item-start gap-1">
                    <BiCheck fontSize={"24px"} /> Access to talent and
                    businesses across the globe
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="right flex-1 justify-space flex column item-start h-100">
            <div className="w-85 auto flex column item-center rightwrapper justify-space h-100">
              <form
                className="authContentFormWrapper w-100 flex column gap-2"
                onSubmit={handleSubmit}
              >
                <h3 className="fs-35 family1">
                  {auth ? "Create a new account" : "Sign in to your account"}

                  <span className="block flex item-center gap-1 fs-14 family2  text-light text-grey">
                    {auth
                      ? "Already have an account?"
                      : "Don’t have an account?"}
                    <span
                      onClick={() => setAuth(!auth)}
                      className="text-dark fs-14 family2 text-light"
                      style={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        marginLeft: "7px",
                      }}
                    >
                      {auth ? "Sign in" : "Sign up"}
                    </span>
                  </span>
                </h3>
                <div className="flex w-100 column" style={{ gap: ".6rem" }}>
                  {!auth ? (
                    <>
                      {inputData.slice(1, 3)?.map((input) => {
                        return (
                          <Input
                            label={input.text}
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
                    </>
                  ) : (
                    <>
                      {inputData.slice(0, 3)?.map((input) => {
                        return (
                          <Input
                            label={input.text}
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
                    </>
                  )}
                </div>
                <div className="w-100 flex gap-2 column">
                  <button
                    className="btn fs-18 w-100 py-2 family1 px-4 text-white text-bold"
                    style={{ padding: "1.7rem 4rem" }}
                  >
                    {" Continue"}
                  </button>
                  <h5 className="fs-12 family2 text-grey text-bold">
                    By joining, you agree to the Fiverr Terms of Service and to
                    occasionally receive emails from us. Please read our Privacy
                    Policy to learn how we use your personal data.
                  </h5>
                </div>
              </form>
            </div>
          </div>
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
    font-family: "Roboto Condensed", sans-serif;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  }
  .btn {
    background: var(--green);
    color: #fff;
    padding: 1rem 2rem;
    border-radius: 5px;
    /* font-family: "Roboto Condensed", sans-serif; */
    font-weight: normal;
    font-size: 16px;
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
  .rightwrapper {
    overflow: hidden;
    background: #fff;
  }
  .right {
    background-color: #fff;
    display: flex;
    align-items: flex-start;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    min-height: 60rem;
    justify-content: center;
  }

  .card_auth_wrapper {
    overflow: hidden;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      height: 100%;
      width: 100%;
      min-height: 60rem;
      position: relative;
      border-top-left-radius: 15px;
      border-bottom-left-radius: 15px;
      background-color: transparent;
      .left_content {
        position: absolute;
        z-index: 30;
        top: 10%;
        width: 100%;
        left: 50%;
        transform: translateX(-50%);
      }
      img {
        height: 100%;
        position: absolute;
        object-fit: cover;
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
      }
    }
    @media (max-width: 780px) {
      flex-direction: column-reverse;

      .left,
      .right {
        width: 100%;
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
    width: fit-content;
    max-width: 875px;
    gap: 2rem;
    border-radius: 5px;
    box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.1);
    position: relative;
    &.usernameModal {
      width: 400px;
      padding: 2rem;
      @media (max-width: 780px) {
        width: 60%;
      }
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
