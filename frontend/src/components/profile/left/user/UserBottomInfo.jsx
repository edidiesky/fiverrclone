import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

export default function UserBottomInfo() {
  const { userInfo } = useSelector((store) => store.user);
  const [desc, setDec] = useState(false);
  const [language, setLanguage] = useState(false);
  const [skill, setSkill] = useState(false);

  return (
    <UserBottomInfoContent>
      {/* bototm */}
      <div className="w-100 py-2 flex column gap-1">
        {/* description */}
        <div className="flex bottom w-100 fs-16 text-dark text-bold column gap-2">
          <span className="flex fs-18 justify-space item-center gap-2">
            Description
            {!desc && (
              <div
                className="text-light text-blue"
                onClick={() => setDec(true)}
              >
                Edit Description
              </div>
            )}
          </span>
          {/* sample description */}
          {/* <span className="text-light">
            Analyzes aerial pictures of rooftops using sophisticated software to
            convert these aerial pictures into CAD drawings including exact
            measurements.
          </span> */}
          {/* input description tab start */}
          <div
            className={
              desc
                ? "w-100 flex column justify-space gap-2 descTab active"
                : "w-100 flex column justify-space gap-2 descTab"
            }
          >
            {/* text area */}
            <textarea
              className="area family1"
              placeholder="Please tell us about any hobbies, additional expertise, or anything else you'd like to add"
            ></textarea>
            {/* add button section */}
            <div className="w-100 flex item-center gap-1">
              <div
                className="w-100 contactBtn fs-16"
                onClick={() => setDec(false)}
              >
                Cancel
              </div>
              <div className="w-100 contactBtn green fs-16">Update</div>
            </div>
          </div>
          {/* input description tab end */}
        </div>
        {/* languages */}
        <div className="flex bottom w-100 fs-16 text-dark text-bold column gap-2">
          <span className="flex flex fs-18 justify-space item-center gap-2">
            Languages
            <div
              className="text-light text-blue"
              onClick={() => setLanguage(true)}
            >
              Add New
            </div>
          </span>
          {/* input description tab start */}
          <div
            className={
              language
                ? "w-100 flex column justify-space gap-2 descTab active"
                : "w-100 flex column justify-space gap-2 descTab"
            }
          >
            {/* text area */}
            <input
              type="text"
              placeholder="Add Language"
              className="fs-16 input"
            />
            {/* add button section */}
            <div className="w-100 flex item-center gap-1">
              <div
                className="w-100 contactBtn fs-16"
                onClick={() => setLanguage(false)}
              >
                Cancel
              </div>
              <div className="w-100 contactBtn green fs-16">Update</div>
            </div>
          </div>
          {/* input description tab end */}
          {/* <span className="text-light">
            English - <span className="text-light text-grey2">Fluent</span>
          </span> */}
        </div>
        {/* accounts */}
        <div className="flex bottom w-100 fs-16 text-dark text-bold column gap-2">
          <span className="flex flex fs-18 justify-space item-center gap-2">
            Linked Accounts
            <div className="text-light text-blue">Add New</div>
          </span>
          <span className="text-light">Google</span>
        </div>
        {/* skills */}
        <div className="flex bottom w-100 fs-16 text-dark column gap-2 text-bold gap-2">
          <span className="flex flex fs-18 justify-space item-center gap-2">
            Skills
            {!skill && (
              <div
                className="text-light text-blue"
                onClick={() => setSkill(true)}
              >
                Add Skills
              </div>
            )}
          </span>
          {/* <div className="list w-100">
            <span className="fs-14 skills family1">3d Modelling</span>
            <span className="fs-14 skills family1">3d Modelling</span>
            <span className="fs-14 skills family1">3d Modelling</span>
          </div> */}
          {/* input description tab start */}
          <div
            className={
              skill
                ? "w-100 flex column justify-space gap-2 descTab active"
                : "w-100 flex column justify-space gap-2 descTab"
            }
          >
            {/* text area */}
            <div className="w-100 flex column gap-2">
              <input
                type="text"
                placeholder="Add Skills"
                className="fs-16 input"
              />
              <input
                type="text"
                placeholder="Experience Level"
                className="fs-16 input"
              />
            </div>
            {/* add button section */}
            <div className="w-100 flex item-center gap-1">
              <div
                className="w-100 contactBtn fs-16"
                onClick={() => setSkill(false)}
              >
                Cancel
              </div>
              <div className="w-100 contactBtn green fs-16">Update</div>
            </div>
          </div>
          {/* input description tab end */}
        </div>
      </div>
    </UserBottomInfoContent>
  );
}

const UserBottomInfoContent = styled.div`
  padding: 2rem;
  width: 100%;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.3);
  .input {
    background-color: #fff;
    padding: 1.2rem 2rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
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
  a:hover {
    text-decoration: underline;
  }
  .skills {
    border: 1px solid rgba(0, 0, 0, 0.3);
    padding: 0.9rem 1.2rem;
    border-radius: 40px;
  }
  .list {
    flex-wrap: wrap;
    gap: 1.2rem;
  }
  .bottom {
    padding-bottom: 1.6rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }
`;
