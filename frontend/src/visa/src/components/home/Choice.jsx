import React from "react";
import styled from "styled-components";
import { FaLink, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const options = {
  items: 6,
  autoplay: true,
  dots: true,
  dotsClass: "owl-dots custom-dots",
  dotClass: "owl-dot custom-dot",
  margin: 20,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 5,
    },
  },
  // other configuration options
};

const choiceData = [
  {
    id: 1,
    image: "img/Home/visa/pexels-damir-mijailovic-4264783.jpg",
    title: "Presentation",
    subtitle: "brand",
  },
  {
    id: 2,
    image: "img/Home/visa/pexels-engin-akyurt-15483653.jpg",
    title: "Presentation",
    subtitle: "brand",
  },
  {
    id: 3,
    image: "img/Home/visa/pexels-ingo-joseph-109629.jpg",
    title: "Presentation",
    subtitle: "brand",
  },
  {
    id: 4,
    image: "img/Home/visa/pexels-sharefaith-1202723.jpg",
    title: "Presentation",
    subtitle: "brand",
  },
  {
    id: 1,
    image: "img/Home/visa/pexels-damir-mijailovic-4264783.jpg",
    title: "Presentation",
    subtitle: "brand",
  },
  {
    id: 2,
    image: "img/Home/visa/pexels-engin-akyurt-15483653.jpg",
    title: "Presentation",
    subtitle: "brand",
  },
  {
    id: 3,
    image: "img/Home/visa/pexels-ingo-joseph-109629.jpg",
    title: "Presentation",
    subtitle: "brand",
  },
  {
    id: 4,
    image: "img/Home/visa/pexels-sharefaith-1202723.jpg",
    title: "Presentation",
    subtitle: "brand",
  },
];

export default function Choice() {
  return (
    <ChoiceContent>
      <div className="container pt-4">
        <div className="w-100 hidden">
          <h4
            className="pb-4 text-4 text-uppercase"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {" "}
            Top <strong className="font-weight-extra-bold"> Choice</strong>
          </h4>
        </div>

        <div className="flex column gap-1">
          <div className="w-100 hidden">
            <h2
              className="mb-0 fs-50 font-weight-normal"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              Visa, Immigration, Citizenship{" "}
              <strong
                data-aos-delay="700"
                className="font-weight-extra-bold block pt-1"
              >
                Choose Your Dream Country
              </strong>
            </h2>
          </div>
          <div className="w-100 hidden">
            <p
              className="pt-2 family1 w-100"
              data-aos="fade-up"
              style={{ lineHeight: "1.2" }}
            >
              We are an expert visa consultant focusing on providing quick
              services to all your travelling needs. <br /> Be it a visa, travel
              insurance, flight ticketing, we cover it all.
            </p>
          </div>
        </div>
        <div className="py-4 w-100">
          <OwlCarousel {...options}>
            {choiceData.map((x) => {
              return (
                <div className="portfolio-item " key={x.id}>
                  <div className="border-radius-0 ">
                    <Content className="content text-center h-100 position-relative">
                      <img
                        src={x.image}
                        className="w-100 border-radius-0 imgs"
                        alt=""
                      />
                      <div className="overlay-show"></div>
                      {/* <div className="thumb-info-title w-100 flex item-start justify-start column absolute bottom-0 light down">
                        <h5 className="thumb-info-inner start line-height-1 font-weight-bold text-dark position-relative top-3">
                          {x.title}
                        </h5>
                        <p className="thumb-info-type start uppercase">
                          {x.subtitle}
                        </p>
                      </div> */}
                      <div className="iconWrapper text-center1 position-absolute">
                        <Link to="portfolio-single-wide-slider.html">
                          <div className="h-4 w-4 radius-50 icon primary">
                            <FaLink />
                          </div>
                        </Link>
                        <Link to={x.id} className="lightbox-portfolio">
                          <div className="h-4 w-4 radius-50 icon light">
                            <FaSearch />
                          </div>
                        </Link>
                      </div>
                    </Content>
                  </div>
                </div>
              );
            })}
          </OwlCarousel>
        </div>
        <Link
          to={"/passport"}
          className="btn fs-16 uppercase btn-dark btn-arrow-effect-1"
        >
          Explore Over 10+ Countries
        </Link>
      </div>
    </ChoiceContent>
  );
}

const Content = styled.div`
  overflow: hidden;
  position: relative;
  height: 30rem;
  .imgs {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
  }
  .container {
    width: 85%;
    margin: 0 auto;
  }
  &:hover {
    .iconWrapper {
      opacity: 1;
      visibility: visible;
      transform: scale(1);
      a {
        .icon {
        }
      }
    }
    .down {
      bottom: 0;
      opacity: 1;
      visibility: visible;
      transition: all 0.4s;
      position: absolute;
      left: 0;
    }
    .overlay-show {
      opacity: 1;
      visibility: visible;
      transform: scale(1);
      transition: all 0.4s;
    }
  }
  .down {
    bottom: -100%;
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s;
    gap: 0.3rem;
  }
  .iconWrapper {
    opacity: 0;
    visibility: hidden;
    transform: scale(0.8);
    transition: all 0.4s;
    gap: 1rem;
    a {
      .icon {
        svg {
          font-size: 1.5rem;
          color: var(--dark-1);
        }
      }
    }
  }
  .overlay-show {
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s;
  }
`;
const ChoiceContent = styled.div`
  width: 100%;
  padding: 10rem 0;
  .row {
    justify-content: flex-start;
    .icon {
      display: grid;
      place-items: center;
    }
    .content {
    }
  }
`;
