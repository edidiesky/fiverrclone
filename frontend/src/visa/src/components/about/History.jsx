import React from "react";
import styled from "styled-components";

export default function History() {
  return (
    <HistoryContent>
      <div className="container flex item-center column py-8 gap-3">
        <div className="w-100 center">
          <h2 className="fs-40 relative center text-light">
            Our <strong className="text-extra-bold">History</strong>
          </h2>
          <span className="block fs-16 pt-3 text-grey w-60 auto line2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
            distinctio.
          </span>
        </div>
      </div>
    </HistoryContent>
  );
}

const HistoryContent = styled.div``;
