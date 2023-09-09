import React, { useState } from "react";
import { AiFillWarning } from "react-icons/ai";
import styled from "styled-components";

export default function Input({ id, onChange, errorMessage, ...props }) {
  const [touched, setTouched] = useState(false);
  const handleTouch = () => {
    setTouched(true);
  };
  return (
    <LabelContainer htmlFor={id}>
      {id}
      <input
        {...props}
        onBlur={handleTouch}
        onFocus={() => (props.name === "password2" ? setTouched(true) : "")}
        focused={touched.toString()}
        onChange={onChange}
      />
      <span className="error family1 flex item-center">
        <AiFillWarning fontSize={"18px"} color="#c61212" /> {errorMessage}
      </span>
    </LabelContainer>
  );
}

const LabelContainer = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  font-size: 1.6rem;
  color: var(--dark-1);
  font-weight: 600;
  text-transform: capitalize;

  input {
    height: 5rem;
    background: #fff;
    padding: 0 2.4rem;
    width: 100%;
    border: 1px solid #ccc;
    outline: none;
    font-size: 1.6rem;
    font-weight: 400;
    border-radius: 7px;
    transition: all 0.2s;
    font-family: "Roboto Condensed", sans-serif;
    &:hover {
      border: 1px solid #222;
      box-shadow: 0 2px 3px rgba(0, 0, 0, 0.08);
    }
    &:focus {
      border: 1px solid #222;
    }
    &.inputError {
      border: 1px solid #c61212;
    }
    &:invalid[focused="true"] ~ span {
      display: flex;
      gap: 0.5rem;
    }
    &:invalid[focused="true"] {
      border: 1px solid #c61212;
    }
    &:valid[focused="true"] {
      border: 1px solid var(--green);
    }
  }

  span {
    font-size: 1.5rem;
    color: #c61212;
    font-weight: 400;
    display: none;
  }
`;
