import React, { useEffect } from "react";
import styled from "styled-components";
import ProfileLeftIndex from "./left";
import ProfileRightIndex from "./right";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllGigs, getSingleCustomer } from "../../Features";
export default function ProfileIndex() {
  const { username } = useParams();
  const dispatch = useDispatch();
  const { userInfo } = useSelector(
    (store) => store.user
  );
  const { sellerId } = useSelector((store) => store.gigs);
  useEffect(() => {
    dispatch(getSingleCustomer(username));
  }, [username]);

  return (
    <ProfileIndexContent className={userInfo?.role === "user" ? "active" : ""}>
      <div className="profileWrapper w-90 auto">
        <ProfileLeftIndex />
        <ProfileRightIndex />
      </div>
    </ProfileIndexContent>
  );
}

const ProfileIndexContent = styled.div`
  width: 100%;
  padding: 7rem 0;
  background-color: var(--grey-4);
  .profileWrapper {
    display: grid;
    place-items: start;
    grid-gap: 3rem;
    grid-template-columns: 30vw 1fr;
    @media (max-width: 780px) {
      grid-template-columns: 1fr;
    }
  }
`;
