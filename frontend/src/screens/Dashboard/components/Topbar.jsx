import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ToggleSidebar } from "../../../Features";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineMenu } from "react-icons/ai";
import { BiUser, BiSearch } from "react-icons/bi";
import { MdNotifications } from "react-icons/md";
import { AiFillSetting, AiOutlineMail } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
const HeaderWrapper = styled.div`
  background: var(--white);
  position: sticky;
  top: 0;
  z-index: 1000;
  min-height: 96px;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  border-bottom: 1px solid #ccc;
  justify-content: space-between;
  .icon {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.08);
  }

  form {
    padding: 1.2rem 2rem;
    background-color: var(--grey-4);
    border-radius: 40px;
    @media (max-width: 780px) {
      display: none;
    }
  }
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
  .headerLeft {
    display: flex;
    align-items: center;
    gap: 2rem;
    flex: 1;
    justify-content: flex-end;
    @media (max-width: 980px) {
      justify-content: space-between;
      width: 100%;
    }
  }
  .headerContainer {
    width: 95%;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    .headerLeft {
      display: flex;
      align-items: center;
      gap: 2rem;
      flex: 1;
      justify-content: flex-end;
      @media (max-width: 980px) {
        justify-content: space-between;
        width: 100%;
      }

      .imageIcon {
        width: auto;
        height: 5rem;
      }
    }
    h3 {
      font-size: 2rem;
      font-weight: 700;
      color: var(--dark-1);
      flex: 1;
      text-align: start;
      padding: 0 1rem;
      .span1 {
        display: block;
        color: var(--grey-2);
        font-size: 1.3rem;
        font-weight: 500;
        padding-top: 1rem;
        font-family: "Barlow", sans-serif;
      }
    }
  }
  .avatar {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    /* background-color: #adabab; */
    object-fit: cover;
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
`;

export default function Header({ text, subtext }) {
  //   const { thememode } = useSelector((store) => store.toggle);
  //   const { userInfo } = useSelector((store) => store.user);
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     document.documentElement.className = thememode;
  //     localStorage.setItem("theme", thememode);
  //   }, [thememode]);

  const [search, setSearch] = useState("");

  return (
    <HeaderWrapper>
      <div className="headerContainer">
        {/* <h3>
          {text}
          <span className="span1">{subtext}</span>
        </h3> */}
        <div className="Icon" onClick={() => dispatch(ToggleSidebar())}>
          <AiOutlineMenu />
        </div>

        <form className="flex gap-2 item-center">
          <BiSearch fontSize={"20px"} />
          <input
            type="text"
            placeholder="Search for product"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="fs-16"
          />
        </form>

        <div className="headerLeft">
          <div className="flex flex-1 item-center justify-end gap-3">
            <AiFillSetting fontSize={"20px"} color="#333" />
            {/* <AiOutlineMail fontSize={"20px"} color="#333" />
            <MdNotifications fontSize={"20px"} color="#333" /> */}
            <div className="flex item-center gap-1">
              <img
                src="https://i.pinimg.com/236x/93/08/92/93089298c654873799ee88fcd374f293.jpg"
                alt=""
                className="avatar flex item-center justify-center"
              />
              <h4 className="fs-14 text-bold text-dark family1">
                Edidiong Essien
                <span className="block fs-12 text-grey">
                  Seller for the shop
                </span>
              </h4>
            </div>
          </div>
          {/* <div className="flex item-center gap-1">
            <h4 className="fs-14 family1">essien@gmail.com</h4>
            <div className="icon flex item-center justify-center">
              <BiUser fontSize={"26px"} color="var(--dark-1)" />
            </div>
          </div> */}
        </div>
      </div>
    </HeaderWrapper>
  );
}
