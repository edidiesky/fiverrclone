import React from "react";
import UserIndex from "./user";
import { useSelector } from "react-redux";

export default function ProfileLeftIndex() {
  const { userInfo } = useSelector((store) => store.user);
  // if (userInfo?.role === "user") {
  //   return <UserIndex />;
  // }
  return (
    <div className="flex w-100 column gap-2">
        <UserIndex />;
    </div>
  );
}
