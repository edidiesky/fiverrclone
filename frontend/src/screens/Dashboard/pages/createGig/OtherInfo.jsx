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
  type
}) {
  const inputData = [
    {
      id: 1,
      name: "price",
      type: "number",
      text: "Gig price",
      required: true,
    },
    {
      id: 3,
      name: "deliveryDays",
      type: "number",
      text: "Gig deliveryDays",
    },
  ];
  if (type) {
    return (
      <EditOtherInfoWrapper>
        <div className="EditGigFormTop">
        
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
    return (
      <EditOtherInfoWrapper>
        <div className="EditGigFormTop">
          {inputData.map((input) => {
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
