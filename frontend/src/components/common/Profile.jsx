import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ClearBagData } from "../../Features/bag/bagSlice";
import { ClearUserInfo, ClearauthInfo } from "../../Features";

const data2 = [
  { id: 1, title: "Profile", path: "/profile" },
  { id: 2, title: "Post a request", path: "/" },
  { id: 3, title: "Refer a friend", path: "/" },
  { id: 5, title: "Become a Seller", path: "/seller_onboarding/do" },

  { id: 6, title: "Settings", path: "/profile" },
  { id: 7, title: "Billings", path: "/billing" },
  { id: 8, title: "English", path: "/" },
  { id: 9, title: "$USD", path: "/" },

  { id: 8, title: "Help and Support", path: "/" },
];
export default function Profile({ profile }) {
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
      {data2.map((x,index) => {
        return (
          <div key={index}>
            <Link className="family1 link" to={`${x.path}`}>
              {x.title}
            </Link>
          </div>
        );
      })}
      <div className="family1 link" onClick={handleLogOut}>
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
  .link {
    font-size: 1.5rem;
    font-weight: 300;
    color: var(--grey-1);
    cursor: pointer;
  }
  div {
    color: var(--grey-1);
    padding: 0.6rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }
`;
