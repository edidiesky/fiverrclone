import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
export const ProtectRoute = ({ children, type }) => {
  // const navigate = useNavigate()
  const { userInfo } = useSelector((store) => store.user);
  if (!userInfo) {
    return <Navigate to="/join/login" />;
  }
  if (type === "dashboard") {
    if (userInfo?.role === "user") {
      return <Navigate to="/join/login" />;
    }
  }

  return children;
};
