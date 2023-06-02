import moment from "moment";
import React from "react";
import { BiSearch } from "react-icons/bi";
import styled from "styled-components";
import Rating from "./Rating";
export default function ReviewCard({ x }) {
  let createddate = moment(x?.createdAt);
  createddate = createddate.format("MMMM Do YYYY");
  return (
    <div className="flex column gap-2" key={x?._id}>
      {/* reviews card */}
      <CriticismCard className="flex item-start gap-1 w-100">
        {/* name */}
        {x?.reviewuser?.image ? (
          <img
            src={x?.reviewuser?.image}
            alt=""
            className="avatar flex item-center justify-center"
          />
        ) : (
          // <div className="avatar">E</div> ull
          <img
            src={x?.reviewuser?.image}
            alt=""
            className="avatar flex item-center justify-center"
          />
        )}
        {/* left */}
        <div className="flex flex-1 column">
          {/* top */}
          <div className=" flex column item-start">
            {/* name */}
            <h4 className="fs-18 text-dark text-bold">
              {x?.reviewuser?.username}
            </h4>
            {/* country */}
            <h4 className="fs-16 text-grey text-light">
              {x?.reviewuser?.country ? x?.reviewuser?.country : null}
            </h4>
            <div className="flex item-center py-1 gap-1 fs-14">
              <Rating value={x.rating} />
              <h4
                className="fs-16 text-grey text-bold"
                style={{
                  paddingRight: "1rem",
                  borderRight: "1px solid #777",
                }}
              >
                {x.rating}
              </h4>
              <h4 className="fs-16 text-grey text-light">{createddate}</h4>
            </div>
          </div>
          {/* comment */}
          <p className="text-dark fs-18 text-light">{x.description}</p>
        </div>
      </CriticismCard>
    </div>
  );
}

const CriticismCard = styled.div`
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
  padding: 2.4rem 0;
  .avatar {
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
  }
  .btnArrow {
    z-index: 80;
    width: 3.5rem;
    position: absolute;
    height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    border-radius: 50%;
    transition: all 0.4s;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    &:hover {
    }
    svg {
      font-size: 26px;
      color: #222;
    }
    &.right {
      right: -2%;
      top: 50%;
      transform: translateY(-50%);
    }
    &.left {
      left: -2%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;
