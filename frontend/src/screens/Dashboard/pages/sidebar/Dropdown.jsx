import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

export const sidebarData = [
  {
    id: 1,
    title: "My Portfolio",
    path: "",
  },
  {
    id: 2,
    title: "Manage Products",
    path: " product",
  },
  {
    id: 3,
    title: "Manage Clients",
    path: "transactions",
  },
  {
    id: 4,
    title: "Manage Coupons",
    path: "coupon",
  },
];
export const sidebarData2 = [
  {
    id: 1,
    title: "My Portfolio",
    path: "",
  },
  {
    id: 2,
    title: "Manage Products",
    path: "product",
  },
  {
    id: 3,
    title: "Manage Clients",
    path: "clients",
  },
  {
    id: 4,
    title: "Manage Coupons",
    path: "coupon",
  },
  {
    id: 5,
    title: "Manage Vendors",
    path: "vendors",
  },
  {
    id: 8,
    title: "Manage Statistics",
    path: "stats",
  },
];

export default function Dropdown({ togglesidebar, data }) {
  // user's state
  // const { userInfo } = useSelector((store) => store.user);
  const userInfo = { isAdmin: true };
  return (
    <DropDownContainer className={togglesidebar ? "w-100 active" : "w-100"}>
      <div className="list">
        {userInfo?.isAdmin
          ? sidebarData2.map((x) => {
              return (
                <NavLink
                  exact
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to={`${x.path}`}
                  key={x.id}
                >
                  {x.title}
                </NavLink>
              );
            })
          : sidebarData.map((x) => {
              return (
                <NavLink
                  exact
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to={`${x.path}`}
                  key={x.id}
                >
                  {x.title}
                </NavLink>
              );
            })}
      </div>
    </DropDownContainer>
  );
}

const DropDownContainer = styled.div`
  max-height: 0;
  transition: all 0.5s ease-in-out;
  opacity: 0;
  visibility: hidden;
  &.active {
    max-height: 29rem;
    opacity: 1;
    visibility: visible;
  }
`;
