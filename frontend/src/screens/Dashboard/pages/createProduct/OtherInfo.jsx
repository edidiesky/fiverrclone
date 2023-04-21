import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "../../../../components/forms";

export default function EditOtherInfo({ onChange1, formdata1, setFormData1 }) {
  const inputData = [
    {
      id: 1,
      name: "price",
      placeholder: "Add your product price",
      type: "number",
      text: "Product price",
      required: true,
    },
    {
      id: 2,
      name: "countInStock",
      placeholder: "Add your product countInStock",
      type: "number",
      text: "Product countInStock",
    },
    {
      id: 3,
      name: "percentage",
      placeholder: "Add your product percentage",
      type: "number",
      text: "Product percentage",
    },
    {
      id: 4,
      name: "capacity",
      placeholder: "Add your product capacity",
      type: "number",
      text: "Product capacity",
    },
    {
      id: 5,
      name: "colors",
      placeholder: "Add your product colors",
      type: "text",
      text: "Product colors",
    },
    {
      id: 6,
      name: "price2",
      placeholder: "Add your product selling price",
      type: "number",
      text: "Product Selling Price",
    },
  ];

  return (
    <EditOtherInfoWrapper>
      <div className="pricing1Wrapper border w-100 flex gap-2 column">
        <h3 className="family1 fs-20 text-extra-bold">
          What kind of pricing do you want to offer?
        </h3>
        <div className="flex w-100 item-center gap-2 priceBottom">
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
        </div>
      </div>
    </EditOtherInfoWrapper>
  );
}

const EditOtherInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  .border {
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  .pricing1Wrapper {
    padding: 2.6rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    background-color: #fff;
  }
`;
