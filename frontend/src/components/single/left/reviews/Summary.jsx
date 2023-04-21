import React from "react";
import { sellerReview } from "../../../../data/Reviews";
import { ReviewCard } from "../../../common";
export default function Summary() {
  return (
    <div>
      {sellerReview.map((x) => {
        return (
          <ReviewCard x={x}/>
        );
      })}
    </div>
  );
}

