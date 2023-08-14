import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

export default function UserBottomInfo() {
  const { userInfo } = useSelector((store) => store.user);
  const { userDetails } = useSelector((store) => store.user);

  const checkUser = userInfo?.name === userDetails?.name;

  const [description, setDecription] = useState("");
  const [language, setLanguage] = useState([]);
  const [skill, setSkill] = useState([]);

  useEffect(() => {
    if (userDetails) {
      const { about, language, skills } = userDetails;
      setDecription(about?.description);
      setLanguage(language);
      setSkill(skills);
    }
  }, [userDetails, setDecription, setLanguage, setSkill]);

  return (
    <UserBottomInfoContent>
      {/* bototm */}
      <div className="w-100 py-2 flex column gap-3">
        {/* description */}
        <div className="flex family1 bottom w-100 fs-20 text-dark text-bold column gap-2">
          <span className="flex family1 fs-20 text-bold justify-space item-center gap-2">
            Description
            {!description && (
              <div
                className=" text-blue fs-14"
                onClick={() => setDecription(true)}
              >
                Edit Description
              </div>
            )}
          </span>
          {/* sample description */}
          {description && (
            <span className="fs-18 text-grey text-light">{description}</span>
          )}
          {/* <span className="">
            Analyzes aerial pictures of rooftops using sophisticated software to
            convert these aerial pictures into CAD drawings including exact
            measurements.
          </span> */}
          {/* input description tab start */}
          {/* input description tab end */}
        </div>
        {/* languages */}
        <div className="flex family1 bottom w-100 fs-20 text-dark text-bold column gap-2">
          <span className="flex family1 flex fs-20 justify-space item-center gap-2">
            Languages
            {checkUser && (
              <div
                className=" text-blue fs-14"
                onClick={() => setLanguage(true)}
              >
                Add New
              </div>
            )}
          </span>
          {language?.length > 0 && (
            <div className="list w-100">
              {language?.map((x) => {
                return <span className="fs-14 skills family1">{x}</span>;
              })}
            </div>
          )}
          {/* input description tab start */}
          {/* input description tab end */}
          {/* <span className="">
            English - <span className=" text-grey2">Fluent</span>
          </span> */}
        </div>
        {/* skills section */}
        <div className="flex family1 bottom w-100 fs-20 text-dark column gap-2 text-bold gap-2">
          <span className="flex family1 flex fs-20 justify-space item-center gap-2">
            Skills
            {checkUser && (
              <div className=" text-blue fs-14" onClick={() => setSkill(true)}>
                Add Skills
              </div>
            )}
          </span>
          {skill?.length > 0 && (
            <div className="list w-100">
              {skill?.map((x) => {
                return <span className="fs-14 skills family1">{x}</span>;
              })}
            </div>
          )}
          {/* input description tab start */}

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
