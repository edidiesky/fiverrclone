import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Camera from "../../components/common/svg/Camera";
import Input from "../../components/forms/Input";

export default function Personal1() {
  const [formdata, setFormData] = useState({
    fullname: "",
    username: "",
    description: "",
  });
  const [image, setImage] = useState("");

  const inputData = [
    {
      id: 1,
      name: "fullname",
      placeholder: "John",
      type: "text",
      text: "First name",
      errorMessage:
        "fullname should be 3-16 characters and should not contain any special Characters",
      required: true,
    },
    {
      id: 2,
      name: "username",
      placeholder: "Doejoe1234",
      type: "text",
      text: "Display   name",
      errorMessage:
        "username should be 3-16 characters and should not contain any special Characters",
      required: true,
    },
    {
      id: 3,
      name: "description",
      placeholder: "example@site.com",
      type: "text",
      text: "Email",
      errorMessage: "It should be a valid description",
      required: true,
    },
  ];

  const onChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  return (
    <Personal1Content>
      <div className="w-100 auto column flex gap-3">
        <div className="py-4 flex item-start gap-1">
          <h2 className="fs-35 w-90 auto w-50 text-dark text-light">
            Personal Info
            <span className="fs-16 block text-grey2 text-light">
              Tell us a bit about yourself. This information will appear on your
              public profile, so that potential buyers can get to know you
              better.
            </span>
          </h2>
        </div>
        <div className="w-90 auto column flex gap-4">
          <div className="flex py-2 item-start gap-4 just">
            <h4 className="fs-20 profile text-dark text-light">
              Full Name*
              <span className="block fs-18 text-light text-grey">
                Ex. John Smith
              </span>
            </h4>
            <Input
              id={inputData[0].text}
              onChange={onChange}
              placeholder={inputData[0].placeholder}
              type={inputData[0].type}
              name={inputData[0].name}
              value={formdata[inputData[0].name]}
              input={inputData[0]}
              key={inputData[0].id}
              required={inputData[0].required}
              pattern={inputData[0].pattern}
              errorMessage={inputData[0].errorMessage}
            />
          </div>
          {/* username */}
          <div className="flex py-2 item-start gap-4 just">
            <h4 className="fs-20 profile text-dark text-light">
              Display Name*
              <span className="block fs-18 text-light text-grey">
                To help build credible and authentic connections with customers,
                they’ll now see your display name. We suggest using your first
                name and first initial of your last name.
              </span>
            </h4>
            <Input
              id={inputData[1].text}
              onChange={onChange}
              placeholder={inputData[1].placeholder}
              type={inputData[1].type}
              name={inputData[1].name}
              value={formdata[inputData[1].name]}
              input={inputData[1]}
              key={inputData[1].id}
              required={inputData[1].required}
              pattern={inputData[1].pattern}
              errorMessage={inputData[1].errorMessage}
            />
          </div>
          {/* image */}
          <div className="flex py-2 item-center gap-4 just">
            <h4 className="fs-20 profile text-dark text-light">
              Profile Picture*
              <span className="block fs-18 text-light text-grey">
                Add a profile picture of yourself so customers will know exactly
                who they’ll be working with.
              </span>
            </h4>

            {/* profile image */}
            <div className="w-100 ProfileImage flex item-center justify-center cardImage">
              <div className="image dark flex item-center justify-center">
                <Camera />
              </div>
              <div className="image grey fs-35 text-grey flex item-center justify-center">
                E
              </div>
            </div>
          </div>
          {/* description */}
          <div className="flex py-2 item-start gap-4 just">
            <h4 className="fs-20 profile text-dark text-light">Description*</h4>
            <label htmlFor="text" className="textLabel family1">
              Product description
              <textarea
                type="text"
                placeholder="Place a description on the product"
                name={inputData[2].name}
                value={formdata[inputData[2].name]}
                onChange={onChange}
                id="text"
              />
            </label>
          </div>
          {/* submit btn */}
          <div className="contactWrapper flex item-center justify-end">
            <Link
              to={"/seller_onboarding/professional_info"}
              className="contactBtn green fs-16 family1 text-bold text-white"
            >
              Continue
            </Link>
          </div>
        </div>
      </div>
    </Personal1Content>
  );
}

const Personal1Content = styled.div`
  span {
    width: 60%;
  }

  .contactWrapper {
    padding: 2rem 0;
    display: flex;
    width: 280px;
    align-self: flex-end;
    justify-self: flex-end;
    .contactBtn {
      padding: 1.5rem;
    }
  }
  .profile {
    width: 60%;
    &:hover {
      span {
        opacity: 1;
        visibility: visible;
      }
    }
    span {
      opacity: 0;
      width: 70%;
      visibility: hidden;
    }
  }
  h2 {
    padding: 2rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.07);
  }
  .textLabel {
    width: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    font-size: 1.3rem;
    color: var(--dark-1);
    font-weight: 700;
    text-transform: capitalize;
    textarea {
      height: 10rem;
      border-radius: 7px;
      background: var(--white);
      padding: 2.4rem;
      width: 100%;
      border: 1px solid var(--grey-2);
      outline: none;
      font-size: 1.8rem;
      font-weight: 400;
      font-family: inherit;
      line-height: 1.7;
      font-family: "Roboto Condensed", sans-serif;
      &::placeholder {
        font-size: 1.6rem;
      }
      &:focus {
        border: 1px solid var(--dark-1);
      }
    }
  }

  .images {
    width: 3rem;
    height: 3rem;
    fill: #fff;
  }
  .ProfileImage {
    position: relative;
    width: 16rem;
    height: 16rem;
    border-radius: 50%;
    z-index: 300;
    &:hover .image {
      &.dark {
        opacity: 1;
        visibility: visible;
      }
      &.grey {
        opacity: 0;
        visibility: hidden;
      }
    }
  }

  .image {
    width: 12rem;
    height: 12rem;
    border-radius: 50%;
    transition: all 0.4s;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);

    &.grey {
      background-color: var(--light-grey);
    }
    &.dark {
      background-color: var(--grey-2);
      opacity: 0;
      visibility: hidden;
    }
  }
`;
