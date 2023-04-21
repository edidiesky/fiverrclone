import React from "react";
import styled from "styled-components";
import Design1Index from "./design1";
import Features1Index from "./features1";
import Features2Index from "./features2";
import HeroIndex from "./hero";
import BestSeller from "./Explore";
import Arrivals from "./Testmonial";
import Talent from "./Talent";
import Banner1Index from "./banner1";
import ServicesIndex from "./services";
import GigsIndex from "./gigs";
export default function HomeIndex() {
  return (
    <HomeIndexContainer className="flex column ">
      <HeroIndex />
      <GigsIndex/>
      <ServicesIndex/>
      <BestSeller />
      <Design1Index />
      <Arrivals />
      <Banner1Index/>
      <Features1Index />
      <Features2Index />
      <Talent/>
    </HomeIndexContainer>
  );
}

const HomeIndexContainer = styled.div`
  width: 100%;
  overflow: hidden;
  height: 100%;
`;
