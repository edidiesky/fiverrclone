import React, { useState } from "react";
import styled from "styled-components";
import { FaEye, FaMoneyCheck } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BiStats } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { BsCartPlus } from "react-icons/bs";

export default function Widget() {
  const [widgettab, setWidgetTab] = useState(1);
  // const { totalProduct, isStatLoading } = useSelector((store) => store.product);
  // const {  totalUser } = useSelector((store) => store.user);
  const WidgetData = [
    {
      id: 1,
      title: "Total Sales",
      qty: "$100,357",
      icon: <RiMoneyDollarCircleLine />,
      back: "#ff3333",
      percent: "2.6",
    },
    {
      id: 2,
      title: "Visitors",
      qty: `$100`,
      icon: <FaEye />,
      back: "#50fc61",
      percent: "-0.06",
    },
    {
      id: 4,
      title: "Total Product",
      qty: `100`,
      icon: <BiStats />,
      back: "#1457ed",
      percent: "+1.06",
    },
    {
      id: 4,
      title: "Listed Merchant",
      qty: `100`,
      icon: <BsCartPlus />,
      back: "#1457ed",
      percent: "+1.06",
    },
  ];

  return (
    <WidgetWrapper>
      {WidgetData.map((x, index) => {
        return (
          <div
            className={
              widgettab === x.id ? "widgetCard family1" : "widgetCard family1"
            }
            key={x.id}
            onClick={() => setWidgetTab(x.id)}
          >
            <div className="Icons">{x.icon}</div>
            <h2>
              <span className="span1">{x.title}</span>
              {x.qty}
            </h2>
          </div>
        );
      })}
    </WidgetWrapper>
  );
}

const WidgetWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;

  grid-gap: 2rem;
  /* transform: translateY(-50%); */

  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));

  @media (max-width: 780px) {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  }

  .widgetCard {
    padding: 3rem 2rem;
    background: var(--white);
    display: flex;
    flex-direction: column;
    gap: 4rem;
    width: 100%;
    border-radius: 10px;
    transition: all 0.3s;
    h4 {
      font-size: 1.3rem;
      color: var(--grey-2);
      font-weight: 400;
      .span2 {
        color: var(--green);
      }
    }

    h2 {
      font-size: 3.5rem;
      color: var(--text-color);
      font-weight: 600;
      text-transform: uppercase;
      .span1 {
        display: block;
        font-size: 1.6rem;
        color: var(--grey-2);
        font-weight: 400;
        text-transform: capitalize;
      }
    }

    .Icons {
      width: 5rem;
      height: 5rem;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #daf2c2;
      border-radius: 6px;
      svg {
        font-size: 2.5rem;
        color: var(--green);
      }
    }
    &.active,
    &:hover {
      background: #daf2c2;
      .Icons {
        background: var(--green);
        svg {
          color: #daf2c2;
        }
      }

      h2,
      h4 {
        color: var(--white);
        .span2 {
          color: var(--white);
        }
      }
    }
  }
`;
