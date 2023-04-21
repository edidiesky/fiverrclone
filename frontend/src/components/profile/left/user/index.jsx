import React from "react";
import Shared from "./Shared";
import UserInfo from "./UserBottomInfo";
import UserTopInfo from "./UserTopInfo";

export default function UserIndex() {
  return (
    <div className="flex w-100 column gap-2">
      <UserTopInfo />
      <UserInfo />
      <Shared/>
    </div>
  );
}
