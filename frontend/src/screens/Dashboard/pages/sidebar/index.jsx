import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { MdLogout, MdOutlineDashboard, MdSettings } from "react-icons/md";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import Dropdown from "./Dropdown";

const SidebarWrapper = styled.div`
  width: 24rem;
  background: #fff;

  @media (max-width: 780px) {
    display: inline-block;
    position: fixed;
    top: 0;
    left: -100%;
    display: none;
  }

  .sidebarContainer {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    position: sticky;
    left: 0;
    top: 20%;
    li:hover {
      color: var(--secondary);
    }
    .list {
      width: 100%;
      display: flex;
      flex-direction: column;
      font-family: "Karla", sans-serif;
      gap: 1rem;
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
    }
  }
`;

export default function SidebarIndex() {
  const [togglesidebar, setToggleSidebar] = useState(false);
  return (
    <SidebarWrapper>
      <div className="sidebarContainer w-90 auto">
        <ul className="flex column gap-1">
          <div className="flex w-100 gap-1 column item-center fs-14 text-bold">
            <div
              className="w-100 flex item-center gap-2 justify-space px-2 py-2 radius-1 text-white"
              style={{
                background: "var(--primary)",
                borderRadius: "10px",
                padding: "1.5rem 2rem",
              }}
              onClick={() => setToggleSidebar(!togglesidebar)}
            >
              <div className="flex item-center gap-2">
                <MdOutlineDashboard className="fs-20" /> Dashboard
              </div>
              <BiChevronDown className="fs-20" />
            </div>
            {
              <Dropdown
                togglesidebar={togglesidebar}
                data={[{ id: 1, title: "Product" }]}
              />
            }
          </div>
          <NavLink
            exact
            className={({ isActive }) =>
              isActive
                ? "nav-link active flex w-100 gap-2 item-center px-2 py-1  fs-14 text-bold pt-2 text-dark"
                : "nav-link flex w-100 gap-2 item-center px-2 py-1 fs-14 text-bold pt-2 text-dark"
            }
            to={``}
          >
            <MdSettings className="fs-20" /> Settings
          </NavLink>
          <li className="flex w-100 gap-2 item-center px-2 py-1 fs-14 text-bold pt-2 text-blue">
            <MdLogout className="fs-20" /> Logout
          </li>
        </ul>
      </div>
    </SidebarWrapper>
  );
}
