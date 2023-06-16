import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Input } from "../../../../components/forms";

export default function EditOtherInfo({ onChange1, formdata1 }) {
  const inputData = [
    {
      id: 1,
      name: "price",
      placeholder: "Add your Gig price",
      type: "number",
      text: "Gig price",
      required: true,
    },
    {
      id: 2,
      name: "countInStock",
      placeholder: "Add your Gig countInStock",
      type: "number",
      text: "Gig countInStock",
    },
    {
      id: 4,
      name: "capacity",
      placeholder: "Add your Gig capacity",
      type: "number",
      text: "Gig capacity",
    },
    {
      id: 6,
      name: "discount",
      placeholder: "Add your Gig discount price",
      type: "number",
      text: "Gig discount price",
    },
  ];

  return (
    <EditOtherInfoWrapper>
      <div className="EditGigFormTop">
        {inputData.slice(0, 1).map((input) => {
          return (
            <Input
              id={input.text}
              onChange={onChange1}
              placeholder={input.placeholder}
              type={input.type}
              name={input.name}
              value={formdata1[input.name]}
              input={input}
              key={input.id}
              required={input.required}
              pattern={input.pattern}
              errorMessage={input.errorMessage}
            />
          );
        })}
        {inputData.slice(5, 6).map((input) => {
          return (
            <Input
              id={input.text}
              onChange={onChange1}
              placeholder={input.placeholder}
              type={input.type}
              name={input.name}
              value={formdata1[input.name]}
              input={input}
              key={input.id}
              required={input.required}
              pattern={input.pattern}
              errorMessage={input.errorMessage}
            />
          );
        })}
      </div>
      <div className="EditGigFormBottom">
        {inputData.slice(1, 2).map((input) => {
          return (
            <Input
              id={input.text}
              onChange={onChange1}
              placeholder={input.placeholder}
              type={input.type}
              name={input.name}
              value={formdata1[input.name]}
              input={input}
              key={input.id}
              required={input.required}
              pattern={input.pattern}
              errorMessage={input.errorMessage}
            />
          );
        })}
      </div>
      <div className="EditGigFormBottom">
        {inputData.slice(2, 3).map((input) => {
          return (
            <Input
              id={input.text}
              onChange={onChange1}
              placeholder={input.placeholder}
              type={input.type}
              name={input.name}
              value={formdata1[input.name]}
              input={input}
              key={input.id}
              required={input.required}
              pattern={input.pattern}
              errorMessage={input.errorMessage}
            />
          );
        })}
      </div>
      <div className="EditGigFormBottom">
        {inputData.slice(3, 4).map((input) => {
          return (
            <Input
              id={input.text}
              onChange={onChange1}
              placeholder={input.placeholder}
              type={input.type}
              name={input.name}
              value={formdata1[input.name]}
              input={input}
              key={input.id}
              required={input.required}
              pattern={input.pattern}
              errorMessage={input.errorMessage}
            />
          );
        })}
      </div>
      <div className="EditGigFormBottom">
        {inputData.slice(4, 5).map((input) => {
          return (
            <Input
              id={input.text}
              onChange={onChange1}
              placeholder={input.placeholder}
              type={input.type}
              name={input.name}
              value={formdata1[input.name]}
              input={input}
              key={input.id}
              required={input.required}
              pattern={input.pattern}
              errorMessage={input.errorMessage}
            />
          );
        })}
      </div>
    </EditOtherInfoWrapper>
  );
}

const EditOtherInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.6rem;
  .EditGigFormBottom,
  .EditGigFormTop {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;
