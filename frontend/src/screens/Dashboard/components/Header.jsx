import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { MdNotifications } from "react-icons/md";
import { AiFillSetting, AiOutlineMail } from "react-icons/ai";
import { NavLink } from "react-router-dom";
const HeaderWrapper = styled.div`
  background: #000000;
  /* position: sticky;
  top: 0; */
  z-index: 11000;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  width: 100%;
  border-bottom: 1px solid #ccc;
  padding: 3rem 0;
  padding-bottom: 15rem;
  .HeaderTopWrapper {
    width: 90%;
    margin: 0 auto;
    @media (max-width: 880px) {
      flex-direction: column;
      gap: 2rem;
      align-items: flex-start;
    }
  }

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
  .borderBottom {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 2rem;
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

export default function Header({ text, subtext }) {
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
      path: "",
    },
    {
      title: "Orders",
      path: "",
    },
  ];
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
                      className={"nav-link fs-16 text-grey text-light "}
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
                  src="https://images.pexels.com/photos/9869646/pexels-photo-9869646.jpeg?auto=compress&cs=tinysrgb&w=600"
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
        {/* header Bottom */}
        <div className="headerBottom flex item-center justify-space w-100">
          <div
            className="HeaderTopWrapper flex justify-space item-center"
            style={{ paddingTop: "5rem" }}
          >
            <div className="flex column gap-1 flex-1">
              <h2 className="family1 flex-1 text-light fs-46 text-white">
                Welcome Back, Antonio
                <span className="block fs-14 text-grey w-85">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda et voluptates accusamus amet sapiente aut, provident
                  at minus laudantium necessitatibus!
                </span>
              </h2>
            </div>
            <span className="justify-end flex  family1 flex-1 fs-16 text-light text-grey">
              Tuesday, 11 September 2023
            </span>
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
}
