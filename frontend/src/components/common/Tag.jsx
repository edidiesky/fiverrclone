import React from "react";
import { RxCross1 } from "react-icons/rx";
import styled from "styled-components";

export default function TagInput({ tagdata, setTagData, title }) {
  const handleTagInput = (e) => {
    // check if the entetr key is pressed
    if (e.key !== "Enter") return;
    // check if the there is emppty value
    let value = e.target.value;
    if (!value.trim()) return;
    // set the list
    setTagData([...tagdata, value]);
  };

  // console.log(tagdata);
  const deleteTagInput = (id) => {
    const tagFilterResult = tagdata.filter((x, index) => index !== id);
    setTagData(tagFilterResult);
  };

  return (
    <TagInfoWrapper>
      <div className="tagForm item-center flex column gap-1">
        {/* <div className="text-grey capitalize labelspan text fs-16 text-bold">
          {title}
        </div> */}
        <input
          type="text"
          onKeyDown={handleTagInput}
          className="taginput family1"
          placeholder={title}
        />
        <div style={{flexWrap:"wrap"}} className="w-100 flex item-center gap-1">
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
        </div>
      </div>
    </TagInfoWrapper>
  );
}

const TagInfoWrapper = styled.div`
  input {
    height: 6rem;
    border-radius: 8px;
    background: transparent;
    padding: 0 1.8rem;
    width: 100%;
    outline: none;
    font-size: 1.6rem;
    font-weight: normal;
    font-family: inherit;
    font-family: "Roboto Condensed", sans-serif;
    border: 1px solid rgba(0, 0, 0, 0.4);

    color: var(--grey-3);

    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.4);
    }
    &:focus {
      border: 2px solid var(--dark-1);
      background: transparent;
    }
    &.true {
      background: #fff;
    }
    &.inputError {
      border: 2px solid var(--red);
    }
    &:invalid[focused="true"] ~ span {
      display: block;
    }
  }
  /* .labelspan {
    position: absolute;
    top: -15%;
    padding: 0 0.7rem;
    left: 3%;
    background-color: #fff;
    font-weight: normal;
  } */
  .tagForm {
    border-radius: 8px;
    background: transparent;
    width: 100%;
    outline: none;
    position: relative;
    font-size: 1.6rem;
    font-weight: normal;
    font-family: inherit;
    font-family: "Roboto Condensed", sans-serif;
    .tagWrapper {
      padding: 0.7rem 1rem;
      background-color: rgba(0, 0, 0, 0.04);
      border-radius: 40px;
      font-size: 14px;
      font-weight: 500;
    }
  }
`;
