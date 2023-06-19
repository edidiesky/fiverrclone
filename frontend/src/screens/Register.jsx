import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header, Meta } from "../components/common";
import Input from "../components/forms/Input";
import { registerCustomer } from "../Features/user/userReducer";
import styled from "styled-components";
import { clearUserAlertError } from "../Features";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/modals/Message";
import LoaderIndex from "../components/loaders";

export default function Register() {
  const [formdata, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const dispatch = useDispatch();
  const { username, email, password, password2 } = formdata;
  const inputData = [
    {
      id: 1,
      name: "username",
      placeholder: "John",
      type: "text",
      text: "First name",
      errorMessage:
        "username should be 3-16 characters and should not contain any special Characters",
      required: true,
      pattern: "^[a-zA-Z]{3,}( {1,2}[a-zA-Z]{3,}){0,}$",
    },
    {
      id: 3,
      name: "email",
      placeholder: "example@site.com",
      type: "email",
      text: "Email",
      errorMessage: "It should be a valid email",
      required: true,
    },
    {
      id: 4,
      name: "password",
      placeholder: "Minimum 8 Characters",
      type: "password",
      text: "password",
      errorMessage:
        "Password should be 8-20 characters Long and should include 1 letter and 1 special Character",
      required: true,
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[#$@!%&*?])[a-zA-Z0-9!#$@!%&*]{8,30}$",
    },
    {
      id: 5,
      name: "password2",
      placeholder: "Confirm your password",
      type: "password",
      text: "Confirm Password",
      errorMessage: "Password dont match",
      required: true,
      pattern: formdata.password,
    },
  ];

  const onChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  const { isSuccess, alertText, showAlert, alertType, isLoading } = useSelector(
    (store) => store.user
  );

  const navigate = useNavigate();
  // performing form submission to backend
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerCustomer(formdata));
    // console.log(formdata);
  };

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        navigate(`/join/login`);
      }, 3000);
    }
  }, [navigate, isSuccess]);

  return (
    <>
      <Meta title="Sign In for a Fiverr Account - Join Fiverr Today" />
      <Header />
      {isLoading && <LoaderIndex />}

      <AuthForm className="w-100 py-6">
        <div className="w-90 auto py-3 flex wrapper item-start">
          <div className="left flex-1">
            <img
              src="https://npm-assets.fiverrcdn.com/assets/@fiverr-private/user_session/standard.7691fcf.png"
              alt=""
              className="w-100"
            />
          </div>
          <div className="right flex-1 h-100">
            <div className="w-85 auto py-3 flex column rightwrapper justify-space h-100">
              <form className="authContentFormWrapper flex column gap-1">
                <Message
                  alertType={alertType}
                  showAlert={showAlert}
                  handleClearAlert={clearUserAlertError}
                  alertText={alertText}
                />
                <h3 className="fs-24 py-2 family1">Continue with your email</h3>
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
                <div className="w-100 flex gap-2 py-2 column">
                  <button
                    onClick={handleSubmit}
                    disabled={
                      !username ||
                      !email ||
                      !password ||
                      (!password2 && isLoading)
                    }
                    className="btn fs-14 w-100 active py-2 family1 px-4 text-white text-light"
                    style={{ padding: "1.7rem 4rem" }}
                  >
                    {" Continue"}
                  </button>
                  <p className="fs-14 text-light text-grey">
                    Not yet a member?{" "}
                    <Link
                      to={"/join/login"}
                      style={{ textDecoration: "underline" }}
                    >
                      Login Now
                    </Link>
                  </p>
                </div>
              </form>
              <h5 className="fs-14 py-2 text-grey text-light">
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
  img {
    object-fit: cover;
    height: 100%;
    position: absolute;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }
  .btn {
    font-size: 13px;
    color: #fff;
    border-radius: 4px;
  }
  .btn:disabled {
    background-color: #f7f7f7;
    /* z-index: -1; */
    font-weight: 700;
    font-size: 13px;
    color: #777;
    border-radius: 4px;
    cursor: not-allowed;
  }
  .left,
  .right {
    min-height: 60rem;
    position: relative;
    display: flex;
    align-items: center;
  }
  .rightwrapper {
    min-height: 60rem;
    padding: 3rem 0;
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
  