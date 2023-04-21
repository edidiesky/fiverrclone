import React from "react";
import styled from "styled-components";
import Head from "../../common/Head";
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import { Slider } from "../../common";
const options2 = {
  items: 5,
  loop: true,
  stagePadding: 10,
  nav: true,
  dots: false,
  margin: 20,
  navText: ["<", ">"],
  width: "100%",
  responsive: {
    0: {
      items: 2,
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
    category: "Logo Design",
    authorName: "Eveyln",
    autoImage:
      "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/27bdb82e27e444fe2b27aa7b3083cee8-1591694084918/f79ede47-da5f-440a-bf23-57ed9ef7d363.png",
    image:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_270,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615077/eveeelin.jpeg",
  },
  {
    id: 2,
    category: "Flyer Design",
    authorName: "Fernado",
    autoImage:
      "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/profile/photos/22711136/original/fiverr_profile.jpg",
    image:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_270,dpr_1.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg",
  },
  {
    id: 3,
    category: "Social media Design",
    authorName: "Eveyln",
    autoImage:
      "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/profile/photos/22711136/original/fiverr_profile.jpg",
    image:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_270,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615084/fernandobengua.png",
  },
  {
    id: 4,
    category: "Logo Design",
    authorName: "Eveyln",
    autoImage:
      "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/27bdb82e27e444fe2b27aa7b3083cee8-1591694084918/f79ede47-da5f-440a-bf23-57ed9ef7d363.png",
    image:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_270,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615096/passionshake.jpeg",
  },
  {
    id: 5,
    category: "Logo Design",
    authorName: "Fernado",
    autoImage:
      "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/profile/photos/22711136/original/fiverr_profile.jpg",
    image:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_270,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/bruno_malagrino.png",
  },
  {
    id: 6,
    category: "Logo Design",
    authorName: "Eveyln",
    autoImage:
      "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/profile/photos/22711136/original/fiverr_profile.jpg",
    image:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_270,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615106/skydesigner.png",
  },
];

export default function Features1Index() {
  return (
    <Features1IndexContainer>
      <div className="w-90 auto column">
        <div className="w-100 Heades flex item-center justify-space">
          <Head text={"Get inspired with projects made by our freelancers"} />
          <Link to={""} className="link flex item-center gap-1">
            See More Projects <BiChevronRight />
          </Link>
        </div>
        <div className="w-100 project">
          <div className="w-100 grid grid-auto grid-gap1">
            <Slider options={options2}>
              {projectData.map((x) => {
                return (
                  <Link
                    to={"/"}
                    className="w-100 MainCard flex column"
                    key={x.id}
                  >
                    <div className="w-100 card">
                      <img src={x.image} alt="" className="w-100" />
                      <div className="backdrop"></div>
                    </div>
                    <div className="bottom w-100 back-white py-2 flex item-center gap-1">
                      <img src={x.autoImage} alt="" className="image" style={{width:"5rem",height:"5rem", borderRadius:"50%"}} />
                      <div className="flex column">
                        <h4 className="fs-16 text-dark text-extra-bold">
                          {x.category}
                        </h4>
                        <h5 className="fs-14 text-light text-grey">
                          by {x.authorName}
                        </h5>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </Features1IndexContainer>
  );
}

const Features1IndexContainer = styled.div`
  width: 100%;
  padding: 6rem 0;
  background-color: var(--light-grey);
  position: relative;
  .MainCard {
    border:1px solid rgba(0,0,0,.2);
  }
  .owl-nav {
    position: absolute;
    top: 35%;
    width: 100%;
    z-index: 10;
    background-color: #fff;
    button.owl-next {
      background-color: #fff;
      border-radius: 50%;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      position: absolute;
      border-radius: 50%;
      transition: all 0.4s;
      font-size: 20px;
      color: #777;
      &:disabled {
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
      width: 40px;
      height: 40px;
      position: absolute;
      border-radius: 50%;
      transition: all 0.4s;
      color: #777;
      font-size: 20px;
      &:disabled {
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
  .Heades {
    @media (max-width: 780px) {
      flex-direction: column;
      justify-content: flex-start;
    }
  }
  .bottom {
    padding: 2rem;
    background-color: #fff;
  }
  .image {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  }
  .project {
    padding: 5rem 0;
    width: 100%;
  }
  .grid-auto {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  .card {
    height: 24rem;
    position: relative;
    overflow: hidden;
    &:hover {
      .backdrop {
        background-color: rgba(255, 255, 255, 0.05);
      }
    }
    .backdrop {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.2);

      transition: all 0.4s;
    }
    img {
      position: absolute;
      transition: all 0.4s;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
