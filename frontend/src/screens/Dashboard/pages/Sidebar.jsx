import React, { useState } from "react";
import styled from "styled-components";
import { FiLogOut } from "react-icons/fi";

import { HiOutlineShoppingCart } from "react-icons/hi";

import { HiUsers } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { MdDashboard, MdAddBusiness, MdSettings } from "react-icons/md";
import { BsCollection } from "react-icons/bs";
import Logo from "../../../components/common/svg/Logo";
const SidebarWrapper = styled.div`
  width: 270px;
  background: var(--dark-1);

  height: 100vh;
  top: 0%;
  position: sticky;
  border-right: 1px solid #d1d1d1;
  .fill {
    fill: #333;
  }
  @media (max-width: 1080px) {
    display: inline-block;
    position: fixed;
    top: 0;
    left: -100%;
    display: none;
  }
  .fill {
    fill: #333;
  }

  .sidebarContainer {
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
    gap: 3rem;
    width: 90%;
    margin: 0 auto;
    .imageWrapper {
      width: 100%;
      padding: 1.6rem 2rem;
      .sidebarIcon {
        height: 5rem;
      }
    }

    .list {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      &.List1 {
        padding-top: 2rem;
        padding-bottom: 0;
        border-top: 1px solid #ccc;
        border-bottom: none;
      }
      h3 {
        color: #777;
        font-size: 1.6rem;
        font-weight: 600;
        width: 100%;
        margin: 1.5rem 0;
        padding: 1rem 0;
        text-align: start;
      }
      .nav-link {
        padding: 16px;
        font-size: 1.2rem;
        font-weight: 600;
        margin: 0 auto;
        width: 100%;
        color: var(--grey-1);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1.4rem;
        border-radius: 40px;

        &:hover {
          background: #2363c414;
          color: #50fc61;
        }
        svg {
          font-size: 2rem;
        }
        &.active {
          background: #2363c414;
          position: relative;
          color: #50fc61;
        }
      }
    }
  }
`;

export const sidebarData = [
  {
    id: 1,
    icon1: <MdDashboard />,
    title: "Dashboard",
    path: "",
  },
  {
    id: 2,
    icon1: <HiOutlineShoppingCart />,
    title: "gigs",
    path: "gigs",
  },
  {
    id: 3,
    icon1: <MdAddBusiness />,
    title: "Add gigs",
    path: "create-gig",
  },
  { id: 4, icon1: <BsCollection />, title: "Orders", path: "order" },

  { id: 5, icon1: <HiUsers />, title: "Buyers", path: "users" },
  { id: 6, icon1: <MdSettings />, title: "Settings", path: "Profile" },
];

export const sidebarData2 = [
  { id: 2, icon1: <FiLogOut />, title: "Log Out", path: "" },
];

export default function Sidebar() {
  return (
    <SidebarWrapper>
      <div className="sidebarContainer">
        <NavLink to={"/"} className="imageWrapper">
          <Logo type={"type"} />
        </NavLink>
        <div className="list">
          {sidebarData.map((x) => {
            return (
              <NavLink
                className="nav-link family1 uppercase"
                activeClassName="active"
                to={`/dashboard/${x.path}`}
                key={x.id}
              >
                {x.icon1}
                {x.title}
              </NavLink>
            );
          })}
        </div>

        <div className="list List1">
          {sidebarData2.map((x) => {
            return (
              <div className="nav-link family1" key={x.id}>
                {x.icon1} {x.title}
              </div>
            );
          })}
        </div>
      </div>
    </SidebarWrapper>
  );
}
