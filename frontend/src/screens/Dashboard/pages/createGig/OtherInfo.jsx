import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Input } from "../../../../components/forms";
import TagInput from "../../components/Tag";

export default function EditOtherInfo({
  onChange1,
  tagdata,
  setTagData,
  formdata1,
  subinfodata,
  setSubinfodata,
  categorydata,
  setCategory,
}) {
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
      id: 3,
      name: "deliveryDays",
      placeholder: "Add your Gig deliveryDays",
      type: "number",
      text: "Gig deliveryDays",
    },
  ];

  return (
    <EditOtherInfoWrapper>
      <div className="EditGigFormTop">
        {inputData.slice(0, 2).map((input) => {
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
        {/* tag upload */}
        <div className="w-100 flex column gap-1">
          <TagInput
            title="Add Gig Tag"
            placeholder={"Add Gig Tag"}
            tagdata={tagdata}
            setTagData={setTagData}
          />
        </div>
        {/* Subinfo upload */}
        <div className="w-100 flex column gap-1">
          <TagInput
            title="Add Gig Subinfo"
            placeholder={"Add Gig Subinfo"}
            tagdata={subinfodata}
            setTagData={setSubinfodata}
          />
        </div>
        <div className="w-100 flex column gap-1">
          <TagInput
            title="Add Gig Category"
            placeholder={"Add Gig Category"}
            tagdata={categorydata}
            setTagData={setCategory}
          />
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
  gap: 1.6rem;
  .taginput {
    outline: none;
    font-size: 1.3rem;
    font-weight: 500;
    transition: all 0.2s;
    /* font-family: "Barlow", sans-serif; */
    color: var(--dark-1);
    border: none;
    height: 100%;
  }
  .tagForm {
    min-height: 5rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    padding: 1rem 2rem;
    border-radius: 6px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.4);
      box-shadow: 0 2px 3px rgba(0, 0, 0, 0.08);
    }
    .tagWrapper {
      padding: 0.5rem 1rem;
      background-color: rgba(0, 0, 0, 0.08);
      border-radius: 40px;
      font-size: 13px;
      font-weight: 500;
    }
  }
  .EditGigFormBottom,
  .EditGigFormTop {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;
