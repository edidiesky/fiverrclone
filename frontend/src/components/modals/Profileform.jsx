import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import {
  clearUserAlertError,
  offProfileModal,
} from "../../Features/user/userSlice";
import Input from "../forms/Input";
import { UpdateProfile, registerCustomer } from "../../Features";
import LoaderIndex from "../loaders";
import { googleAuth } from "../../Features/user/userReducer";
import TagInput from "../common/Tag";

export default function Profileform({ type, click, setFormdata, formdata2 }) {
  // swtich login and register tab
  const [auth, setAuth] = useState(false);
  const inputData = [
    {
      name: "username",
      placeholder: "Add your profile username",
      type: "text",
      text: "username",
    },
    {
      name: "shordescription",
      placeholder: "Add your profile shordescription",
      type: "text",
      text: "shordescription",
    },
    {
      name: "description",
      placeholder: "insert a description of yourself",
      type: "text",
      text: "description",
    },
  ];

  const onChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  const [formdata, setFormData] = useState({
    username: "",
    password: "",
    username: "",
  });
  const { email, username, password } = formdata;

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
  const {
    registersuccess,
    userDetails,
    usernamemodal,
    isLoading,
  } = useSelector((store) => store.user);
  // form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (auth) {
      // dispatch(loginCustomer(formdata));
      dispatch(registerCustomer({ email, password }));
      // console.log("login");
    } else {
      dispatch(registerCustomer({ email, password }));
      // console.log("registration");
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

  return (
    <AuthModalContainer
      as={motion.div}
      initial={{ opacity: 0, visibility: "hidden", duration: 0.6 }}
      exit={{ opacity: 0, visibility: "hidden", duration: 0.6 }}
      animate={{ opacity: 1, visibility: "visible", duration: 0.6 }}
    >
      {isLoading && <LoaderIndex />}
      <div
        className="backdrop"
        onClick={() => dispatch(offProfileModal())}
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

        <div className="w-90 authBottom auto flex column gap-1">
          <div className="w-100 auto authTop fs-20 text-extra-bold text-dark">
            Update your fiverr profile
            <h4 className="fs-18 block py-1 text-light family1 text-grey">
              To help build credible and authentic connections with customers,
              they’ll now see your display name. Learn more
            </h4>
          </div>

          {/* socials logins */}
          {/* <div className="option uppercase fs-18">or</div> */}
          <div className="flex column gap-2">
            {inputData.map((input, index) => {
              return (
                <Input
                  id={input.text}
                  onChange={onChange}
                  placeholder={input.placeholder}
                  type={input.type}
                  name={input.name}
                  value={formdata[input.name]}
                  input={input}
                  key={index}
                  required={input.required}
                  pattern={input.pattern}
                  errorMessage={input.errorMessage}
                />
              );
            })}
            {/* skills */}
            <TagInput
              tagdata={formdata2.skills}
              setTagData={setFormData}
              title={"skills"}
            />
            <TagInput
              tagdata={formdata2.language}
              setTagData={setFormData}
              title={"language"}
            />
          </div>

          <div className="w-100 btnWrapper flex item-center justify-end gap-1">
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn2 family1 fs-16 text-white text-center"
            >
              Continue
            </button>{" "}
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn  family1 fs-16 text-white text-center"
            >
              Save display Profile
            </button>
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
  h4 {
    font-family: "Roboto Condensed", sans-serif;
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
    padding-top: 1.6rem;
    .btn2 {
      background-color: var(--light-grey);
      color: var(--dark-1);
    }
    .btn {
      padding: 1.4rem 3rem;
    }
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
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #fff;
    gap: 2rem;
    border-radius: 5px;
    box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.1);
    position: relative;
    max-height: 98vh;
    overflow-y: scroll;
    @media (max-width: 780px) {
      width: 370px;
    }
    @media (max-width: 480px) {
      width: 280px;
      .authBottom {
        padding: 0 1.5rem;
      }
      .authBtn {
        font-size: 1.2rem;
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
