import React from "react";
import { FaLocationArrow, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Rating from "../../common/Rating";

export default function SellerInfoBottom() {
  return (
    <SellerInfoBottomContent>
      {/* bototm */}
      <ul className="w-100 py-2 flex column gap-1">
        <li className="flex bottom w-100 fs-18 text-dark text-bold column gap-2">
          <span className="flex family1 block item-center gap-2">
            Description
          </span>
          <span className="text-light">
            Analyzes aerial pictures of rooftops using sophisticated software to
            convert these aerial pictures into CAD drawings including exact
            measurements.
          </span>
        </li>
        {/* languages */}
        <li className="flex bottom w-100 fs-18 text-dark text-bold column gap-2">
          <span className="flex family1 block item-center gap-2">
            Languages
          </span>
          <span className="text-light">
            English - <span className="text-light text-grey2">Fluent</span>
          </span>
        </li>
        {/* accounts */}
        <li className="flex bottom w-100 fs-18 text-dark text-bold column gap-2">
          <span className="flex family1 block item-center gap-2">
            Linked Accounts
          </span>
          <span className="text-light">Google</span>
        </li>
        {/* skills */}
        <li className="flex bottom w-100 fs-18 text-dark column gap-2 text-bold gap-2">
          <span className="flex family1 block item-center gap-2">
            Skills
          </span>
          <div className="list w-100">
            <span className="fs-14 skills family1">3d Modelling</span>
            <span className="fs-14 skills family1">3d Modelling</span>
            <span className="fs-14 skills family1">3d Modelling</span>
          </div>
        </li>
      </ul>
    </SellerInfoBottomContent>
  );
}

const SellerInfoBottomContent = styled.div`
  padding: 2rem;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.08);
  a:hover {
    text-decoration: underline;
  }
  .skills {
    border: 1px solid rgba(0, 0, 0, 0.08);
    padding: 0.9rem 1.2rem;
    border-radius: 40px;
  }
  .list {
    flex-wrap: wrap;
    gap: 1.2rem;
  }
  .bottom {
    padding-bottom: 1.6rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }
`;
