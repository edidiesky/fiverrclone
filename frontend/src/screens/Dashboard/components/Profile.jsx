import React from "react";
import { FiLogOut, FiMail, FiUser } from "react-icons/fi";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { ClearauthInfo } from "../../../Features/user/userSlice";

export default function Profile({ isactive, setIsActive }) {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    setIsActive(true);
    dispatch(ClearauthInfo());
  };

  return (
    <List
      className={
        isactive
          ? "py-1 back-white radius-1 column flex active"
          : "py-1 back-white radius-1 column flex"
      }
    >
      <li
        className="py-1 px-2 flex item-center gap-1 fs-14 text-light family1"
        onClick={() => setIsActive(true)}
      >
        <FiUser className="fs-20 text-green" /> Profile
      </li>
      <li
        className="py-1 px-2 flex item-center gap-1 fs-14 text-light family1"
        onClick={() => setIsActive(true)}
      >
        <FiMail className="fs-20 text-green" /> Inbox
      </li>
      <li
        className="py-1 px-2 flex item-center gap-1 fs-14 text-light family1"
        onClick={handleLogOut}
      >
        <FiLogOut className="fs-20 text-red" /> Logout
      </li>
    </List>
  );
}

const List = styled.ul`
  min-width: 165px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 200%;
  right: 0%;
  opacity: 0;
  visibility: hidden;
  background-color: #fff;
  border-radius: 4px;
  max-height: 0;
  transition: all 0.4s;
  &.active {
    opacity: 1;
    visibility: visible;
    max-height: 300px;
  }
  li {
    transition: all 0.3s;
    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
  }
`;
