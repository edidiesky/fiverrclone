import React from "react";
import OverviewIndex from "./overview";
import ReviewsInfo from "./reviews";
import SellerInfo from "./seller";

export default function SingleLeftIndex({ id }) {
  return (
    <div>
      <div className="w-100 flex column gap-2">
        <OverviewIndex />
        <SellerInfo />
        <ReviewsInfo id={id} />
      </div>
    </div>
  );
}
