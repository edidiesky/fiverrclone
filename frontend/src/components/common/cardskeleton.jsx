import React from "react";
import styled from "styled-components";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";

const CardSkeleton = () => {
  return (
    // reviews
    <CardSkeletonWrapper className="w-100 block">
      <div className="w-100 flex column">
        <Skeleton height={150} />
        {/* <h4 className="card-title" style={{display:"block"}}>
          <Skeleton width={`60%`} />
          <Skeleton width={`40%`} />
        </h4> */}
        <div className="w-100 bottom justify-space flex column">
          <div className="flex column w-100 gap-2">
            <div className="flex item-center gap-2 w-85 auto">
              <Skeleton width={40} circle height={40} />
              <Skeleton width={100} height={25} />
            </div>
            <div className="w-85 auto flex column gap-1">
              <p className="card-channel">
                <Skeleton width={`85%`} height={15} />
              </p>
              <div className="card-metrics">
                <Skeleton width={`50%`} height={15} />
              </div>
            </div>
          </div>
          <div className="flex item-center justify-space gap-2 w-85 auto">
            <Skeleton width={45} height={25} />
            <Skeleton width={100} height={25} />
          </div>
        </div>
      </div>
    </CardSkeletonWrapper>
  );
};

const CardSkeletonWrapper = styled.div`
  .bottom{
    background-color: #fff;
    min-height: 26rem;
    border: 1px solid rgba(0,0,0,.1);
    padding: 2rem 0;
  }
`;
export default CardSkeleton;
