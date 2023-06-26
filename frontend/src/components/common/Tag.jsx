import React from "react";
import { RxCross1 } from "react-icons/rx";
import styled from "styled-components";

export default function TagInput({ tagdata, setTagData, title }) {
  const handleTagInput = (e) => {
    // check if the entetr key is pressed
    if (e.key !== "Enter") return;
    // check if the there is emppty value
    const value = e.target.value; 
    if (!value.trim()) return;
    // set the list
    setTagData([...tagdata, value]);
  };
  const deleteTagInput = (id) => {
    const tagFilterResult = tagdata.filter((x, index) => index !== id);
    setTagData(tagFilterResult);
  };

  return (
    <TagInfoWrapper>
      <div className="w-100 flex column gap-1">
        <h4 className="family1 fs-14 text-bold">{title}</h4>
        <div className="tagForm item-center">
          {tagdata.map((x, index) => {
            return (
              <div className="tagWrapper family1 text-light text-bold flex item-center gap-1">
                {x}{" "}
                <RxCross1
                  onClick={() => deleteTagInput(index)}
                  fontSize={"16px"}
                  style={{ cursor: "pointer" }}
                />
              </div>
            );
          })}
          <input
            type="text"
            onKeyDown={handleTagInput}
            className="taginput family1"
            placeholder={title}
          />
        </div>
      </div>
    </TagInfoWrapper>
  );
}

const TagInfoWrapper = styled.div`
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
`;
