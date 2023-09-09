import React from "react";
import { Banner2 } from "../../common";
import AboutIndex from "../about";
// import CompaniesIndex from "../companies";
import CustomersIndex from "../customer";
import HeroIndex from "../hero";
import ProcessIndex from "../process";

export default function Mainindex() {
  return (
    <div role="main" className="main">
      {/* hero */}
      <HeroIndex />
      <AboutIndex />
      {/* <CompaniesIndex /> */}

      <Banner2
        text={"Request Rate Online - Need Immediate Confirmation?"}
        subText={"Call Us at 888-123-4567"}
      />
      <ProcessIndex />
    </div>
  );
}
