import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import EditForm from "./editform";

export default function UserBottomInfo() {
  const { userInfo } = useSelector((store) => store.user);
  const { userDetails } = useSelector((store) => store.user);

  const checkUser = userInfo?.name === userDetails?.name;
  const [ondesc, setOnDesc] = useState(false);
  const [onlang, setOnLang] = useState(false);
  const [onskill, setOnSkill] = useState(false);

  const [description, setDecription] = useState("");
  const [languagetext, setLanguageText] = useState("");
  const [skilltext, setSkillText] = useState("");
  const [language, setLanguage] = useState([]);
  const [skill, setSkill] = useState([]);

  const experienceOptions = ["Begineer", "Intermediate", "Expert"];
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (userDetails) {
      const { about } = userDetails;
      setDecription(about?.description);
      setLanguage(about?.language);
      setSkill(about?.skills);
    }
  }, [userDetails, setDecription, setLanguage, setSkill]);

  // console.log(language);

  return (
    <UserBottomInfoContent>
      {/* bottom */}
      <div className="w-100 py-2 flex column gap-3">
        {/* description */}
        <div className="flex family1 bottom w-100 fs-20 text-dark text-bold column gap-2">
          <span className="flex family1 fs-20 text-bold justify-space item-center gap-2">
            Description
            {!ondesc && checkUser && (
              <div
                className=" text-blue fs-16"
                onClick={() => setOnDesc(!ondesc)}
              >
                Edit Description
              </div>
            )}
          </span>
          {ondesc && checkUser ? (
            <EditForm
              type="description"
              description={description}
              setDescription={setDecription}
              setEditInputField={setOnDesc}
            />
          ) : (
            <>
              {description && (
                <span className="fs-18 text-grey text-light">
                  {description}
                </span>
              )}
            </>
          )}
        </div>
        {/* languages */}
        <div className="flex family1 bottom w-100 fs-20 text-dark text-bold column gap-2">
          <span className="flex family1 flex fs-20 justify-space item-center gap-2">
            Languages
            {checkUser && (
              <span
                className=" text-blue fs-16"
                onClick={() => setOnLang(!onlang)}
              >
                Add New
              </span>
            )}
          </span>
          {checkUser && onlang && (
            <EditForm
              category={language}
              setCategory={setLanguage}
              experienceOptions={experienceOptions}
              setEditInputField={setOnLang}
              type={"language"}
              languagetext={languagetext}
              setLanguageText={setLanguageText}
            />
          )}
          {language?.length > 0 && (
            <div className="list_1 w-100">
              {language?.map((x) => {
                return (
                  <span
                    style={{ margin: ".5rem" }}
                    className="fs-16 skills family1"
                  >
                    {x}
                  </span>
                );
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
              <div
                className=" text-blue fs-16"
                onClick={() => setOnSkill(!onskill)}
              >
                Add Skills
              </div>
            )}
          </span>
          {checkUser && onskill && (
            <EditForm
              skill={skill}
              setSkill={setSkill}
              skilltext={skilltext}
              setEditInputField={setOnSkill}
              setSkillText={setSkillText}
            />
          )}
          {skill?.length > 0 && (
            <div className="list_1 flex w-100">
              {skill?.map((x) => {
                return (
                  <span
                    style={{ margin: ".5rem" }}
                    className="fs-16 skills family1"
                  >
                    {x}
                  </span>
                );
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
  .list_1 {
    flex-wrap: wrap;
    gap: 1.2rem;
  }
  .bottom {
    padding-bottom: 1.6rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }
`;
