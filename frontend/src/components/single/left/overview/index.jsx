import React from "react";
import Criticism from "./Criticism";
import GigInfo from "./GigInfo";
import Title from "./Title";
import DetailsTopLeft from "./Top";
import { Links } from "../../../common";
import { useSelector } from "react-redux";

export default function OverviewIndex() {
  const { GigsDetails } = useSelector((store) => store.gigs);

  return (
    <div className="flex column w-100 gap-2">
      <Links
        step1={"Home"}
        step2={`${GigsDetails?.category[0]}`}
        step3={`${GigsDetails?.category[1]}`}
      />
      <Title />
      <DetailsTopLeft />
      <Criticism />
      <GigInfo />
    </div>
  );
}
