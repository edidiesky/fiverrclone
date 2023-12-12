import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
// import Logo2 from "../common/svg/Logo12";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../components/common/svg/Logo";
import { useSelector } from "react-redux";
// import Logo from "../common/svg/Logo";
// import Dropdown from "../common/Dropdown";

const sidebarData = [
  // {
  //   id: 1,
  //   title: "Overview",
  //   path: "/dashboard/",
  // },
  // {
  //   id: 2,
  //   title: "Reviews",
  //   path: "/dashboard/Reviews",
  // },
  {
    id: 3,
    title: "Gigs",
    path: "/dashboard",
  },
  { id: 4, title: "Orders", path: "/dashboard/order" },
  { id: 6, title: "Profile", path: "/dashboard/Profile" },
];
export default function Header({ type }) {
  const [drop, setDrop] = useState(false);
  const {userInfo} = useSelector(store=> store.user)

    return (
      <>
        <ListingHeaderContainer className="type">
          <div className="aboutCenter flex item-center gap-3 justify-space w-85 auto">
            <div className="flex item-center gap-2">
              <Link to={"/"}>
                {/* <Logo2 /> */}
                <Logo active={true} />
              </Link>
              <div
                style={{ gap: "1rem" }}
                className="flex gap-1 list w-100 justify-start item-center"
              >
                {sidebarData.map((x) => {
                  return (
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to={`${x.path}`}
                      key={x.id}
                    >
                      <span className="span"> {x.title}</span>
                    </NavLink>
                  );
                })}
              </div>
            </div>
            <div className="flex top right item-center gap-1 justify-end">
              <AnimatePresence
                initial="false"
                exitBeforeEnter={true}
                onExitComplete={() => null}
              >
                {/* {drop && (
                  <Dropdown setDrop={setDrop} drop={drop} type={"type"} />
                )} */}
              </AnimatePresence>
              <div
                onClick={() => setDrop(!drop)}
                style={{
                  width: "4rem",
                  height: "4rem",
                  borderRadius: "50%",
                  background: "rgba(0,0,0,.1)",
                  color: "#Fff",
                }}
                className="profile_wrapper flex item-center justify-center"
              >
                <div
                  style={{
                    width: "90%",
                    height: "90%",
                    borderRadius: "50%",
                    background: "#000",
                    color: "#Fff",
                    border: "2px solid #fff",
                  }}
                  className="fs-16 text-white flex item-center justify-center"
                >
                  {userInfo?.name?.[0]}
                </div>
              </div>
              <h5
                style={{ fontWeight: "800" }}
                className="fs-16 family3 text-extra-bold"
              >
                {userInfo?.name}
                <span className="block fs-14 text-light text-grey">
                  {userInfo?.email}
                </span>
              </h5>
            </div>
          </div>
        </ListingHeaderContainer>
      </>
    );
  
}

const ListingHeaderContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  top: 0;
  position: fixed;
  z-index: 300;
  background-color: #fff;
  .list {
    @media (max-width: 780px) {
      display: none;
    }
  }
  .dropdown {
    position: absolute;
    right: 3%;
    background-color: #fff;
    min-width: 240px;
    padding: 0.5rem 0;
    z-index: 200000;
    border-radius: 12px;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
    @media (min-width: 1807px) {
      right: 17%;
    }
    li {
      padding: 0.7rem 1.3rem;
      cursor: pointer;
      border-radius: inherit;
      &:hover {
        background-color: #f7f7f7;
      }
      /* border-bottom: 1px solid rgba(0, 0, 0, 0.07); */
    }
  }
  .right {
    justify-content: flex-end;
  }

  .nav-link {
    padding: 7px 14px;
    font-size: 14px;
    font-weight: 600;
    color: var(--dark-1);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    border-radius: 40px;
    position: relative;

    &:hover {
      background-color: #f7f7f7;
      color: var(--dark-1);
      /* font-weight: 700; */
    }
    &.active {
      /* background-color: #000; */
      /* color: #fff; */
      background-color: #f7f7f7;
      border: 2px solid rgba(0, 0, 0, 0.8);
    }
  }
  &.type {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .profile_wrapper {
    transition: all 0.5s;
    &:hover {
      transform: scale(1.1);
    }
  }
  .top {
    position: relative;
    @media (max-width: 780px) {
      justify-content: flex-start;
    }
  }
  .aboutCenter {
    @media (max-width: 780px) {
      /* flex-direction: column; */
      /* align-items: flex-start; */
      gap: 1rem;
      justify-content: space-between;
    }
  }

  .headBtn {
    border: 1px solid rgba(0, 0, 0, 0.4);
    padding: 0.6rem 1.7rem;
    border-radius: 40px;
  }
`;
