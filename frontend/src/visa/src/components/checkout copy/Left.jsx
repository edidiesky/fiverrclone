import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Input } from "../forms";
import { useDispatch, useSelector } from "react-redux";

import {
  UpdateProfile,
  clearUserAlertError,
  getSingleCustomer,
} from "../../Features";
export default function Left() {
  // const {  } = useSelector((store) => store.user);
  const [formdata, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    country: "",
    address: "",
    phone: "",
  });

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
      pattern: "^[a-zA-Z]{3,}( {1,2}[a-zA-Z]{3,}){0,}$",
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
      pattern: "^[a-zA-Z]{3,}( {1,2}[a-zA-Z]{3,}){0,}$",
    },
    {
      id: 9,
      name: "email",
      placeholder: "example@site.com",
      type: "email",
      text: "Email",
      errorMessage: "It should be a valid email",
      required: true,
    },
    {
      id: 4,
      name: "country",
      placeholder: "Country name",
      type: "text",
      text: "Country Name",
      errorMessage:
        "country should be 3-16 characters and should not contain any special Character",
      required: true,
      pattern: "^[a-zA-Z]{4,}( {1,2}[a-zA-Z]{4,}){0,}$",
    },
    {
      id: 5,
      name: "address",
      placeholder: "Address",
      type: "text",
      text: "Address",
      errorMessage:
        "address should be 3-16 characters and should not contain any special Character",
      required: true,
    },
    {
      id: 6,
      name: "city",
      placeholder: "Town Address",
      type: "text",
      text: "Town Address",
      errorMessage:
        "City should be 3-16 characters and should not contain any special Character",
      required: true,
      pattern: "^[a-zA-Z]{4,}( {1,2}[a-zA-Z]{4,}){0,}$",
    },
    {
      id: 7,
      name: "phone",
      placeholder: "phone details",
      type: "text",
      text: "phone",
      errorMessage:
        "phone should be 3-16 characters and should not contain any special Character",
      required: true,
    },
  ];

  // useEffect(() => {
  //   // get the main users data once the profile page mounts
  //   if (addressData) {
  //     const { firstname, lastname, email, phone, city, address, postalCode } =
  //       addressData;

  //     setFormData({
  //       firstname,
  //       lastname,
  //       email,
  //       phone,
  //       city,
  //       address,
  //       postalCode,
  //     });
  //   }
  // }, [setFormData, addressData]);

  // useEffect(() => {
  //   // get the main users data once the profile page mounts
  //   if (userInfo) {
  //     const {
  //       firstname,
  //       lastname,
  //       email,
  //       city,
  //       address,
  //       postalCode,
  //       phone,
  //       country,
  //     } = userInfo;
  //     setFormData({
  //       firstname,
  //       lastname,
  //       email,
  //       city,
  //       address,
  //       postalCode,
  //       phone,
  //       country,
  //     });
  //   }
  // }, [setFormData, userInfo]);

  const onChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(formdata);

  const handleAddressDetails = (e) => {
    e.preventDefault();
    // dispatch(saveShippingAddress(formdata));
    navigate("/payment");
  };

  return (
    <LeftWrapper className="flex column gap-2 radius2">
      <h2 style={{ fontSize: "38px" }}>Billing Details</h2>
      <form
        className="formWrapper flex column gap-2"
        onSubmit={handleAddressDetails}
      >
        <div className="inputWrapper flex column gap-2">
          {inputData.slice(0, 2).map((input) => {
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
        <div className="inputWrapper flex column gap-2">
          {inputData.slice(2, 8).map((input) => {
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
        <div className="btnWrapper">
          <button type="submit" className="btn" onClick={handleAddressDetails}>
            Continue
          </button>
        </div>
      </form>
    </LeftWrapper>
  );
}

const LeftWrapper = styled.div`
  background-color: #f8f5ef;
  padding: 4rem 3rem;
  width: 100%;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);

  button {
    padding: 1.2rem 4rem;
    font-size: 1.3rem;
    text-transform: uppercase;
    color: #fff;
    font-weight: 600;
    border-radius: 40px;
  }
`;
