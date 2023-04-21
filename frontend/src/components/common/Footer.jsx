import React from "react";
import { BsFacebook, BsInstagram, BsTwitch, BsTwitter } from "react-icons/bs";
import styled from "styled-components";

const Tagdata1 = [
  "Graphics & Design",
  "Digital Marketing",
  "Writing & Translation",
  "Music & Audio",
  "D&Programming & Tech",
  "Video & Animation",
  "Business",
  "Lifestyle",
  "Photography",
  "Sitemap",
];

const Tagdata2 = [
  "Careers",
  "Press & News",
  "Partnerships",
  "Privacy Policy",
  "D&Programming & Tech",
  "Intellectual Property Claims",
  "Investor Relations",
];

const Tagdata3 = [
  "Help & Support",
  "Trust & Safety",
  "Partnerships",
  "Selling on Fiverr",
  "Buying on Fiverr",
];

const Tagdata4 = [
  "Customer Success Stories",
  "Community hub",
  "Forum",
  "Events",
  "Blog",
  "Influencers",
  "Affiliates",
  "Podcast",
  "Invite a Friend",
  "Community Standards",
];

const Tagdata5 = [
  "Fiverr Business",
  "Fiverr Pro",
  "Fiverr Logo Maker",
  "Fiverr Guides",
  "Get Inspired",
  "Fiverr Select",
  "ClearVoice",
  "Content Marketing",

  "Fiverr Workspace",

  "Learn",
  "Online Courses",

  "Working Not Working",
];
export default function Footer() {
  return (
    <FooterContainer>
      <div className="w-90 container auto">
        <div className="w-100 flex column gap-2">
          <h4 className="fs-18 text-dark text-extra-bold">Categories</h4>
          <ul className="w-100 flex gap-2 column">
            {Tagdata1.map(x=> {
              return <li className="w-100 fs-16 text-light text-grey">{x}</li>
            })}
          </ul>
        </div>
        <div className="w-100 flex column gap-2">
          <h4 className="fs-18 text-dark text-extra-bold">About</h4>
          <ul className="w-100 flex gap-2 column">
            {Tagdata2.map(x=> {
              return <li className="w-100 fs-16 text-light text-grey">{x}</li>
            })}
          </ul>
        </div>
        <div className="w-100 flex column gap-2">
          <h4 className="fs-18 text-dark text-extra-bold">Support</h4>
          <ul className="w-100 flex gap-2 column">
            {Tagdata3.map(x=> {
              return <li className="w-100 fs-16 text-light text-grey">{x}</li>
            })}
          </ul>
        </div>
        <div className="w-100 flex column gap-2">
          <h4 className="fs-18 text-dark text-extra-bold">Community</h4>
          <ul className="w-100 flex gap-2 column">
            {Tagdata4.map(x=> {
              return <li className="w-100 fs-16 text-light text-grey">{x}</li>
            })}
          </ul>
        </div>
        <div className="w-100 flex column gap-2">
          <h4 className="fs-18 text-dark text-extra-bold">More From Fiverr</h4>
          <ul className="w-100 flex gap-2 column">
            {Tagdata5.map(x=> {
              return <li className="w-100 fs-16 text-light text-grey">{x}</li>
            })}
          </ul>
        </div>
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  width: 100%;
  position: relative;
  background-color: #fff;
  padding: 6rem 0;
  border-top: 1px solid rgba(0,0,0,.09);
  .tag {
    flex-wrap: wrap;
    span {
      display: inline-block;
      margin: 0.8rem;
      border: 1px solid #fff;
      padding: 1rem 1.4rem;
      font-size: 1.2rem;
      color: #fff;
      background: transparent;
      &:hover {
        background-color: var(--secondary);
        border: 1px solid var(--secondary);
      }
    }
  }
  .imageIcon {
    width: 14rem;
  }
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 2rem;
  }
`;
