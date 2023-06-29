import React from "react";
import UserIndex from "./user";
import { useSelector } from "react-redux";

export default function ProfileLeftIndex() {
  return (
    <div className="flex w-100 column gap-2">
        <UserIndex />;
    </div>
  );
}
