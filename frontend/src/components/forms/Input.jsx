import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const InputTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "7px",
    backgroundColor: "#fff",
    border: "1px solid rgba(0,0,0,.2)",

    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&:hover": {
      borderColor: "2px solid rgba(0,0,0,.7)",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid rgba(0,0,0,.7)",
      borderColor: "transparent",
    },
    "&.Mui-focused ": {
      border: "2px solid rgba(0,0,0,1)",
      // borderColor: "transparent",
    },
  },
  "& .MuiOutlinedInput-input": {
    padding: "24px 10px",
    paddingBottom: "12px",
    fontSize: "14px",
    fontWeight: "400",
    fontFamily: "Nunito, sans-serif",
    color: "var(--dark-1)",
  },
  "& .MuiInputLabel-root": {
    fontSize: "16px",
    fontWeight: "light",
    color: "var(--grey-1)",
    textTransform: "capitalize",
    fontFamily: "Nunito, sans-serif",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    // Styles when the form is focused
    fontWeight: "400",
    color: "var(--dark-1)",
  },
  "& .MuiInputLabel-shrink": {
    transform: "translate(12px, 10px) scale(0.8)",
    color: "var(--dark-1)",
    fontWeight: "300",
  },
}));

const FormInput = ({ types, setState, onChange, value, id, ...props }) => {
  return (
    <InputTextField
      label={id}
      variant="outlined"
      fullWidth
      autoComplete="off"
      {...props}
      value={value}
      onChange={onChange}
      multiline={types}
    />
  );
};

export default FormInput;
