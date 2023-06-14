import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { MdNotifications } from "react-icons/md";
import { AiFillSetting, AiOutlineMail } from "react-icons/ai";
import { NavLink } from "react-router-dom";
const HeaderWrapper = styled.div`
  background: #000000;

  /* z-index: 11000; */
  display: flex;
  align-items: center;
  gap: 1.2rem;
  width: 100%;
  border-bottom: 1px solid #ccc;
  padding: 3rem 0;
  padding-bottom: 12rem;
  @media (max-width: 980px) {
    padding: 1rem;
    padding-bottom: 0;
    position: sticky;
    top: 0;
    height: 8rem;
  }
  .HeaderTopWrapper {
    width: 90%;
    margin: 0 auto;
    @media (max-width: 980px) {
      flex-direction: column;
      gap: 2rem;
      align-items: flex-start;
      display: none;
      /* z-index: 30000; */
    }
  }

  .headertop {
    position: fixed;
    top: 0;
    z-index: 182730000;
    background: #000000;
    display: flex;
    align-items: center;
    /* @media (max-width: 980px) {
      display: none;
    } */
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
  .borderBottom {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 2rem 0;
  }
  .headerBottom {
    z-index: 3000;
    padding-top: 4rem;
  }

  h2 {
    @media (max-width: 980px) {
      font-size: 4rem;
      line-height: 1.2;
    }
  }

  .headerContainer {
    width: 100%;

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

export default function Header({ text, subtext, type }) {
  // const dispatch = useDispatch();
  const sidebarData = [
    {
      title: "My Dashboard",
      path: "",
    },
    {
      title: "Customers",
      path: "",
    },
    {
      title: "Merchants",
      path: "",
    },
    {
      title: "Gigs",
      path: "gigs",
    },
    {
      title: "Orders",
      path: "",
    },
  ];
  const HeaderBottom = () => {
    return (
      <div className="headerBottom flex item-center justify-space w-100">
        <div
          className="HeaderTopWrapper flex justify-space item-center"
          style={{ paddingTop: "5rem" }}
        >
          <div className="flex column gap-1 flex-1">
            <h2 className="family1 flex-1 text-light fs-46 text-white">
              {text || 'Edidie Essien'}
              <span className="block fs-14 text-grey w-85">
                {subtext ||
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit  at minus laudantium necessitatibus!"}
              </span>
            </h2>
          </div>
          <span className="justify-end flex  family1 flex-1 fs-16 text-light text-grey">
            Tuesday, 11 September 2023
          </span>
        </div>
      </div>
    );
  };
  return (
    <HeaderWrapper>
      <div className="headerContainer">
        {/* <h3 className="family1 text-white">{text}</h3> */}
        {/* header top */}
        <div className="headertop w-100 flex item-center borderBottom">
          <div className="HeaderTopWrapper flex justify-space item-center">
            <div className="flex flex-1 gap-2 item-center">
              {/* icon */}
              <div
                className="flex item-center gap-3"
                style={{ flexWrap: "wrap" }}
              >
                {sidebarData.map((x, index) => {
                  return (
                    <NavLink
                      exact
                      className={
                        "nav-link uppercase fs-14 text-grey text-light "
                      }
                      to={`${x.path}`}
                      key={index}
                    >
                      {x.title}
                    </NavLink>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-1 item-center justify-end gap-4">
              <AiFillSetting fontSize={"20px"} color="#fff" />
              <AiOutlineMail fontSize={"20px"} color="#fff" />
              <MdNotifications fontSize={"20px"} color="#fff" />
              <div className="flex item-center gap-1">
                <img
                  src="https://i.pinimg.com/236x/93/08/92/93089298c654873799ee88fcd374f293.jpg"
                  alt=""
                  className="avatar flex item-center justify-center"
                />
                <h4 className="fs-16 text-light text-white">
                  Edidiong Essien
                  <span className="block fs-12 text-grey">
                    Seller for the shop
                  </span>
                </h4>
              </div>
            </div>
          </div>
        </div>
        {<HeaderBottom />}
        {/* header Bottom */}
      </div>
    </HeaderWrapper>
  );
}
