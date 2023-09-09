import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import { offSidebar } from "../../Features";

const data = [
  { id: 1, title: "Home", path: "" },
  { id: 2, title: "Passport", path: "passport" },
  { id: 3, title: "Visa", path: "visa" },
  { id: 4, title: "Travel", path: "travels" },
  { id: 5, title: "About", path: "about" },
  { id: 6, title: "Agents", path: "agents" },
  { id: 7, title: "Contact Us", path: "contact" },
];

export default function Sidebar() {
  const dispatch = useDispatch();
  const { sidebar } = useSelector((store) => store.toggle);

  let user = "seller";
  return (
    <SidebarContainer className={sidebar ? "active" : ""}>
      <div className="backdrop" onClick={() => dispatch(offSidebar())}></div>
      <div className="SidebarWrapper">
        <div className="sidebarContainer flex gap-2 column">
          <ul className="flex column w-100 auto py-4 gap-2">
            {data.map((x) => {
              return (
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link fs-16  text-grey2 text-light text-bold active"
                      : "nav-link fs-16  text-grey2 text-light text-bold"
                  }
                  to={`${x.path}`}
                  onClick={() => dispatch(offSidebar())}
                  key={x.id}
                >
                  {x.title}
                </NavLink>
              );
            })}
          </ul>
        </div>
      </div>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 85000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.8s;
  left: -100%;

  @media (min-width: 980px) {
    display: none;
  }

  &.active {
    opacity: 1;
    visibility: visible;
    left: 0%;
  }
  .nav-link {
    padding: 1rem 2rem;
    width: 100%;
    font-weight: 600;
    border-bottom: 1px solid rgba(0, 0, 0, 0.09);
    &:hover {
      color: #333;
    }
  }
  .backdrop {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #3f3f3fc2;
  }

  .SidebarTop {
    background-color: #fff;
    position: absolute;
    top: 0;
    width: 100%;
    left: 0;
    padding: 2rem 0;
    .avatars {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
    }
  }

  .SidebarWrapper {
    width: 100%;
    padding: 1rem;
    display: flex;
    width: 300px;
    height: 100vh;
    flex-direction: column;
    position: relative;
    padding: 3rem 0;
    background-color: #fff;

    .sidebarContainer {
      height: 100vh;
      width: 96%;
      margin: 0 auto;
      overflow: auto;
      &::-webkit-scrollbar {
        width: 4px;
        height: 4px;
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
    .SidebarTop {
      padding: 1.5rem 2rem;
    }

    .SidebarCenter {
      padding: 1.6rem 1rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      overflow-y: auto;
      width: 100%;
      max-height: 45rem;
      padding-bottom: 3rem;
      &::-webkit-scrollbar {
        width: 7px;
        height: 7px;
        background: #f8f8f8;
        border-radius: 10px;
      }
      &::-webkit-scrollbar-thumb {
        background: var(--grey-2);
        border-radius: 10px;
        transition: all 0.5s;
        &:hover {
          background: #333;
        }
      }
    }
  }
`;
