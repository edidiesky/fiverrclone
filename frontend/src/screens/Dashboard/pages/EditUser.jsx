import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { Input } from "../../../components/forms";
import { Links, Header, Alert } from "../components";

import { useDispatch, useSelector } from "react-redux";
import {
  adminUpdateCustomer,
  getSingleCustomer,
  clearUserAlertError,
} from "../../../Features";
import Message from "../../../components/loaders/Message";
import LoaderIndex from "../../../components/loaders/index";

export default function EditUser() {
  // getting the userinfo

  // user's state
  const {
    userDetails,
    userInfo,
    isLoading,
    isError,
    isSuccess,
    alertType,
    alertText,
    showAlert,
  } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(getSingleCustomer(id));
  }, [id]);

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

  useEffect(() => {
    if (userDetails) {
      const {
        firstname,
        lastname,
        email,
        country,
        isAdmin,
        phone,
        city,
        address,
      } = userDetails;
      setFormData({
        firstname,
        lastname,
        email,
        country,
        isAdmin,
        phone,
        city,
        address,
      });
    }
  }, [setFormData, userDetails]);

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
    },
    {
      id: 7,
      name: "country",
      placeholder: "country",
      type: "text",
      text: "Country",
    },
    {
      id: 8,
      name: "city",
      placeholder: "city",
      type: "text",
      text: "city",
    },
    {
      id: 9,
      name: "address",
      placeholder: "address",
      type: "text",
      text: "address",
    },
  ];

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  // handling the users profile update
  const handleUpdateUserProfile = (e) => {
    e.preventDefault();
    dispatch(adminUpdateCustomer(formdata));
  };

  // navigate back to the user dashboard when update is successfull
  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        navigate("/avada/dashboard/users");
      }, 4000);
    }
  }, [isSuccess]);

  return (
    <>
      <Alert
        showAlert={showAlert}
        alertText={alertText}
        alertType={alertType}
      />
      {isLoading && <LoaderIndex loading={isLoading} />}
      <Header text={"Customer Profile"} />
      <ProfileContainer>
        <div className="profileWrapper">
          {isError && <Message alertText={alertText} alertType={alertType} />}
          <div className="EditProfileWrapperTopLeft">
            <h3>Edit Customer Profile</h3>
          </div>

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
            <div className="editUserProfileBottom">
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
  padding: 1rem 0;
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
      box-shadow: 0 2px 2px var(--grey-2);
      border-radius: 6px;
      flex-direction: column;
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
          font-weight: 600;
          color: #fff;
          background: var(--blue-2);
          padding: 1.7rem 4rem;
          cursor: pointer;
          &:hover {
            background: var(--red);
          }
        }
      }
      .editUserProfileBottom {
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
      }
    }
  }
`;
