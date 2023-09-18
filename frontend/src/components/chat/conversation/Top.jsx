import React from "react";
import styled from "styled-components";
import { RxCross1 } from "react-icons/rx";

export default function Top({ type, onsidebar, setOnSidebar }) {
  return (
    <TopIndexWrapper>
      <div className="w-90 auto flex item-center justify-space">
        <h4 style={{ fontWeight: "700" }} className="text-dark  fs-24">
          <span>
            Romis <span className="fs-16 family2 text-light">@romisriyoool</span>
          </span>
          {/* message */}
          {!type && (
            <span
              style={{ fontWeight: "500", fontSize: "12px", marginTop: "4px" }}
              className="block family2 text-extra-bold text-grey"
            >
              OnlineLocal time: Sep 10, 2023, 8:31 PM
            </span>
          )}
        </h4>
        {type ? (
          <div
            onClick={() => setOnSidebar(false)}
            className="icons flex item-center justify-center"
          >
            <RxCross1 />
          </div>
        ) : (
          <div
            onClick={() => setOnSidebar(!onsidebar)}
            className="headBtn fs-12  text-dark text-extra-bold"
          >
            {!onsidebar ? "Show Details" : "Hide Details"}
          </div>
        )}
      </div>
    </TopIndexWrapper>
  );
}

const TopIndexWrapper = styled.div`
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: grid;
  place-items: center;
  min-height: 12rem;

  z-index: 100;
  .icons {
    cursor: pointer;
    transition: all 0.4s;
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 50%;
    z-index: 3000;
    &:hover {
      background-color: #f7f7f7;
    }
  }
  .headBtn {
    cursor: pointer;
    border: 2px solid rgba(0, 0, 0, 1);
    padding: 0.6rem 1.3rem;
    border-radius: 40px;
    background-color: #f7f7f7;
  }
`;
