import React from "react";
import { BiChevronRight } from "react-icons/bi";

export default function PaginationIndex() {
  return (
    <div>
      <div className="w-100 py-2 flex item-center justify-center gap-1">
        <div
          className="fs-16 text-dark flex item-center justify-center"
          style={{
            width: "4rem",
            height: "4rem",
            border: "1px solid rgba(0,0,0,.1)",
          }}
        >
          1
        </div>
        <div
          className="fs-16 text-dark flex item-center justify-center"
          style={{
            width: "4rem",
            height: "4rem",
            border: "1px solid rgba(0,0,0,.1)",
          }}
        >
          2
        </div>
        <div
          className="fs-16 text-dark flex item-center justify-center"
          style={{
            width: "4rem",
            height: "4rem",
            border: "1px solid rgba(0,0,0,.1)",
          }}
        >
          1
        </div>
        <div
          className="fs-16 text-dark flex item-center justify-center"
          style={{
            width: "4rem",
            height: "4rem",
            border: "1px solid rgba(0,0,0,.1)",
          }}
        >
          <BiChevronRight/>
        </div>
      </div>
    </div>
  );
}
