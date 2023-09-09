import React from "react";
import styled from "styled-components";

export default function AboutUs() {
  return (
    <AboutUsContent>
      <div className="grid-2 auto row grid-gap2 py-6">
        <div className="imageWrapper w-100 hidden">
          <img
            src="img/generic/generic-corporate-3-3-full.jpg"
            alt=""
            className="w-100"
            data-aos="fade-left"
            data-aos-duration="1200"
          />
        </div>
        <div className="w-100 flex column gap-2 item-start pt-3">
          <h3
            className="text-dark fs-26 capitalize text-light"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="150"
          >
            Who <strong className="text-extra-bold">we are</strong>
          </h3>
          <div className="hidden">
            <p
              className="fs-16 text-light line1"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="350"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              vehicula sit amet enim ac sagittis. Curabitur eget leo varius,
              elementum mauris eget, egestas quam. Donec ante risus, dapibus sed
              lectus non, lacinia vestibulum nisi. Morbi vitae augue quam.
              Nullam ac laoreet libero.
            </p>
          </div>
          <div className="w-100 hidden">
            <p
              className="fs-16 line1"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="450"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              laboriosam impedit provident.
            </p>
          </div>
        </div>
      </div>
    </AboutUsContent>
  );
}

const AboutUsContent = styled.div`
  width: 100%;
  background: #f7f7f7;
  .grid-2 {
    width: 85%;
  }
`;
