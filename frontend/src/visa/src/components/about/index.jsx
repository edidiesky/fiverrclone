import React from "react";
import CarouselIndex from "../visa/carousel";
import AboutUs from "./About";
import History from "./History";
import Team from "./Team";

export default function AboutIndex() {
  return (
    <div className="w-100">
      <div className="container py-8 flex item-center row justify-space">
        <h2 className="flex-1 fs-30 line2">
          The New Way to <span className="py-1 px-2 blue text-white center">Success</span>
          <span className="block fs-16 text-light w-80 start pt-2 line1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            rutrum pellentesque imperdiet. Nulla lacinia iaculis nulla non
            metus. pulvinar. Sociis natoque penatibus et magnis dis parturient
            montes.
          </span>
        </h2>
        <button className="btn-1 blue text-white py-2 px-2 capitalize fs-14 uppercase">Join our team!</button>
      </div>
      <AboutUs />
      <Team />
    </div>
  );
}
