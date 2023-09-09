import React from "react";
import styled from "styled-components";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const agentData = [
  { id: 1, image: "img/team/team-1.jpg", name: "Micheal", position: "CEO" },
  {
    id: 2,
    image: "img/team/team-2.jpg",
    name: "Jessica Doe",
    position: "Marketing",
  },
  { id: 3, image: "img/team/team-3.jpg", name: "Melinda Doe", position: "CEO" },
  {
    id: 4,
    image: "img/team/team-4.jpg",
    name: "Melinda Doe",
    position: "Marketing",
  },
];

export default function Team() {
  return (
    <TeamContent>
      <div className="container center pb-4">
        <div className="w-100 hidden">
          <h2
            className="fs-40 w-100 relative text-light center"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="350"
          >
            Meet Our <strong className="text-extra-bold">Team</strong>
            <span
              className="block fs-16 pt-1 text-grey w-60 auto line1"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="750"
            >
              Rockstars lorem ipsum dolor sit amet, consectetur adipiscing elit
              ac laoreet libero.
            </span>
          </h2>
        </div>
      </div>
      <div className="wrapper flex item-center">
        {agentData.map((x, index) => {
          return (
            <div
              className="Card w-100 flex column gap-2"
              key={x.id}
              data-aos-delay={index * 200}
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div
                className="Imgwrapper relative w-100 appear-animation"
                data-appear-animation="fadeInLeftShorter"
              >
                <img src={x.image} className="w-100" alt="" />
              </div>
              <div className="CardLeft">
                <div className="cardTop">
                  <h3
                    className="fs-14 capitalize text-white"
                    data-appear-animation="maskUp"
                    data-appear-animation-delay="300"
                  >
                    {x.name}
                  </h3>
                  <p
                    className="role"
                    data-appear-animation="maskUp"
                    data-appear-animation-delay="500"
                  >
                    {x.position}
                  </p>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <div className="iconContanier flex item-center gap-1 pt-2">
                  <div className="icon">
                    <FaFacebook />
                  </div>
                  <div className="icon">
                    <FaTwitter />
                  </div>
                  <div className="icon">
                    <FaInstagram />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </TeamContent>
  );
}

const TeamContent = styled.div`
  padding: 7rem 0;
  background-color: #f7f7f7;
  width: 100%;
  .iconContanier {
    .icon {
      width: 3.1rem;
      height: 3.1rem;
      border-radius: 50%;
      display: grid;
      place-items: center;
      background-color: var(--blue-2);
      box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
      transition: all 0.4s;
      cursor: pointer;
      &:hover {
        background-color: var(--blue-2);
        svg {
          color: #fff;
        }
      }
      svg {
        width: 40%;
        height: 40%;
        color: #fff;
      }
    }
  }
  .wrapper {
    display: grid;
    width: 90%;
    margin: 0 auto;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 1rem;
    grid-row-gap: 4rem;
    .Card {
      position: relative;
      &:hover {
        .Imgwrapper {
          img {
            transform: scale(1.2);
          }
        }
      }
      .Imgwrapper {
        position: relative;
        overflow: hidden;
        img {
          transition: all 0.5s;
        }
      }
      .CardLeft {
        width: 100%;
        .cardTop {
          position: absolute;
          bottom: 45%;
          padding: 1rem 3rem;
          background-color: rgba(0, 0, 0, 0.4);
          z-index: 400;
          .role {
            transform: translateX(-50%);
            position: absolute;
            left: 50%;
            font-size: 1.2rem;
            bottom: -60%;
            color: #fff;
            font-weight: 600;
            text-align: center;
            width: 7rem;
            display: inline-block;
            background-color: var(--blue-2);
          }
        }
      }
    }
  }
`;
