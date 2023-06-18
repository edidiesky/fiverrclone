import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header, Meta } from "../components/common";
import Input from "../components/forms/Input";
import { loginCustomer } from "../Features/user/userReducer";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/modals/Message";
import { clearUserAlertError } from "../Features";
import LoaderIndex from "../components/loaders";

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

export default function Login() {
  const [formdata, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { email, password } = formdata;

  const onChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };
  // performing form submission to backend
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginCustomer(formdata));
  };

  const {
    loginSuccess,
    isLoading,
    showAlert,
    alertText,
    alertType,
  } = useSelector((store) => store.user);

  useEffect(() => {
    setFormData({
      email: "admin@gmail.com",
      password: "eAdg145%1",
    });
    if (loginSuccess) {
      setTimeout(() => {
        navigate(`/`);
      }, 6000);
    }
  }, [setFormData, navigate, loginSuccess]);

  return (
    <>
      <Meta title="Sign up for a Fiverr Account - Join Fiverr Today" />
      <Header />
      {isLoading && <LoaderIndex />}
      <AuthForm className="w-100 py-6">
        <div className="w-90 auto py-3 flex wrapper item-center">
          <div className="left flex-1">
            <img
              src="https://npm-assets.fiverrcdn.com/assets/@fiverr-private/user_session/standard.7691fcf.png"
              alt=""
              className="w-100"
            />
          </div>
          <div className="right flex-1 h-100">
            <div className="w-85 auto py-3 flex column rightwrapper justify-space h-100">
              <Message
                alertType={alertType}
                showAlert={showAlert}
                alertText={alertText}
                handleClearAlert={clearUserAlertError}
              />
              <form
                className="authContentFormWrapper flex column gap-2"
                onSubmit={handleSubmit}
              >
                <h3 className="fs-24 family1">Continue with your email</h3>
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
                <div className="w-100 flex gap-2 column">
                  <button
                    disabled={(!email || !password) && !isLoading}
                    className="btn fs-12 w-100 py-2 family1 px-4 text-white text-bold"
                    style={{ padding: "1.7rem 4rem" }}
                  >
                    { " Continue"}
                  </button>
                  <p className="fs-14 text-light text-grey">
                    Not yet a member?{" "}
                    <Link
                      to={"/join/register"}
                      style={{ textDecoration: "underline" }}
                    >
                      Register Now
                    </Link>
                  </p>
                </div>
              </form>
              <h5 className="fs-14 text-grey text-light">
                By joining, you agree to the Fiverr Terms of Service and to
                occasionally receive emails from us. Please read our Privacy
                Policy to learn how we use your personal data.
              </h5>
            </div>
          </div>
        </div>
      </AuthForm>
    </>
  );
}

const AuthForm = styled.div`
  width: 100%;
  background-color: #f7f7f7;

  .flex-1 {
    flex: 1;
  }
  .btn:disabled {
    background-color: #f7f7f7;
    /* z-index: -1; */
    color: #777;
    cursor: not-allowed;
  }
  img {
    object-fit: cover;
    height: 100%;
    position: absolute;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    @media (max-width: 780px)  {
      display: none;
    }
  }
  .btn {
    font-size: 13px;
    color: #fff;
    border-radius: 4px;
  }
 
  .left,
  .right {
    min-height: 60rem;
    position: relative;
    display: flex;
    align-items: center;
  }
  .left {
    @media (max-width: 780px)  {
      display: none;
    }
  }
  .rightwrapper {
    min-height: 60rem;
    padding: 3rem 0;
    overflow: hidden;
  }
  .right {
    background-color: #fff;
    display: flex;
    align-items: flex-start;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  .wrapper {
    width: 70%;
    margin: 0 auto;
    overflow: hidden;
    @media (max-width: 780px) {
      flex-direction: column-reverse;

      .left,
      .right {
        width: 100%;
      }
    }
  }
`;
