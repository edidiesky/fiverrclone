import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const doData = [
  {
    image:
      "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/seller_onboarding_perseus/apps/information.b1ffdb5.svg",
    text:
      "Providing any misleading or inaccurate information about your identity.",
  },
  {
    image:
      "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/seller_onboarding_perseus/apps/account.27ab99f.svg",
    text:
      "Opening duplicate accounts. Remember, you can always create more Gigs.",
  },
  {
    image:
      "	https://fiverr-res.cloudinary.com/npm-assets/@fiverr/seller_onboarding_perseus/apps/work.eeb908f.svg",
    text: "Soliciting other community members for work on Fiverr.",
  },
  {
    image:
      "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/seller_onboarding_perseus/apps/payment.de5cb48.svg",
    text: "Requesting to take communication and payment outside of Fiverr.",
  },
];

export default function SellerPage2() {
  return (
    <SellerPage2Container>
      <div className="w-90 auto sellerWrapper">
        <div className="w-100">
          <img
            src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/6c2ad11444ef671ac89d56497b5b2e9b-1634792164899/image2.a1387aa.jpeg"
            alt=""
            className="w-100 image radius1"
          />
        </div>
        <div className="w-100 flex item-start column gap-2">
          <h3 className="fs-24 family1">
            Now, let’s talk about the things you want to steer clear of.
          </h3>
          <span className="block fs-18 text-light text-grey">
            Your success on Fiverr is important to us. Avoid the following to
            keep in line with our community standards:
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
              to={"/seller_onboarding/personal_info"}
              className="contactBtn family1 green fs-18 text-white"
            >
              Continue
            </Link>
            <Link to={"/seller_onboarding/do"} className="contactBtn family1 fs-16 text-grey">
              Back
            </Link>
          </div>
        </div>
      </div>
    </SellerPage2Container>
  );
}
const SellerPage2Container = styled.div`
  width: 100%;
  .sellerWrapper {
    display: grid;
    grid-template-columns: 30vw 1fr;
    grid-gap: 7rem;
    height: 100%;
    padding: 3rem 0;
    @media (max-width: 790px) {
      grid-template-columns: 1fr;
    }
    .buttonWrapper {
      width: 60%;
    }

    .image {
      height: 55rem;
      @media (max-width: 790px) {
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
