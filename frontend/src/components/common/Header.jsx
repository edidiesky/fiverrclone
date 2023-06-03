import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { BiBell, BiHeart, BiMessage, BiSearch } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import Profile from "./Profile";
import Bar from "./svg/Bar";
import Logo from "./svg/Logo";
import { HiUser } from "react-icons/hi";

const data = [
  { id: 1, title: "Fiverr Business", path: "/business" },
  { id: 2, title: "Explore", path: "/explore" },
  { id: 3, title: "English", path: "/product" },
  { id: 5, title: "Become a Seller", path: "/seller_onboarding" },
];

const headerBottomData = [
  "Graphics & Design",
  "Digital Marketing",
  "Writing & Translation",
  "Video & Animation",
  "Music & Audio",
  "Programming & Tech",
  "Business",
  "Lifestyle",
  "AI Services",
];

export default function Header({ type }) {
  const [active, setActive] = useState(true);
  const [profile, setProfile] = useState(false);
  const { userInfo } = useSelector((store) => store.user);

  const isActive = () => {
    window.scrollY > 200 ? setActive(false) : setActive(true);
  };
  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);
  const HeaderBottom = () => {
    if (type === "service") {
      return (
        <HeaderTopWrapper
          className={"HeaderBottom flex gap-3 py-1"}
          style={{
            borderBottom: "1px solid rgba(0,0,0,.06)",
            padding: "1.2rem 0",
          }}
        >
          <div
            className="w-90 auto flex item-center bottom1 justify-space"
            style={{ flexWrap: "wrap" }}
          >
            {headerBottomData.map((x, index) => {
              return (
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-links fs-18 text-light text-grey active"
                      : "nav-links fs-18 text-light text-grey"
                  }
                  to={`${x}`}
                  key={index}
                >
                  {x}
                </NavLink>
              );
            })}
          </div>
        </HeaderTopWrapper>
      );
    }
    return (
      <HeaderTopWrapper
        className={
          active
            ? "HeaderBottom flex gap-3 py-1 active"
            : "HeaderBottom flex gap-3 py-1"
        }
        style={{
          borderBottom: "1px solid rgba(0,0,0,.06)",
          padding: "1.2rem 0",
        }}
      >
        <div
          className="w-90 auto flex item-center justify-space"
          style={{ flexWrap: "wrap" }}
        >
          {headerBottomData.map((x, index) => {
            return (
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "nav-links fs-18 text-light text-grey active"
                    : "nav-links fs-18 text-light text-grey"
                }
                to={`${x}`}
                key={index}
              >
                {x}
              </NavLink>
            );
          })}
        </div>
      </HeaderTopWrapper>
    );
  };
  const HeaderTopLeft = () => {
    return (
      <div className="headerTopLeft flex item-center gap-2">
        <Link to={"/"}>
          <Logo active={active} />
        </Link>
        {type !== "seller" && (
          <form className={active ? "w-100 py-2 active" : "w-100 py-2"}>
            <input
              type="text"
              placeholder="What service are you looking for today"
              className="input"
            />
            <div className="button flex item-center justify-center">
              <BiSearch />
            </div>
          </form>
        )}
      </div>
    );
  };

  const HeaderTopRight = () => {
    if (userInfo) {
      return (
        <div className={"headerTopCenter flex item-center gap-2"}>
          <h4 className="family1 fs-16 text-dark">Orders</h4>
          <div className="profile" onClick={() => setProfile(!profile)}>
            {/* <div
              style={{ background: "#25A1B0" }}
              className="avatar text-white fs-18 text-bold uppercase family1 flex item-center justify-center"
            >
              E
            </div> */}
            {userInfo?.image ? (
              <img src={userInfo?.image} alt="" className="avatar flex item-center justify-center" />
            ) : (
              <div className="avatar flex item-center justify-center">
                <HiUser />
              </div>
            )}

            <div className="notification"></div>
            <Profile profile={profile} />
          </div>
        </div>
      );
    }
    return (
      <div className="Right flex item-center gap-3">
        <Link
          to={"/joing/login"}
          className={
            active
              ? "flex links fs-18 text-light text-dark item-center justify-center active"
              : "flex links fs-18 text-light text-dark item-center justify-center"
          }
        >
          Sign In
        </Link>
        <Link
          to={"/join/login"}
          className="flex btn-4 fs-18 text-bold text-dark item-center justify-center"
        >
          Join
        </Link>
      </div>
    );
  };

  const HeaderTopCenter = () => {
    if (userInfo) {
      return (
        <div className={"headerTopCenter flex item-center gap-2"}>
          <div className="icon">
            <BiBell />
          </div>
          <div className="icon">
            <AiOutlineMail />
          </div>
          <div className="icon">
            <BiHeart />
          </div>
        </div>
      );
    }
    return (
      <div className={active ? "headerTopCenter active" : "headerTopCenter"}>
        {data.map((x) => {
          return (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "nav-link fs-18 text-bold active"
                  : "nav-link fs-18 text-bold"
              }
              to={`${x.path}`}
              key={x.id}
            >
              {x.title}
            </NavLink>
          );
        })}
      </div>
    );
  };

  return (
    <HeaderWrapper>
      <HeaderTopContainer
        className={
          active
            ? "w-100 active headerTopContainer"
            : "w-100 headerTopContainer"
        }
      >
        <div className="headerTopWrapperContainer flex item-center w-90 auto">
          <div className="icons">
            <Bar />
          </div>
          <HeaderTopLeft />
          {type !== "seller" && (
            <>
              <HeaderTopCenter />
              <HeaderTopRight />
            </>
          )}
        </div>
      </HeaderTopContainer>
      {type !== "chat" && <HeaderBottom />}
    </HeaderWrapper>
  );
}

