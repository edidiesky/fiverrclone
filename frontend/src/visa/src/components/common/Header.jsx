import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import {
  calculateBagItem,
  removeBagItem,
  ToggleCartModal,
  ToggleOrderModal,
} from "../../Features";
import Sidebar from "./Sidebar";
import Bar from "./svg/Bar";
const data = [
  { id: 1, title: "Home", path: "" },
  { id: 2, title: "Passport", path: "passport" },
  { id: 3, title: "Visa", path: "visa" },
  { id: 4, title: "Travel", path: "travels" },
  { id: 5, title: "About", path: "about" },
];

export default function Header({ type }) {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const { totalPrice, showAlert, totalQuantity, bag } = useSelector(
    (store) => store.bag
  );

  const isActive = () => {
    window.scrollY > 1 ? setActive(true) : setActive(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  useEffect(() => {
    dispatch(calculateBagItem());
    if (showAlert) {
      dispatch(calculateBagItem());
    }
  }, [showAlert]);

  const HeaderTopLeft = () => {
    if (type === "passport") {
      return (
        <Link to={'/'} className="headerTopLeft">
          {/*<img
            className="imageIcon"
            src="img/logo.png"
            alt="images"
            style={{ height: "3rem" }}
          />*/}
        <h4 className='text-extra-bold text-blue-2' style={{fontSIze:"16px",color:"var(--blue-2)",fontWeight:'600'}}>DPASS</h4>
        </Link>
      );
    }
    return (
      <Link to={'/'} className="headerTopLeft">
        {/*<img className="imageIcon" src="/img/logo-footer.png" alt="images" />*/}
      <h4 className='text-extra-bold text-blue-2' style={{fontSIze:"16px",color:"var(--blue-2)",fontWeight:'600'}}>DPASS</h4>
      </Link>
    );
  };

  const HeaderTopRight = () => {
    return (
      <div className="headerTopRight">
        <div
          className={
            active ? "headerTopLeftWrapper " : "headerTopLeftWrapper active"
          }
        >
          {data.map((x) => {
            return (
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to={`/${x?.path}`}
                key={x?.id}
              >
                {x?.title}
              </NavLink>
            );
          })}
        </div>
        {/* {bag.length > 0 && (
          <div className="iconWrapper flex item-center">
            <div className="icon">
              <FiShoppingCart />
            </div>
            <div className="fs-12 notif text-bold text-blue">
              {totalQuantity}
            </div>
            <div className="dropdown flex column gap-1">
              <div className="dropdownCard">
                {bag?.map((x) => {
                  return (
                    <div
                      className="w-100 flex column gap-1 item-start"
                      key={x?._id}
                    >
                      <div className="flex w-100 item-center gap-1">
                        <div className="cartImage">
                          <img src={x?.image} alt="" />
                        </div>
                        <h4 className="fs-16 uppercase text-blue text-extra-bold">
                          {x?.title}
                          <span className="block fs-16 text-light text-grey">
                            ${x?.price}
                          </span>
                        </h4>
                        <div
                          className="icons"
                          onClick={() => dispatch(removeBagItem(x))}
                        >
                          <RxCross2 />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="py-2 subtotal">
                <h5 className="fs-16 uppercase text-blue text-extra-bold">
                  Subtotal: ${totalPrice}
                </h5>
              </div>
              <div className="w-100 btnWrapper">
                <Link to={"/cart"} className="cartBtn family1">
                  View Cart
                </Link>
                <Link to={"/billing"} className="cartBtn family1">
                  CHECKOUT
                </Link>
              </div>
            </div>
          </div>
        )} */}
      </div>
    );
  };

  return (
    <HeaderTopContainer className={active ? "active1" : ""}>
      <div className="headerTopWrapperContainer w-80 auto">
        <div className="headerTopWrapperContent flex item-center">
          <HeaderTopLeft />
        </div>
        <div className="flex item-center gap-2">
          <HeaderTopRight />
          <div className="flex item-center bars">
            <Bar active1={active} />
          </div>
        </div>
        <div className="flex contactBtn fs-18 text-white">Contact us</div>
      </div>
    </HeaderTopContainer>
  );
}

const HeaderTopContainer = styled.div`
  height: 7rem;
  width: 100%;
  display: flex;
  align-items: center;
  background: transparent;
  padding: 1rem 0;
  z-index: 1000;
  position: fixed;
  top: 0;
  transition: all 1s;
  .contactBtn {
    padding: 1.2rem 4rem;
    background-color: var(--blue-2);
    border-radius: 40px;
  }
  .bars {
    @media (min-width: 980px) {
      display: none;
    }
  }
  .px1 {
    padding: 0 1rem;
  }
  .cartImage {
    img {
      width: 8rem;
      height: 7rem;
    }
  }

  .headerTopRight {
    height: 100%;
    .iconWrapper {
      position: relative;
      height: 100%;
      .notif {
        position: absolute;
        right: -2%;
        top: -7%;
        width: 1.8rem;
        height: 1.8rem;
        border-radius: 50%;
        background-color: var(--blue-1);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 0.8rem;
      }
      &:hover {
        .dropdown {
          opacity: 1;
          visibility: visible;
        }
      }
      .dropdown {
        position: absolute;
        min-width: 300px;
        min-height: 140px;
        padding: 1.5rem 0;
        background-color: #fff;
        bottom: -790%;
        left: -700%;
        opacity: 0;
        transition: all 0.4s;
        visibility: hidden;
        border-radius: 6px;
        box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.6);
        @media (max-width: 780px) {
          left: -700%;
          min-width: 200px;
        }
        .btnWrapper {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          padding: 0 1.2rem;
          .cartBtn {
            padding: 1rem 1rem;
            background-color: var(--blue-2);
            color: #fff;
            flex: 1;
            font-size: 1.2rem;
            font-weight: 400;
            cursor: pointer;
            text-align: center;
            border-radius: 20px;
            &:hover {
              background: var(--red);
            }
          }
        }
        .subtotal {
          padding: 0.5rem 1rem;
          background-color: var(--grey-3);
          h5 {
            font-size: 10px;
            font-weight: 600;
            text-align: start;
            flex: 1;
            span {
              font-size: 1rem;
            }
          }
        }
        h4 {
          font-size: 14px;
          font-weight: 600;
          text-align: start;
          flex: 1;
          span {
            font-size: 1.2rem;
          }
        }
        .dropdownCard {
          justify-content: space-between;
          padding: 0 1rem;
          height: 100px;
          overflow-y: auto;
          &::-webkit-scrollbar {
            width: 5px;
            height: 7px;
            background: #8b8989;
            border-radius: 10px;
          }
          &::-webkit-scrollbar-thumb {
            background: var(--primary);
            border-radius: 10px;
            transition: all 0.5s;
            &:hover {
              background: var(--secondary);
            }
          }
          .icons {
            width: 2rem;
            height: 2rem;
            display: grid;
            place-items: center;
            cursor: pointer;
            border-radius: 50%;
            background-color: var(--grey-3);
            svg {
              width: 50%;
              height: 50%;
              color: var(--blue-2);
            }
          }
        }
      }
      .icon {
        width: 3rem;
        height: 3rem;
        display: grid;
        place-items: center;
        cursor: pointer;
        border-radius: 50%;
        svg {
          width: 70%;
          height: 70%;
          color: var(--blue-2);
        }
      }
    }
  }
  &.active1 {
    padding: 5rem 0;
    position: fixed;
    top: 0;
    left: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    background-color: #fff;
    color: var(--blue-2);
    .headerTopWrapperContainer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .contactBtn {
        padding: 1.2rem 4rem;
        background-color: var(--blue-2);
        border-radius: 40px;
      }
      .headerTopLeft {
        display: flex;
        align-items: center;
        gap: 2rem;
        .imageIcon {
          width: auto;
        }
      }
      .headerTopRight {
        display: flex;
        align-items: center;
        gap: 2rem;
        .headerTopLeftWrapper {
          a {
            color: #000;
          }
          &.active {
            a {
              color: var(--blue-2);
            }
            .link {
              font-size: 1.4rem;
              color: #fff;
            }
          }
          .link {
            font-size: 1.4rem;
            color: #f12529;
          }
        }
      }
    }
  }
  .headerTopWrapperContainer {
    width: 85%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .headerTopRight {
      display: flex;
      align-items: center;
      gap: 1.4rem;
      .headerTopLeftWrapper {
        display: flex;
        align-items: center;
        gap: 12px;
        @media (max-width: 1080px) {
          display: none;
        }
        .nav-link {
          font-size: 17px;
          letter-spacing: 1px;
          font-weight: light;
          transition: all 0.5s;
          text-decoration: none;
          position: relative;
          padding: 1rem 2rem;
          border-radius: 40px;
          &:hover {
            color: var(--blue-2);
            background-color: #f2f0f0;
          }

          &.active {
            position: relative;
            color: var(--dark-1);
            border-bottom: 2px solid var(--blue-2);
            background-color: #f2f0f06a;
          }
        }
      }
    }
  }
  .headerTopLeft {
    display: flex;
    align-items: center;
    gap: 2rem;
    .imageIcon {
    }
  }
`;
