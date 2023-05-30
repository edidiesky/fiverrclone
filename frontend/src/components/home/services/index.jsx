import React from "react";
import styled from "styled-components";
import Head from "../../common/Head";
import { Link } from "react-router-dom";
import { Slider } from "../../common";

const options2 = {
  items: 4,
  nav: true,
  dots: false,
  margin: 30,
  navText: ["<", ">"],
  width: "100%",
  slideBy: 4,
  responsive: {
    0: {
      items: 3,
    },
    460: {
      items: 2,
    },
    760: {
      items: 2,
    },
    1024: {
      items: 5,
    },
  },
};

const projectData = [
  {
    id: 1,
    category: ["graphics-design", "Ai Artist"],
    authorName: "Add talent to Ai",
    subName: "Ai Artist",
    image:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/f27bec553efc12cc60baed89b8f2223e-1674661140708/ai-artists-2x.png",
  },
  {
    id: 2,
    category: ["graphics-design", "Logo Design"],
    subName: "Logo Design",
    authorName: "Build your brand",
    image:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png",
  },
  {
    id: 3,
    category: ["web-development", "Social media"],
    subName: "Social media",
    authorName: "Customize your site",
    image:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png",
  },
  {
    id: 4,
    category: ['music-audio','voice-over'],
    authorName: "Share your message",
    subName:"Voice Over",
    image:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png",
  },
  {
    id: 5,
    category: ['online-marketing','social-marketing'],
    authorName: "Reach more customers",
    subName:"Social Media",
    image:"https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png"},
  {
    id: 6,
    category: "Wordpress",
    authorName: "Engage your audience",
    subName:"Video Explainer",
    image:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png",
  },




  {
    id: 1,
    category: ["graphics-design", "Ai Artist"],
    authorName: "Add talent to Ai",
    subName: "Ai Artist",
    image:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/f27bec553efc12cc60baed89b8f2223e-1674661140708/ai-artists-2x.png",
  },
  {
    id: 2,
    category: ["graphics-design", "Logo Design"],
    subName: "Logo Design",
    authorName: "Build your brand",
    image:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png",
  },
  {
    id: 3,
    category: ["web-development", "Social media"],
    subName: "Social media",
    authorName: "Customize your site",
    image:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png",
  },
  {
    id: 4,
    category: ['music-audio','voice-over'],
    authorName: "Share your message",
    subName:"Voice Over",
    image:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png",
  },
  {
    id: 5,
    category: ['online-marketing','social-marketing'],
    authorName: "Reach more customers",
    subName:"Social Media",
    image:"https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png"},
  {
    id: 6,
    category: "Wordpress",
    authorName: "Engage your audience",
    subName:"Video Explainer",
    image:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png",
  },
];

export default function ServicesIndex() {
  return (
    <ServicesIndexContainer>
      <div className="w-90 auto flex column">
        <div className="w-100 Heades flex item-start justify-space">
          <Head text={"Popular professional services"} />
        </div>
        <div className="w-100 grid grid-auto grid-gap1">
          <Slider className="owl-theme" options={options2}>
            {projectData.map((x) => {
              return (
                <Link
                  to={`/categories/${x.category[0]}/${x.category[1]}`}
                  className="w-100 flex column"
                  key={x.id}
                  style={{ position: "relative" }}
                >
                  <div className="w-100 card">
                    <img src={x.image} alt="" className="w-100" />
                    <div className="backdrop"></div>
                  </div>
                  <div className="bottom w-100 back-white py-2 flex item-center gap-1">
                    <div className="flex column">
                      <h5 className="fs-16 family1 text-extra-bold text-white">
                        {x.authorName}
                      </h5>
                      <h4 h4 className="fs-20 family1 text-white">
                        {x.subName}
                      </h4>
                    </div>
                  </div>
                </Link>
              );
            })}
          </Slider>
        </div>
      </div>
    </ServicesIndexContainer>
  );
}

const ServicesIndexContainer = styled.div`
  width: 100%;
  padding: 3rem 0;
  position: relative;
  .owl-nav {
    position: absolute;
    top: 35%;
    width: 100%;
    z-index: 10;
    background-color: #fff;
    &.disabled {
      display: none;
    }
    button.owl-next {
      background-color: #fff;
      border-radius: 50%;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      position: absolute;
      border-radius: 50%;
      transition: all 0.4s;
      font-size: 20px;
      color: #777;
      &.disabled {
        display: none;
      }
      &:hover {
        background-color: #fff;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
        color: #777;
      }
    }
    button.owl-prev {
      background-color: #fff;
      border-radius: 50%;
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      position: absolute;
      border-radius: 50%;
      transition: all 0.4s;
      color: #777;
      font-size: 20px;
      &.disabled {
        display: none;
      }
      &:hover {
        background-color: #fff;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
        color: #777;
      }
    }
    button.owl-prev {
      left: -2%;
    }
    button.owl-next {
      right: -2%;
    }
  }
  h4 {
    font-weight: 900;
  }
  .Heades {
    @media (max-width: 780px) {
      flex-direction: column;
      justify-content: flex-start;
    }
  }
  .bottom {
    padding: 2rem;
    position: absolute;
  }
  .image {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  }
  .project {
    overflow-x: auto;
    margin: 0 auto;
    padding: 5rem 0;
    width: 100%;
    min-width: 1000px;
  }
  .grid-auto {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  .card {
    position: relative;
    overflow: hidden;
    height: 40rem;

    &:hover {
      .backdrop {
        background-color: rgba(255, 255, 255, 0.05);
      }
    }
    .backdrop {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.2);
      transition: all 0.4s;
    }
    img {
      transition: all 0.4s;
      width: 100%;
      position: absolute;
      height: 100%;
      object-fit: cover;
    }
  }
`;
