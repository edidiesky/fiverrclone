import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Input } from "../../../components/forms";
import { Links, Alert, Topbar } from "../components";

import { useDispatch, useSelector } from "react-redux";
import {
  UpdateProfile,
  getSingleCustomer,
  clearUserAlertError,
} from "../../../Features";
import Message from "../../../components/loaders/Message";
import LoaderIndex from "../../../components/loaders/index";
import { inputData } from "../../../data/formdata";

export default function Profile() {
  // getting the userinfo

  // // user's state
  const {
    userInfo,
    isLoading,
    isError,
    isSuccess,
    alertType,
    alertText,
    showAlert,
  } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(getSingleCustomer(userInfo?._id));
  }, [userInfo?._id]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const [formdata, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    country: "",
    isAdmin: "",
    phone: "",
    city: "",
    address: "",
  });

  useEffect(() => {
    if (userInfo) {
      const {
        name,
        username,
        email,
        country,
        isAdmin,
        phone,
        city,
        address,
      } = userInfo;
      setFormData({
        name,
        username,
        email,
        country,
        isAdmin,
        phone,
        city,
        address,
      });
    }
  }, [setFormData, userInfo]);

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
  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        dispatch(clearUserAlertError());
      }, 4000);
    }
  }, [showAlert]);

  return (
    <>
      {isLoading && <LoaderIndex loading={isLoading} />}
      <ProfileContainer className="w-90 auto">
        <div className="profileWrapper w-90 auto">
          <h2 className="family1 w-90 text-bold auto flex-1 fs-30 text-dark">
            My Profile
          </h2>

          {isError && (
            <Message
              alertText={alertText}
              handleClearAlert={clearUserAlertError}
              alertType={alertType}
            />
          )}
          <div className="flex w-90 auto family3 column gap-3">
            {/* name lagal */}
            <div className="flex family3  bottom column gap-1">
              <span className="text-dark text-bold fs-18">
                Legal name
                <span className="text-grey text-light block fs-16">
                  This is the name on your travel document, which could be a
                  license or a passport.
                </span>
              </span>
              <div className="grid wrap1 justify-space w-100">
                {inputData?.slice(0, 2).map((input) => {
                  return (
                    <Input
                      label={input.text}
                      onChange={onChange}
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
            {/* email legal */}
            <div className="flex family3  bottom column gap-1">
              <span className="text-dark text-bold fs-18">
                Email
                <span className="block text-light fs-16">
                  Use an address you’ll always have access to.
                </span>
              </span>
              <div className="flex family3  gap-1 item-center justify-space w-100">
                <Input
                  label={inputData[2].text}
                  onChange={onChange}
                  type={inputData[2].type}
                  name={inputData[2].name}
                  value={formdata[inputData[2].name]}
                  input={inputData[2]}
                  key={inputData[2].id}
                  required={inputData[2].required}
                  pattern={inputData[2].pattern}
                  errorMessage={inputData[2].errorMessage}
                />
              </div>
            </div>
            {/* phone number */}
            <div className="flex family3  bottom bottom1 column gap-1">
              <span className="text-dark text-bold fs-18">
                Phone numbers
                <span className="block text-light fs-16">
                  Add a number so confirmed guests and Airbnb can get in touch.
                  You can add other numbers and choose how they’re used.
                </span>
              </span>
              <div className="flex family3  gap-1 item-center justify-space w-100">
                <Input
                  label={inputData[3].text}
                  onChange={onChange}
                  type={inputData[3].type}
                  name={inputData[3].name}
                  value={formdata[inputData[3].name]}
                  input={inputData[3]}
                  key={inputData[3].id}
                  required={inputData[3].required}
                  pattern={inputData[3].pattern}
                  errorMessage={inputData[3].errorMessage}
                />
              </div>
            </div>
            <div className="flex family3  bottom bottom1 column gap-1">
              <span className="text-dark text-bold fs-18">
                Address
                <span className="block text-light fs-16">
                  Use a permanent address where you can receive mail.
                </span>
              </span>
              <div className="flex family3  column gap-1 item-start justify-space w-100">
                <div className="wrap1">
                  <Input
                    label={inputData[5].text}
                    onChange={onChange}
                    type={inputData[5].type}
                    name={inputData[5].name}
                    value={formdata[inputData[5].name]}
                    input={inputData[5]}
                    key={inputData[5].id}
                    required={inputData[5].required}
                    pattern={inputData[5].pattern}
                    errorMessage={inputData[5].errorMessage}
                  />
                  <div className=""></div>
                </div>
                <div className="w-100">
                  <Input
                    label={inputData[6].text}
                    onChange={onChange}
                    type={inputData[6].type}
                    name={inputData[6].name}
                    value={formdata[inputData[6].name]}
                    input={inputData[6]}
                    key={inputData[6].id}
                    required={inputData[6].required}
                    pattern={inputData[6].pattern}
                    errorMessage={inputData[6].errorMessage}
                  />
                </div>
                <div className="wrap1">
                  <Input
                    label={inputData[7].text}
                    onChange={onChange}
                    type={inputData[7].type}
                    name={inputData[7].name}
                    value={formdata[inputData[7].name]}
                    input={inputData[7]}
                    key={inputData[7].id}
                    required={inputData[7].required}
                    pattern={inputData[7].pattern}
                    errorMessage={inputData[7].errorMessage}
                  />
                  <Input
                    label={inputData[8].text}
                    onChange={onChange}
                    type={inputData[8].type}
                    name={inputData[8].name}
                    value={formdata[inputData[8].name]}
                    input={inputData[8]}
                    key={inputData[8].id}
                    required={inputData[8].required}
                    pattern={inputData[8].pattern}
                    errorMessage={inputData[8].errorMessage}
                  />
                </div>
              </div>
            </div>
            <div className="flex">
              <div
                onClick={handleUpdateUserProfile}
                className="edit btn_1 fs-16 text-white"
              >
                Save
              </div>
            </div>
          </div>
        </div>
      </ProfileContainer>
    </>
  );
}

const ProfileContainer = styled.div`
  margin: 0 auto;
  padding: 3rem 0;
  h2 {
    font-size: 50px;
    font-weight: 700;
    span {
      color: var(--green);
    }
  }
  .edit {
    padding: 1.5rem 4rem;
    border-radius: 10px;
    cursor: pointer;
    color: #fff !important;
    background-color: #000;
    &:hover {
      opacity: 0.7;
    }
  }
  .wrap1 {
    display: grid;
    width: 100% !important;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  .profileWrapper {
    display: flex;
    flex-direction: column;
    gap: 3rem;
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
        /* font-family: "Barlow", sans-serif; */
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
          font-size: 1.4rem;
          font-weight: 500;
          color: #fff;
          border-radius: 40px;
          background: var(--blue-2);
          padding: 1.2rem 4rem;
          /* font-family: "Barlow", sans-serif; */
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
          /* font-family: "Barlow", sans-serif; */
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