const HeaderTopWrapper = styled.div`
  width: 100%;
  .bottom1 {
    @media (max-width: 980px) {
      justify-content: flex-start;
      gap: 3rem;
    }
  }
  h5 {
    @media (max-width: 780px) {
      display: none;
    }
  }
`;
const HeaderTopContainer = styled.div`
  min-height: 7rem;
  width: 100%;
  display: flex;
  align-items: center;
  background: #fff;
  padding: 1.5rem 0;

  .icon {
    width: 3rem;
    height: 3rem;
    display: grid;
    place-items: center;
    border-radius: 50%;
    &:hover {
      background-color: var(--light-grey);
    }
    svg {
      width: 70%;
      height: 70%;
      color: var(--grey-2);
    }
  }
  .links {
  }
  .fill {
    fill: var(--dark-1);
  }

  .icons {
    width: 4rem;
    height: 4rem;
    display: grid;
    place-items: center;
    @media (min-width: 1080px) {
      display: none;
    }
    svg {
      font-size: 24px;
      color: var(--grey-1);
    }
  }
  .headerTopLeft {
    flex: 1;
    form {
      height: 4rem;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid rgba(0, 0, 0, 0.2);
      transition: all 0.5s;
      @media (max-width: 1080px) {
        display: none;
      }
      &:hover {
        border: 1px solid rgba(0, 0, 0, 0.8);
      }
      .input {
        width: 100%;
        height: 100%;
        padding: 1rem 2rem;
        font-size: 1.8rem;
      }
      .button {
        height: 4rem;
        background: var(--dark-1);
        color: #fff;
        padding: 0 2rem;
        display: flex;
        align-items: center;
        svg {
          font-size: 20px;
        }
      }
    }
  }
  .Right {
    .btn-4 {
      border: 1.5px solid var(--green);
      color: var(--green);
      padding: 0.5rem 2rem;
      border-radius: 3px;
      transition: all 0.5s;
      &:hover {
        background-color: var(--green);
        color: #fff;
      }
    }
  }

  .headerTopCenter {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1.6rem;
    .profile {
      position: relative;
      .notification {
        position: absolute;
        width: 1.4rem;
        height: 1.4rem;
        border-radius: 50%;
        border: 2px solid #fff;
        background-color: var(--green);
        bottom: -2%;
        right: 2%;
      }
    }

    @media (max-width: 980px) {
      display: none;
    }
    .nav-link {
      font-weight: 400;
      color: var(--dark-dark);
      transition: all 0.5s;
      text-decoration: none;
      position: relative;
      &:hover {
        color: var(--green);
      }
      &.active {
        position: relative;
        color: var(--green);
      }
    }
  }

  .headerTopWrapperContainer {
    display: flex;
    align-items: center;
    gap: 3rem;
    @media (max-width: 1080px) {
      gap: 2rem;
    }
  }
`;

const HeaderWrapper = styled.div`
  width: 100%;
  z-index: 1000;
  .headerTopContainer {
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    .headerTopCenter {
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
  .HeaderBottom {
    overflow: auto;
    width: 100%;
    z-index: 5000;
    background-color: #fff;
  }
  .nav-links {
    min-width: 5rem;
  }
`;
