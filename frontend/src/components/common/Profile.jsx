import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ClearBagData } from "../../Features/bag/bagSlice";
import { ClearUserInfo, ClearauthInfo } from "../../Features";

export default function Profile({ profile }) {
  const { userInfo } = useSelector((store) => store.user);

  const data2 = [
    {
      id: 1,
      title: "Profile",
      path: `/profile/${userInfo?.username}?sellerId=${userInfo?._id}`,
    },
    { id: 2, title: "Dashboard", path: "/dashboard" },
    { id: 3, title: "Refer a friend", path: "/" },
    { id: 5, title: "Become a Seller", path: "/seller_onboarding/do" },

    {
      id: 6,
      title: "Settings",
      path: `/profile/${userInfo?.username}?sellerId=${userInfo?._id}`,
    },
    { id: 7, title: "Billings", path: "/billing" },
    { id: 8, title: "English", path: "/" },
    { id: 9, title: "$USD", path: "/" },

    { id: 8, title: "Help and Support", path: "/" },
  ];

  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(ClearBagData());
    dispatch(ClearUserInfo());
    dispatch(ClearauthInfo());
    window.location.reload();
  };
  return (
    <List
      className={
        profile
          ? "profileList flex column family1 active"
          : "profileList flex column family1"
      }
    >
      {data2.map((x, index) => {
        return (
          <div key={index} className="w-100">
            <Link className="family1 links w-100" to={`${x.path}`}>
              {x.title}
            </Link>
          </div>
        );
      })}
      <div className="family1 links" onClick={handleLogOut}>
        Logout
      </div>
    </List>
  );
}

const List = styled.div`
  position: absolute;
  z-index: 10000;
  right: -10%;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  width: 200px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  top: 150%;
  visibility: hidden;
  border-radius: 4px;
  max-height: 0;
  transition: all 1s;
  &.active {
    max-height: 500px;
    opacity: 1;
    padding: 2rem;
    visibility: visible;
  }
  &::after {
    position: absolute;
    right: 6%;
    width: 2rem;
    height: 2rem;
    transform: rotate(45deg);
    content: "";
    top: -3%;
    z-index: 20;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    border-left: 1px solid rgba(0, 0, 0, 0.2);
    background-color: #fff;
  }
  .links {
    font-size: 2rem;
    font-weight: 400;
    width: 100%;
    color: var(--grey-1);
    cursor: pointer;
    &:hover {
      color: var(--green);
      /* background-color: #faf7fa; */
    }
  }
  div {
    color: var(--grey-1);
    padding: 0.6rem 0;
  }
`;
