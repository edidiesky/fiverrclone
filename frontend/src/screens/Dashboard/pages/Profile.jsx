import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Input } from "../../../components/forms";
import { Links, Header, Alert } from "../components";

import { useDispatch, useSelector } from "react-redux";
// import {
//   UpdateProfile,
//   getSingleCustomer,
//   clearUserAlertError,
// } from "../../../Features";
import Message from "../../../components/loaders/Message";
import LoaderIndex from "../../../components/loaders/index";

export default function Profile() {
  // getting the userinfo

  // // user's state
  // const {
  //   userDetails,
  //   userInfo,
  //   isLoading,
  //   isError,
  //   isSuccess,
  //   alertType,
  //   alertText,
  //   showAlert,
  // } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  //   dispatch(getSingleCustomer(userInfo?._id));
  // }, [userInfo?._id]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const [formdata, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    country: "",
    isAdmin: "",
    phone: "",
    city: "",
    address: "",
  });

  // useEffect(() => {
  //   if (userDetails) {
  //     const {
  //       firstname,
  //       lastname,
  //       email,
  //       country,
  //       isAdmin,
  //       phone,
  //       city,
  //       address,
  //     } = userDetails;
  //     setFormData({
  //       firstname,
  //       lastname,
  //       email,
  //       country,
  //       isAdmin,
  //       phone,
  //       city,
  //       address,
  //     });
  //   }
  // }, [setFormData, userDetails]);

  const inputData = [
    {
      id: 1,
      name: "firstname",
      placeholder: "John",
      type: "text",
      text: "First name",
      errorMessage:
        "firstname should be 3-16 characters and should not contain any special Characters",
      required: true,
      pattern: "^[a-zA-Z]{4,}( {1,2}[a-zA-Z]{4,}){0,}$",
    },
    {
      id: 2,
      name: "lastname",
      placeholder: "Doe",
      type: "text",
      text: "Last name",
      errorMessage:
        "lastname should be 3-16 characters and should not contain any special Characters",
      required: true,
      pattern: "^[a-zA-Z]{4,}( {1,2}[a-zA-Z]{4,}){0,}$",
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
    },
    {
      id: 5,
      name: "isAdmin",
      placeholder: "isAdmin",
      type: "text",
      text: "isAdmin",
      errorMessage:
        "isAdmin should be 3-16 characters and should not contain any special Characters",
      required: true,
    },
    {
      id: 6,
      name: "phone",
      placeholder: "Doe",
      type: "text",
      text: "phone",
      errorMessage:
        "phone should be 3-16 characters and should not contain any special Characters",
      required: true,
    },
    {
      id: 7,
      name: "country",
      placeholder: "country",
      type: "text",
      text: "Country",
      errorMessage:
        "country should be 3-16 characters and should not contain any special Characters",
      required: true,
      pattern: "^[a-zA-Z]{4,}( {1,2}[a-zA-Z]{4,}){0,}$",
    },
    {
      id: 8,
      name: "city",
      placeholder: "city",
      type: "text",
      text: "city",
      errorMessage:
        "city should be 3-16 characters and should not contain any special Characters",
      required: true,
      pattern: "^[a-zA-Z]{4,}( {1,2}[a-zA-Z]{4,}){0,}$",
    },
    {
      id: 9,
      name: "address",
      placeholder: "address",
      type: "text",
      text: "address",
      errorMessage:
        "address should be 3-16 characters and should not contain any special Characters",
      required: true,
    },
  ];

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  // handling the users profile update
  const handleUpdateUserProfile = (e) => {
    e.preventDefault();
    // dispatch(UpdateProfile(formdata));
  };

  // navigate back to the user dashboard when update is successfull
  // useEffect(() => {
  //   if (showAlert) {
  //     setTimeout(() => {
  //       dispatch(clearUserAlertError());
  //     }, 4000);
  //   }
  // }, [showAlert]);

  return (
    <>
      {/* {isLoading && <LoaderIndex loading={isLoading} />} */}
      <Header text={"Customer Profile"} />
      <ProfileContainer>
        <div className="profileWrapper">
          {/* {isError && (
            <Message
              alertText={alertText}
              handleClearAlert={clearUserAlertError}
              alertType={alertType}
            />
          )} */}
          <form className="profileForm" onSubmit={handleUpdateUserProfile}>
            <div className="profileFormBottom">
              {inputData.slice(0, 6).map((input) => {
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
            <div className="ProfileBottom">
              <h3>Personal Address</h3>
              <div className="profileFormBottom">
                {inputData.slice(6, 9).map((input) => {
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
            </div>
            <div className="btnWrapper">
              <button type="submit" className="editBtn">
                Edit Profile
              </button>
            </div>
          </form>
        </div>
      </ProfileContainer>
    </>
  );
}

const ProfileContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  padding: 3rem 0;
  .profileWrapper {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 100%;
    .EditProfileWrapperTopLeft {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      width: 100%;
      h3 {
        font-size: 2rem;
        color: var(--text-color);
        font-weight: 700;
        text-transform: uppercase;
        font-family: "Barlow", sans-serif;
      }
    }
    .profileForm {
      width: 100%;
      display: flex;
      align-items: center;
      padding: 3.7rem 6rem;
      background: var(--white);
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 6px;
      flex-direction: column;
      @media (max-width: 680px) {
        padding: 3.7rem;
      }
      .btnWrapper {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 2rem 0;
        .editBtn {
          border: none;
          outline: none;
          font-size: 1.6rem;
          font-weight: 400;
          color: #fff;
          border-radius: 40px;
          background: var(--blue-2);
          padding: 1.4rem 4rem;
          font-family: "Barlow", sans-serif;
          cursor: pointer;
          &:hover {
            background: var(--red);
          }
        }
      }
      .ProfileBottom {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 100%;
        padding: 2.4rem 0;
        h3 {
          font-size: 1.8rem;
          color: var(--text-color);
          font-weight: 700;
          text-transform: uppercase;
          font-family: "Barlow", sans-serif;
        }
      }
      .profileFormBottom {
        display: grid;
        width: 100%;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        grid-gap: 1.4rem;
        padding: 0.4rem 0;
        @media (max-width: 680px) {
          grid-template-columns: 1fr;
        }
      }
    }
  }
`;
