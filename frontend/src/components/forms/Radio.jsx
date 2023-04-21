import React from "react";
import styled from "styled-components";

export default function ControlledRadioButtonsGroup({
  handleChange,
  valueList,
  option
}) {
  return (
    <PaymentIndexContainer className="radioForm">
      {valueList.map((x, index) => {
        return (
          <div
            className="form-radio w-100 radius1 family1"
            key={index}
          >
            <input
              type="radio"
              id={x}
              name={option}
              value={x}
              checked={option === x}
              onChange={handleChange}
            />
            <label htmlFor={x} className="form-label" onClick={handleChange}>
              <div className="formspan"></div>
              {x}
            </label>
          </div>
        );
      })}
    </PaymentIndexContainer>
  );
}

const PaymentIndexContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  align-items: flex-start;
  .form-radio {
    position: relative;
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 1.2rem;

    &:hover {
      background-color: var(--light-grey);
    }
    input {
      display: none;

      &:checked ~ label .formspan::after {
        opacity: 1;
        visibility: visible;
      }
    }

    .form-label {
      font-size: 1.3rem;
      color: #333;
      font-weight: 700;
      display: flex;
      align-items: center;
      position: relative;
      transform: translateX(40px);
      @media (max-width: 1080px) {
        font-size: 1.5rem;
      }

      .formspan {
        position: absolute;
        width: 2.4rem;
        height: 2.4rem;
        border-radius: 50%;
        position: absolute;
        left: -50%;
        top: 50%;
        transform: translateY(-50%);
        border: 1px solid rgba(0, 0, 0, 0.4);

        &::after {
          width: 1.4rem;
          height: 1.4rem;
          border-radius: 50%;
          display: block;
          position: absolute;
          top: 50%;
          left: 50%;
          opacity: 0;
          visibility: hidden;
          transform: translate(-50%, -50%);
          background: #000;
          content: "";
          @media (max-width: 780px) {
            width: 0.7rem;
            height: 0.7rem;
          }
        }
      }
    }
  }
`;
