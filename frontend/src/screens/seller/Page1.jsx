import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const doData = [
  {
    image:
      "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/seller_onboarding_perseus/apps/profile-ico.cd30e5c.svg",
    text:
      "Take your time in creating your profile so it’s exactly as you want it to be.",
  },
  {
    image:
      "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/seller_onboarding_perseus/apps/link-ico.a38dc70.svg",
    text:
      "Add credibility by linking out to your relevant professional networks.",
  },
  {
    image:
      "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/seller_onboarding_perseus/apps/skills-ico.5f6f1f3.svg",
    text:
      "Accurately describe your professional skills to help you get more work.",
  },
  {
    image:
      "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/seller_onboarding_perseus/apps/profilepic-ico.5613018.svg",
    text:
      "Put a face to your name! Upload a profile picture that clearly shows your face.",
  },
  {
    image:
      "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/seller_onboarding_perseus/apps/secure-ico.99f5690.svg",
    text:
      "To keep our community secure for everyone, we may ask you to verify your ID.",
  },
];

export default function SellerPage1() {
  return (
    <SellerPage1Container>
      <div className="w-90 auto sellerWrapper">
        <div className="w-100">
          <img
            src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/6efbf3f896f8ad45ed66505a6df63a60-1636629911828/seller_onboarding_overview_do.png"
            alt=""
            className="w-100 image radius1"
          />
        </div>
        <div className="w-100 flex item-start column gap-2">
          <h3 className="fs-24 family1">
            What makes a successful Fiverr profile?
          </h3>
          <span className="block fs-18 text-light text-grey">
            Your first impression matters! Create a profile that will stand out
            from the crowd on Fiverr.
          </span>

          <div className="w-100 dosWrapper">
            {doData.map((x, index) => {
              return (
                <div className="w-100 flex column gap-2" key={index}>
                  <img src={x.image} alt="" className="images" />
                  <h4 className="fs-18 text-dark text-light">{x.text}</h4>
                </div>
              );
            })}
          </div>
          <div className="buttonWrapper flex item-center py-2 gap-2">
            <Link
              to={"/seller_onboarding/dont"}
              className="contactBtn family1 green fs-18 text-white"
            >
              Continue
            </Link>
            <Link to={"/"} className="contactBtn family1 fs-16 text-grey">
              Back
            </Link>
          </div>
        </div>
      </div>
    </SellerPage1Container>
  );
}
const SellerPage1Container = styled.div`
  width: 100%;
  .sellerWrapper {
    display: grid;
    grid-template-columns: 30vw 1fr;
    grid-gap: 7rem;
    height: 100%;
    padding: 3rem 0;
    @media (max-width: 990px) {
      grid-template-columns: 1fr;
    }
    .buttonWrapper {
      width: 60%;
    }

    .image {
      height: 55rem;
      @media (max-width: 990px) {
        display: none;
      }
    }

    .dosWrapper {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
      grid-gap: 3rem;

      .buttonWrapper {
        width: 60%;
      }

      .images {
        width: 5rem;
        height: 5rem;
      }
    }
  }
`;
