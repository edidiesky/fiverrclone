import React, { useState } from "react";
import styled from "styled-components";
import { RxCross2 } from "react-icons/rx";
import { MdLogout, MdOutlineDashboard, MdSettings } from "react-icons/md";
import { BsHeart } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { offSidebar } from "../../../../Features";
import Dropdown from "./Dropdown";
import { NavLink } from "react-router-dom";

export default function SmallSidebar() {
  const dispatch = useDispatch();
  const { sidebar } = useSelector((store) => store.toggle);
  const [togglesidebar, setToggleSidebar] = useState(false);
  return (
    <SmallSidebarContent className={sidebar ? "active" : ""}>
      <div className="barWrapper1">
        <RxCross2 onClick={() => dispatch(offSidebar())} />
      </div>
      <div className="smallSidebarWrapper">
        <ul className="flex column gap-1">
          <li className="flex w-100 gap-1 column item-center fs-12">
            <div
              className="w-100 flex item-center gap-2 justify-space px-2 py-1 radius-1 text-white"
              style={{ background: "var(--secondary)", borderRadius: "20px" }}
              onClick={() => setToggleSidebar(!togglesidebar)}
            >
              <div className="flex item-center gap-2">
                <MdOutlineDashboard className="fs-20" /> Dashboard
              </div>
              <BiChevronDown className="fs-20" />
            </div>
            {<Dropdown togglesidebar={togglesidebar} />}
          </li>
          <div className="w-100 fs-16">
            <NavLink
              exact
              className={({ isActive }) =>
                isActive
                  ? " active flex w-100 gap-2 item-center px-2 py-1 family1 fs-16 text-bold pt-2 text-dark"
                  : " flex w-100 gap-2 item-center px-2 py-1 family1 fs-16 text-bold pt-2 text-dark"
              }
              to={``}
            >
              <MdSettings className="fs-26" /> Settings
            </NavLink>
          </div>
          <li className="flex w-100 gap-2 item-center px-2 py-1 family1 fs-16 text-bold pt-2 text-blue">
            <MdLogout className="fs-26" /> Logout
          </li>
        </ul>
      </div>
    </SmallSidebarContent>
  );
}

const SmallSidebarContent = styled.div`
  position: fixed;
  left: 0;
  z-index: 2200;
  transition: all 1s;
  width: 280px;
  background: #fff;
  height: 100vh;
  top: 0%;
  left: -100%;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.3);
  &.active {
    left: 0;
  }
  @media (min-width: 790px) {
    display: none;
  }
  .barWrapper1 {
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 2rem 3rem;
    cursor: pointer;
    @media (min-width: 780px) {
      display: none;
    }
    svg {
      width: 3rem;
      height: 3rem;
      color: #222;
    }
  }
  .smallImage {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .nav-link {
    padding: 14px 20px;
    font-size: 1.3rem;
    height: 3rem;
    font-weight: 600;
    margin: 0 auto;
    width: 100%;
    color: var(--grey-1);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1.3rem;
    transition: all 0.5s;
    border-radius: 4px;
    font-family: "Karla", sans-serif;

    &:hover {
      color: var(--secondary);
      transform: translateX(-10px);
    }
    svg {
      font-size: 2rem;
    }
  }

  .smallSidebarWrapper {
    width: 90%;
    display: flex;
    flex-direction: column;
    z-index: 400;
    margin: 0 auto;
    gap: 2rem;
    a {
      font-weight: 400;
      margin: 0 auto;
      width: 100%;
      color: var(--grey-1);
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1.4rem;
      &:hover {
        background: #163765f2;
        color: #fff;
      }
      svg {
        font-size: 2rem;
      }
      &.active {
        background: var(--blue-2);
        position: relative;
        border-radius: 4px;
        color: var(--white);
      }
    }
  }
`;
