import React, { useState } from "react";
import styled from "styled-components";

export default function Input({ id, onChange, errorMessage, ...props }) {
  const [touched, setTouched] = useState(false);
  const handleTouch = () => {
    setTouched(true);
  };
  return (
    <LabelContainer className="family1" htmlFor={id}>
      {id}
      <input
        {...props}
        onBlur={handleTouch}
        onFocus={() => (props.name === "password2" ? setTouched(true) : "")}
        focused={touched.toString()}
        onChange={onChange}
      />
    </LabelContainer>
  );
}

const LabelContainer = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  font-size: 1.4rem;
  color: var(--dark-1);
  font-weight: 700;
  text-transform: capitalize;
  /* font-family: "Roboto Condensed", sans-serif; */
  font-family: "Montserrat", sans-serif;

  input {
    height: 5rem;
    border-radius: 8px;
    background: #fff;
    padding: 0 2.4rem;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.3);
    outline: none;
    font-size: 1.3rem;
    font-weight: 500;
    transition: all 0.2s;
    font-family: inherit;
    /* font-family: "Roboto Condensed", sans-serif; */
    font-family: "Montserrat", sans-serif;
    color: var(--grey-3);

    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.4);
      box-shadow: 0 2px 3px rgba(0, 0, 0, 0.08);
    }
    &:focus {
      border: 1px solid rgba(0, 0, 0, 0.8);
    }
    &.inputError {
      border: 1px solid var(--red);
    }
    &:invalid[focused="true"] ~ span {
      display: block;
    }
    &:invalid[focused="true"] {
      border: 1px solid var(--red);
    }
  }

  span {
    font-size: 1.3rem;
    color: #c61212;
    font-weight: 600;
    display: none;
  }
`;
