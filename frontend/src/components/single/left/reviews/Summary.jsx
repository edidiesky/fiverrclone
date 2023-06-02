import React from "react";
import { ReviewCard } from "../../../common";
import { useSelector } from "react-redux";
export default function Summary() {
  const { reviews } = useSelector((store) => store.reviews);

  return (
    <div className="hidden">
      {reviews?.map((x,index) => {
        return <ReviewCard key={index} x={x} />;
      })}
    </div>
  );
}
