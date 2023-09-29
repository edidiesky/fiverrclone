import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { BiBell, BiHeart, BiSearch } from "react-icons/bi";
import Profile from "../../common/Profile";
import { AiOutlineMail } from "react-icons/ai";
import Bar from "../../common/svg/Bar";
import { useSelector, useDispatch } from "react-redux";
import { HiUser } from "react-icons/hi";
import { onAuthModal } from "../../../Features/user/userSlice";
import { Slider } from "../../common";
import Logo from "../../common/svg/Logo";

const options2 = {
  items: 8,
  dots: false,
  margin: 4,
  width: "100%",
  slideBy: 2,
  responsive: {
    0: {
      items: 2,
      margin: 0,
    },
    380: {
      items: 3,
      margin: 0,
    },
    480: {
      items: 3,
      margin: 0,
    },
    760: {
      items: 5,
    },
    1024: {
      items: 8,
    },
  },
};

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
export default function Header() {
  const [active, setActive] = useState(true);
  const [profile, setProfile] = useState(false);
  const { userInfo } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const isActive = () => {
    window.scrollY > 100 ? setActive(false) : setActive(true);
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
        <div className="w-90 auto flex bottom1 bottomWrapper1 item-center">
          <Slider className="owl-theme" options={options2}>
            {headerBottomData.map((x, index) => {
              return (
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-links w-100 fs-20 family2 text-light text-grey text-center active"
                      : "nav-links w-100 fs-20 family2 text-light text-grey text-center"
                  }
                  to={`${x}`}
                  key={index}
                >
                  {x}
                </NavLink>
              );
            })}
          </Slider>
        </div>
        <div
          className="w-90 auto flex bottom1 bottomWrapper2 item-center justify-space"
          style={{ flexWrap: "wrap" }}
        >
          {headerBottomData.map((x, index) => {
            return (
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "nav-links fs-24 family2 text-light family2 text-grey active"
                    : "nav-links fs-24 family2 text-light family2 text-grey"
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
      <div className="headerTopLeft flex-1 flex item-center gap-2">
        <Link to={"/"}>
          <Logo active={active} />
        </Link>
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
      </div>
    );
  };

  const HeaderTopRight = () => {
    if (userInfo) {
      return (
        <div
          className={
            !active
              ? "headerTopCenter family2 text-dark flex item-center gap-2"
              : "headerTopCenter family2 text-white flex item-center gap-2"
          }
        >
          <Link to={'/order'} className="family1 fs-20">Orders</Link>
          <div className="profile" onClick={() => setProfile(!profile)}>
            {/* <div
              style={{ background: "#25A1B0" }}
              className="avatar family2 text-white fs-24 family2 text-extra-bold uppercase family1 flex item-center justify-center"
            >
              E
            </div> */}
            {userInfo ? (
              <>
                {userInfo?.image ? (
                  <img
                    src={userInfo?.image}
                    alt=""
                    className="avatar flex item-center justify-center"
                  />
                ) : (
                  <div className="avatar grey fs-20 family2 text-white flex item-center justify-center">
                    {userInfo?.name?.charAt(0)}
                  </div>
                )}
              </>
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
        <div
          onClick={() => dispatch(onAuthModal())}
          className={
            active
              ? "flex links fs-20 family2 text-extra-bold family2 text-dark item-center justify-center active"
              : "flex links fs-20 family2 text-extra-bold family2 text-dark item-center justify-center"
          }
        >
          Sign In
        </div>
        <div
          onClick={() => dispatch(onAuthModal())}
          className="flex btn-4 fs-20 family2 text-extra-bold family2 text-dark item-center justify-center"
        >
          Join
        </div>
      </div>
    );
  };
  const HeaderTopCenter = () => {
    if (userInfo === "user") {
      return (
        <div
          className={
            !active
              ? "headerTopCenter family2 text-grey flex item-center gap-2"
              : "headerTopCenter family2 text-white flex item-center gap-2"
          }
        >
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
      <div
        className={
          active
            ? "headerTopCenter gap-4 flex item-center active"
            : "headerTopCenter gap-4 flex item-center"
        }
      >
        {data.map((x) => {
          return (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "nav-link fs-20 family2 text-extra-bold active"
                  : "nav-link fs-20 family2 text-extra-bold"
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
    <HeaderWrapper className="w-100">
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
  }
  .avatar {
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    /* background-color: #adabab; */
    color: #fff;
    display: grid;
    place-items: center;
    &:hover {
      /* background-color: #adababa4; */
    }

    svg {
      color: #fff;
      font-size: 24px;
    }
  }
  .bottom1 {
    @media (max-width: 980px) {
      justify-content: flex-start;
      gap: 1.4rem;
    }
    &.bottomWrapper2 {
      display: flex;
      justify-content: space-between;

      @media (max-width: 1080px) {
        display: none;
      }
    }
    &.bottomWrapper1 {
      display: none;

      @media (max-width: 1080px) {
        display: flex;
      }
    }
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
  background: #fff;
  padding: 1.5rem 0;
  transition: all 0.6s ease;
  .nav-links,
  .fs-20,
  h4 {
    @media (max-width: 480px) {
      font-size: 17px !important;
    }
  }
  .avatar {
    width: 4rem;
    height: 4rem;
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
  .links {
    &.active {
      color: #fff;
    }
  }
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
    }
  }
  .fill {
    fill: var(--dark-1);
    &.active {
      fill: #fff;
    }
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
      font-size: 20px;
    }
  }
  .headerTopLeft {
    flex: 1;
    form {
      height: 5rem;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid rgba(0, 0, 0, 0.2);
      transition: all 0.5s;
      &.active {
        display: none;
      }
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
        border: none;
      }
      .button {
        height: 5rem;
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
  .profile {
    position: relative;
  }

  .headerTopCenter {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 2rem;
    @media (max-width: 980px) {
      display: none;
    }
    &.active {
      .nav-link {
        font-weight: 500;
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
    .nav-link {
      font-weight: 500;
      color: var(--grey-1);
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
    gap: 5rem;
    @media (max-width: 1080px) {
      gap: 2rem;
    }
  }
`;

const HeaderWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 5000;
  .nav-links,
  .fs-20,
  h4 {
    @media (max-width: 480px) {
      font-size: 17px !important;
    }
  }
  .headerTopContainer {
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    &.active {
      background-color: transparent;
      border-bottom: none;
    }
    .headerTopCenter {
      &.active {
        color: #fff;
      }
    }
  }
  .HeaderBottom {
    overflow: auto;
    width: 100%;
    z-index: 5000;
    background-color: #fff;
    transition: all 0.6s ease;
    &.active {
      display: none;
    }
  }
  .nav-links {
    /* min-width: 5rem; */
    /* flex: 1; */
  }
`;
