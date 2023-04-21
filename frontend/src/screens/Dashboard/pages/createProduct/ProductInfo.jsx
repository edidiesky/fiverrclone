import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "../../../../components/forms";

export default function EditProductInfo({
  onChange2,
  formdata2,
  setFormData2,
}) {


  const inputData1 = [
    {
      id: 1,
      name: "title",
      placeholder: "Add your product name",
      type: "text",
      text: "Product Name",
    },
    {
      id: 2,
      name: "brand",
      placeholder: "Add your product brand",
      type: "text",
      text: "Product Brand",
    },
  ];

  return (
    <EditProductInfoWrapper>
      <div className="EditProductForm flex column gap-2">
        <h3 className="family1 fs-20 text-extra-bold">
          Details about your product
        </h3>
        <div className="EditProductFormBottom">
          {inputData1.slice(0, 1).map((input) => {
            return (
              <Input
                id={input.text}
                onChange={onChange2}
                placeholder={input.placeholder}
                type={input.type}
                name={input.name}
                value={formdata2[input.name]}
                input={input}
                key={input.id}
                required={input.required}
                pattern={input.pattern}
                errorMessage={input.errorMessage}
              />
            );
          })}
          <label htmlFor="text" className="textLabel family1">
            Product description
            <textarea
              type="text"
              placeholder="Place a description on the product"
              name="description"
              value={formdata2.description}
              onChange={onChange2}
              id="text"
            />
          </label>

          <label htmlFor="Additional" className="textLabel family1">
            Product Additional Info
            <textarea
              type="text"
              placeholder="Place insert Additional Info on the product"
              id="Additional"
            />
          </label>

          {inputData1.slice(1, 2).map((input) => {
            return (
              <Input
                id={input.text}
                onChange={onChange2}
                placeholder={input.placeholder}
                type={input.type}
                name={input.name}
                value={formdata2[input.name]}
                input={input}
                key={input.id}
                required={input.required}
                pattern={input.pattern}
                errorMessage={input.errorMessage}
              />
            );
          })}

          {/* image */}
        </div>
      </div>
    </EditProductInfoWrapper>
  );
}

const EditProductInfoWrapper = styled.div`
  width: 100%;
  padding: 2rem 3rem;
  display: flex;
  background: var(--white);
 
  border-radius: 4px;
  flex-direction: column;
  width: 100%;
  gap: 1.6rem;
  .EditProductFormBottom {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    padding: 1rem 0;
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
  }
`;
