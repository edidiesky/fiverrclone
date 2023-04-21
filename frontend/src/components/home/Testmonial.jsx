import React from "react";
import styled from "styled-components";
import OwlCarousel from "react-owl-carousel";
import { Slider } from "../common";

const options2 = {
  items: 1,
  dots: true,
  margin: 30,
  dotsClass: "owl-dots custom-dots",
  dotClass: "owl-dot custom-dot",
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
  },
};

const testimonialData = [
  {
    position: "Co-Founder",
    company: "rooted",
    name: "Kay Kim",
    companyImage:
      "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/rooted-logo-x2.7da3bc9.png",
    image:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg",
    desc: "We use Fiverr for our SEO, our logo, website, copy, and animated videos - literally everything. It was like working with a human right next to you versus being across the world",
  },
  {
    position: "Co-Founder",
    company: "Okler",
    name: "Brighid Dannon",
    companyImage:
      "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/lavender-logo-x2.3fff9e7.png",
    image:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173414/testimonial-video-still-naadam.jpg",
    desc: "We use Fiverr for our SEO, our logo, website, copuy, and animated videos - literally everything. It was like working with a human right next to you versus being across the world",
  },
  {
    position: "Co-Founder",
    company: "Okler",
    name: "Kay Kim",
    companyImage:"https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/haerfest-logo-x2.934ab63.png",
    image:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg",
    desc: "We use Fiverr for our SEO, our logo, website, copuy, and animated videos - literally everything. It was like working with a human right next to you versus being across the world",
  },
  {
    position: "Co-Founder",
    company: "Okler",
    name: "Kay Kim",
    companyImage:"https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/naadam-logo-x2.a79031d.png",
    image:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg",
    desc: "We use Fiverr for our SEO, our logo, website, copuy, and animated videos - literally everything. It was like working with a human right next to you versus being across the world",
  },
];

export default function MapIndex() {
  return (
    <MapIndexWrapper>
      <div className="container3 w-90 auto">
        <div className="accordion">
          <Slider className="owl-theme" options={options2}>
            {testimonialData.map((x) => {
              return (
                <div className="Card w-100 " key={x.id}>
                  <div className="imageWrapper">
                    <img src={x.image} alt="" className="images" />
                  </div>
                  <div className="w-90 flex gap-2 column item-start">
                    <h4 className="fs-18 text-bold text-grey flex gap-2 item-center">
                      {x.name}, {x.position}
                      <div className="flex icon item-center justify-center">
                        <img src={x.companyImage} alt="" className="image" style={{height:"4rem"}} />
                      </div>
                    </h4>
                    <p className="para">"{x.desc}"</p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </MapIndexWrapper>
  );
}

const MapIndexWrapper = styled.div`
  width: 100%;
  padding: 5rem 0;
  .image {
    width: .8rem;
  }
  .icon {
    padding-left: 2rem;
    border-left: 1px solid var(--grey-2);
  }
  .Card {
    display: grid;
    grid-template-columns: 35vw 1fr;
    grid-gap: 6rem;
    @media (max-width:780px) {
      grid-template-columns: 1fr;
    }
    .imageWrapper {
      width: 100%;
      .images {
        width: 100%;
      }
    }

    .para {
      font-size: 3rem;
      font-style: italic;
      font-weight: 300;
      color: var(--green);
      font-family: serif;
    }

    .textTop {
      padding: 4rem 2rem;
      background-color: var(--blue-2);
      display: flex;
      gap: 3rem;
      position: relative;
      &::after {
        content: "";
        bottom: -10%;
        left: 10%;
        width: 4rem;
        height: 4rem;
        background-color: red;
        position: absolute;
        transform: rotate(-45deg);
        background-color: inherit;
      }
      .icons {
        font-size: 3rem;
        color: #fff;
      }
      p {
        color: #fff;
        width: 85%;
      }
    }
  }
`;
