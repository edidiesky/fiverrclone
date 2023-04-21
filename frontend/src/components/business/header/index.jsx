import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { GoThreeBars } from "react-icons/go";
import { BiSearch } from "react-icons/bi";

const data = [
  { id: 1, title: "Fiverr Business", path: "/business" },
  { id: 2, title: "Explore", path: "/explore" },
  { id: 3, title: "English", path: "/product" },
  { id: 5, title: "Become a Seller", path: "/seller" },
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
export default function HeaderIndex() {
  const [active, setActive] = useState(true);

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
    return (
      <HeaderTopWrapper
        className={active?"HeaderBottom flex gap-3 py-1 active":"HeaderBottom flex gap-3 py-1"}
        style={{
          borderBottom: "1px solid rgba(0,0,0,.06)",
          padding: ".9rem 0",
        }}
      >
        <div className="w-85 auto flex item-center justify-space">
          {headerBottomData.map((x, index) => {
            return (
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "nav-links fs-14 text-light text-grey active"
                    : "nav-links fs-14 text-light text-grey"
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
          <svg
            width="89"
            height="27"
            viewBox="0 0 89 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="#fff">
              <path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path>
            </g>
            <g fill="#1dbf73">
              <path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path>
            </g>
          </svg>
        </Link>
        <form className={active?"w-100 py-2 active":"w-100 py-2"}>
          <input
            type="text"
            placeholder="What service are you looking for today"
            className="input"
          />
          <div className="button flex item-center justify-center">
            <BiSearch />
          </div>
        </form>
      </div>
    );
  };

  const HeaderTopRight = () => {
    return (
      <div className="Right flex item-center gap-3">
        <Link
          to={"/login"}
          className="flex fs-14 text-bold text-white item-center justify-center"
        >
          Sign In
        </Link>
        <Link
          to={"/cart"}
          className="flex btn-4 fs-14 text-bold text-white item-center justify-center"
        >
          Join
        </Link>
      </div>
    );
  };

  const HeaderTopCenter = () => {
    return (
      <div className="headerTopCenter">
        {data.map((x) => {
          return (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "nav-link fs-14 text-bold active"
                  : "nav-link fs-14 text-bold"
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
        className="w-100"
        style={{ borderBottom: "1px solid rgba(0,0,0,.06)" }}
      >
        <div className="headerTopWrapperContainer flex item-center w-85 auto">
          <div className="icons">
            <GoThreeBars />
          </div>
          <HeaderTopLeft />
          <HeaderTopCenter />
          <HeaderTopRight />
        </div>
      </HeaderTopContainer>
      <HeaderBottom />
    </HeaderWrapper>
  );
}

const HeaderTopWrapper = styled.div`
  width: 100%;
  @media (max-width: 480px) {
    display: none;
  }
  h5 {
    @media (max-width: 780px) {
      display: none;
    }
  }
`;
const HeaderTopContainer = styled.div`
  min-height: 6rem;
  width: 100%;
  display: flex;
  align-items: center;
  background: #0d084d;
  padding: 1.5rem 0;

  .icons {
    width: 4rem;
    height: 4rem;
    display: grid;
    place-items: center;
    @media (min-width: 1080px) {
      display: none;
    }
    svg {
      font-size: 20px;
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
      background-color: #fff;
      transition: all 0.5s;
      &.active {
        display: none;
      }
      @media (max-width: 1080px) {
        display: none;
      }
      .input {
        width: 100%;
        height: 100%;
        padding: 1rem 2rem;
        font-size: 1.4rem;
      }
      .button {
        height: 4rem;
        background: var(--green);
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
    @media (max-width: 980px) {
      display: none;
    }
    .nav-link {
      font-weight: 400;
      color: #fff;
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
    gap: 4rem;
    @media (max-width: 1080px) {
      gap: 2rem;
    }
  }
`;

const HeaderWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  .HeaderBottom {
    overflow: auto;
    width: 100%;
    background-color: #Fff;
    &.active {
        display: none;
    }
  }
  .nav-links {
    min-width: 5rem;
  }
`;
