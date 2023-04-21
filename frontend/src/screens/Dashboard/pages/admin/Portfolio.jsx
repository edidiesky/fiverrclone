import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";
import { Chart, Widget, Donut } from "../../components";

const StatisticsWrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  .chartWrapper {
    width: 100%;
    place-items: start;
  }
`;

export default function Statistics() {
  // get all Order statistics and product statistics
  const dispatch = useDispatch();

  return (
    <>
      <StatisticsWrapper className="py-3 w-100 flex column gap-2 ">
        <div className="w-100">
          <Widget />
        </div>
        <div className="chartWrapper grid grid-auto grid-gap2">
          <Chart title="Analytics" />
          <Donut title="Analytics" />
        </div>
      </StatisticsWrapper>
    </>
  );
}
