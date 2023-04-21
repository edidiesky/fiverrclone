import React, {useEffect } from "react";
import styled from "styled-components";
import { ToggleSidebar } from "../../../Features";
import { useSelector, useDispatch } from "react-redux";
import { CgMenuRight } from "react-icons/cg";
import { HiUser } from "react-icons/hi";
const HeaderWrapper = styled.div`
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 11000;
  height: 86px;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  border-bottom: 1px solid #ccc;

  .avatar {
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    background-color: #adabab;
    color: #fff;
    display: grid;
    place-items: center;
    &:hover {
      background-color: #adababa4;
  }

    svg {
      color: #fff;
      font-size: 24px;
    }
  }

  .headerContainer {
    width: 95%;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .headerLeft {
      display: flex;
      align-items: center;
      gap: 2rem;
      .Icon {
        display: flex;
        align-items: center;
        justify-content: center;
        @media (min-width: 780px) {
          display: none;
        }
        svg {
          font-size: 3.4rem;
        }
      }
      .imageIcon {
        width: auto;
        height: 5rem;
      }
    }
    h3 {
      font-size: 2.6rem;
      font-weight: 700;
      color: var(--dark-1);
      width: 100%;
      text-align: start;
      padding: 0 1rem;
      .span1 {
        display: block;
        color: var(--grey-2);
        font-size: 1.3rem;
        font-weight: 500;
        padding-top: 1rem;
      }
    }
  }
`;

export default function Header({ text, subtext }) {
  const { thememode } = useSelector((store) => store.toggle);
  const { userInfo } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.className = thememode;
    localStorage.setItem("theme", thememode);
  }, [thememode]);
  return (
    <HeaderWrapper>
      <div className="headerContainer">
        <h3 className="family1">
          {text}
        </h3>

        <div className="headerLeft">
          <div className="Icon" onClick={() => dispatch(ToggleSidebar())}>
            <CgMenuRight />
          </div>
          <div className="flex item-center gap-1">
            {/* <h4 className="family1 fs-14">{userInfo?.email}</h4> */}
            <h4 className="family1 fs-14">essien@gmail.com</h4>
            <div className="avatar flex item-center justify-center">
              <HiUser />
            </div>
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
}
