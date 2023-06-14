import React, { useState } from "react";
import styled from "styled-components";
import { BiSearch, BiStar } from "react-icons/bi";
export default function InboxLeft({toggle}) {
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
        <div className="top fs-20 text-light flex item-center justify-space w-100">
          All conversations
          <BiSearch
            className="fs-24 text-grey2"
            onClick={() => setSearch(true)}
          />
        </div>
      )}
      <div className="center flex column gap-2">
        <div onClick={toggle} className="w-100 py-1 borderB flex item-center justify-space">
          {/* image and title */}
          <div className="flex1 flex item-center gap-2">
            <img
              src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/56a09771086f0077fcfe38f13d80ff28-1639316525935/140c8b5f-0558-4460-8c47-c2ba3af3b736.jpg"
              alt=""
              className="avatar"
            />
            <h4 className="text-dark fs-16 text-extra-bold">
              Logo_56575
              {/* message */}
              <span className="block text-light family1">Hi</span>
            </h4>
          </div>
          {/* time */}
          <div className="flex column gap-1">
            <div className="flex fs-16 text-light text-grey gap-1 item-center">
              2 days <BiStar className="fs-18 text-grey" />
            </div>
          </div>
        </div>
      </div>
    </InboxLeftWrapper>
  );
}
const InboxLeftWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  .avatar {
    width:6rem;
    height: 6rem;
  }
  @media (max-width:980px) {
    display: none;
    }
  .borderB {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding: 1.2rem 2rem;
  }
  .top {
    padding: 2rem;
    background-color: #fff;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  h5 {
    &:hover {
      text-decoration: underline;
    }
  }
  .input {
    background-color: #fff;
    padding: 1.2rem 2rem;
    flex: 1;
    font-size: 16px;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  .center {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    overflow-y: auto;
    width: 100%;
    max-height: 40rem;
    padding-bottom: 3rem;
    &::-webkit-scrollbar {
      width: 7px;
      height: 7px;
      background: #e8e6e6;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background: var(--grey-1);
      border-radius: 10px;
      transition: all 0.5s;
      &:hover {
        background: #333;
      }
    }
  }
`;
