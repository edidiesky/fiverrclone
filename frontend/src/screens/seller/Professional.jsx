import React  from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const options = [
  {
    value: 1,
    label: "Leanne Graham",
  },
  {
    value: 2,
    label: "Ervin Howell",
  },
];

export default function Professional() {

  return (
    <ProfessionalContainer>
      <div className="py-4 flex item-start gap-1">
        <h2 className="fs-35 w-90 auto w-50 text-dark text-light">
          Professional Info
          <span className="fs-16 block text-grey2 text-light">
            This is your time to shine. Let potential buyers know what you do
            best and how you gained your skills, certifications and experience.
          </span>
        </h2>
      </div>
      <div className="w-90 auto column flex gap-4">
        {/* submit btn */}
        <div className="contactWrapper flex item-center justify-end">
          <Link
            to={"/seller_onboarding/professional_info"}
            className="contactBtn green fs-16 family1 text-bold text-white"
          >
            Continue
          </Link>
        </div>
      </div>
    </ProfessionalContainer>
  );
}

const ProfessionalContainer = styled.div`
  width: 100%;
  .my-select .dropdown-select {
    font-size: 36px;
    padding: 14px;
  }

  .my-select .dropdown-select-option {
    font-size: 36px;
    padding: 14px;
  }

  .my-select .dropdown-select-option:hover {
    background-color: #e5e5e5;
  }
  .contactWrapper {
    padding: 2rem 0;
    display: flex;
    width: 280px;
    align-self: flex-end;
    justify-self: flex-end;
    .contactBtn {
      padding: 1.5rem;
    }
  }
  span {
    width: 60%;
  }
  .profile {
    width: 60%;
    &:hover {
      span {
        opacity: 1;
        visibility: visible;
      }
    }
    span {
      opacity: 0;
      width: 70%;
      visibility: hidden;
    }
  }
  h2 {
    padding: 2rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.07);
  }
`;
