import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { UpdateProfile } from "../../../../Features";

export default function EditForm({
  type,
  category,
  setCategory,
  setInputData,
  inputdata,
  experienceOptions,
  description,
  setDescription,
  setDesc,
}) {
  const dispatch = useDispatch();
  if (type === "description") {
    return (
      <EditFormContent>
        <div className="flex w-90 auto column gap-1">
          <textarea
            type="text"
            value={description}
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            className="input textarea fs-16"
            placeholder="Please tell us any additional hobbies, additonal expertise, or anything else you like to add"
          />
          <div
            style={{
              paddingTop: "1.5rem",
              borderTop: "1px solid rgba(0,0,0,.1)",
            }}
            className="w-100 flex item-center gap-2 justify-space"
          >
            <button
              onClick={() => setDesc(false)}
              className="editBtn text-bold flex-1 text-center cancel fs-16"
            >
              Cancel
            </button>
            <button
              onClick={() =>
                dispatch(UpdateProfile({ description: description }))
              }
              className="editBtn text-bold flex-1 text-center submit fs-16"
            >
              Add
            </button>
          </div>
        </div>
      </EditFormContent>
    );
  }

  return (
    <EditFormContent>
      <div className="flex w-90 auto column gap-1">
        <input
          type="text"
          className="input fs-16"
          placeholder="Add Skill (e.g. Voice Talent))"
        />
        <select
          value={category}
          name="category"
          style={{ fontSize: "15px" }}
          className=" input"
          placeholder="Choose one fs-14"
          onChange={(e) => setCategory(e.target.value)}
        >
          {experienceOptions.map((x, index) => {
            return (
              <option
                style={{ fontSize: "15px" }}
                className=""
                value={x}
                key={index}
              >
                {x}
              </option>
            );
          })}
        </select>
        <div
          style={{
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(0,0,0,.1)",
          }}
          className="w-100 flex item-center gap-2 justify-space"
        >
          <button className="editBtn text-bold flex-1 text-center cancel fs-16">
            Cancel
          </button>
          <button className="editBtn text-bold flex-1 text-center submit fs-16">
            Add
          </button>
        </div>
      </div>
    </EditFormContent>
  );
}

const EditFormContent = styled.div`
  padding: 2rem;
  width: 100%;
  background-color: var(--grey-4);
  border: 1px solid rgba(0, 0, 0, 0.1);
  .input {
    background-color: #fff;
    padding: 1.2rem 2rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    &.textarea {
      height: 15rem;
      background-color: var(--grey-4);
      border: none;
      font-size: 16px;
      /* border-bottom: 2px solid rgba(0, 0, 0, 0.1); */
    }
    &:focus {
      border: 1px solid var(--blue-1);
    }
  }
  .editBtn {
    padding: 1.2rem 2rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    outline: none;
    cursor: pointer;
    background-color: #fff;
    opacity: 0.5;
    transition: all 0.4s ease;
    &:hover {
      opacity: 1;
    }
    &.submit {
      background-color: var(--green);
      color: #fff;
      border: none;
    }
  }
  .descTab {
    height: 20rem;
    padding: 2rem;
    background-color: #f5f5f5;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    display: none;
    &.active {
      display: flex;
    }
    .area {
      border: none;
      outline: none;
      background-color: inherit;
      font-size: 14px;
      height: 15rem;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
  }
`;
