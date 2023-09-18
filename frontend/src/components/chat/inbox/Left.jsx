import React, { useState } from "react";
import styled from "styled-components";
// import { GoFilter } from "react-icons/go";
import { BiSearch, BiStar } from "react-icons/bi";
export default function InboxLeft({ toggle }) {
  const [search, setSearch] = useState(false);
  let image = true;
  const MessageSearch = () => {
    return (
      <div className="w-100 borderB flex item-center gap-1">
        <input
          type="text"
          placeholder="Search for username"
          className="input"
        />
        <h5
          onClick={() => setSearch(false)}
          className="fs-18 text-light text-grey2"
        >
          Close
        </h5>
      </div>
    );
  };
  return (
    <InboxLeftWrapper>
      {search ? (
        <MessageSearch />
      ) : (
        <div className="top w-85 auto fs-20 text-extra-bold flex item-center justify-center w-100">
          <div className="w-85 auto flex family2 item-center justify-space ">
            Messages
            <div className="icon flex family2 item-center justify-center">
              <BiSearch
                className="fs-24 text-dark"
                onClick={() => setSearch(true)}
              />
            </div>
          </div>
        </div>
      )}
      <div className="center flex family2 column gap-2">
        <div
          onClick={toggle}
          className="w-85 auto py-1 chatTab borderB flex item-center justify-space"
        >
          {/* image and title */}
          <div className="flex1 flex item-center" style={{ gap: "10px" }}>
            <img
              src="https://a0.muscache.com/im/pictures/user/9f63574d-3b11-44c5-937b-5a2eeef401db.jpg?im_w=240"
              alt=""
              className="avatar"
            />
            <div className="flex column h-100">
              <h4 className="text-dark fs-16 text-extra-bold">Bookiply</h4>

              <span className="fs-12 text-extra-bold text-grey">
                Inquiry. Dec 8 - 13
              </span>
            </div>
          </div>
        </div>
      </div>
    </InboxLeftWrapper>
  );
}
const InboxLeftWrapper = styled.div`
  /* width: 500px; */
  flex: 0 0 350px;
  min-height: 100%;
  position: sticky;
  top: 0;
  .chatTab {
    padding: 1.5rem;
    background-color: #fafafa;
  }
  .avatar {
    width: 6rem;
    height: 6rem;
    object-fit: cover;
  }
  @media (max-width: 980px) {
    display: none;
  }
  .borderB {
    padding: 1.2rem 2rem;
    border-radius: 20px;
  }
  .top {
    padding: 1.2rem 2rem;
  }
  h5 {
    &:hover {
      text-decoration: underline;
    }
  }
  .input {
    background-color: #fff;
  }
  .center {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    overflow-y: auto;
    width: 100%;
    max-height: 40rem;
    padding-bottom: 3rem;
  }
`;
