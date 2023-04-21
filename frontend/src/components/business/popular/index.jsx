import React from "react";
import styled from "styled-components";

const popularData = [
  {
    id: 1,
    text: "Website devlopment",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F1269a57212df4631b866219ba2013fa8%2F1005c884548a4963b52160bcb2dbf62e?format=webp&width=200",
  },
  {
    id: 2,
    text: "Short video ads",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F1269a57212df4631b866219ba2013fa8%2F78e7b2bdd9ea46e098b311f7bb603724?format=webp&width=200",
  },
  {
    id: 3,
    text: "3d modelling",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F1269a57212df4631b866219ba2013fa8%2F8fa5c9c7d54b4903a74d348713acd0c5?format=webp&width=200",
  },
  {
    id: 4,
    text: "Illustration",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F1269a57212df4631b866219ba2013fa8%2F2c201b5e3ad643b487968b3222fff770?format=webp&width=800",
  },
  {
    id: 5,
    text: "Website Content",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F1269a57212df4631b866219ba2013fa8%2F2c201b5e3ad643b487968b3222fff770?format=webp&width=800",
  },
  {
    id: 6,
    text: "Presentation Design",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F1269a57212df4631b866219ba2013fa8%2Ffbf68e924dd84485beb72b0ac0e9c9e9?format=webp&width=200",
  },
  {
    id: 7,
    text: "Video Editing",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F1269a57212df4631b866219ba2013fa8%2F30a909c4f6a7428e9865306643f747c8?format=webp&width=200",
  },
  {
    id: 8,
    text: "Web Application",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F1269a57212df4631b866219ba2013fa8%2F1e1c04f0bc324cf19c0391b5413db91e?format=webp&width=200",
  },
  {
    id: 9,
    text: "2d animated explainer",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F1269a57212df4631b866219ba2013fa8%2F1e1c04f0bc324cf19c0391b5413db91e?format=webp&width=200",
  },
  {
    id: 10,
    text: "Graphic Ui",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F1269a57212df4631b866219ba2013fa8%2Fa165e89a8989475691a17b0e72c16228?format=webp&width=200",
  },
];

export default function PopularIndex() {
  return (
    <PopularIndexContent>
      <div className="w-85 auto py-6 flex column gap-3">
        <h3 className="fs-24 text-start text-bold text-dark">
          Popular services for business
        </h3>
        <div className="w-100 py-2">
          <div className="large w-100 grid grid-auto">
            {popularData.map((x) => {
              return (
                <div className="card flex item-center justify-center column gap-2" key={x.id}>
                  <img src={x.image} alt="" className="images" />
                  <h4 className="fs-16 text-dark">{x.text}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </PopularIndexContent>
  );
}

const PopularIndexContent = styled.div`
  width: 100%;
  .images {
    width: 12rem;
    height: 12rem;
  }
  .grid-auto {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    grid-gap: 1rem;
  }
  .card {
    padding: 2rem;
    background-color: var(--light-grey);
    border-radius: 10px;
  }
  .medium {
    @media (min-width: 980px) {
      display: none;
    }
  }
  .large {
    @media (min-width: 980px) {
    }
  }
`;
