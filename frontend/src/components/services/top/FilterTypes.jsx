import React, { useState } from "react";
import { Radio } from "../../forms";
import { BiCheck } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { getAllGigs } from "../../../Features";
import { getMaxPrice, getMinPrice } from "../../../Features/gigs/gigsSlice";

export default function FilterTypes({ type, setDeliveryTime, setBudget }) {
  const [time, setTime] = useState("");
  const [tab, setTab] = useState(0);
  const [minprice, setMinPrice] = useState("");
  const [maxprice, setMaxPrice] = useState("");

  const handleCheckBox = (e) => {
    setTime(e.target.value);
  };
  const handleBestSelling = (value) => {
    setDeliveryTime(false);
    setTab(value);
  };
  const dispatch = useDispatch();
  const list = ["Express 24H", "Up to 3 Days"];

  const handlePrice = () => {
    dispatch(getMaxPrice(parseInt(maxprice)));
    dispatch(getMinPrice(parseInt(minprice)));
  };
  if (type === "selling") {
    return (
      <div>
        <div className="flex w-100 item-center justify-center gap-1">
          <div className="w-100 flex column">
            <label
              className="fs-18 flex w-100 py-1 gap-1 item-center text-dark"
              htmlFor="min"
              onClick={() => handleBestSelling(0)}
            >
              {tab === 0 ? (
                <BiCheck
                  style={{
                    width: "2rem",
                    height: "2rem",
                    color: "var(--dark-1)",
                  }}
                />
              ) : (
                <div
                  className="fs-18"
                  style={{
                    width: "1.4rem",
                    height: "1.4rem",
                    color: "var(--dark-1)",
                  }}
                ></div>
              )}{" "}
              Recommended
            </label>
            <label
              className="fs-18 flex w-100 py-1 gap-1 item-center text-dark"
              htmlFor="min"
              onClick={() => handleBestSelling(1)}
            >
              {tab === 1 ? (
                <BiCheck
                  style={{
                    width: "2rem",
                    height: "2rem",
                    color: "var(--dark-1)",
                  }}
                />
              ) : (
                <div
                  className="fs-18"
                  style={{
                    width: "2rem",
                    height: "2rem",
                    color: "var(--dark-1)",
                  }}
                ></div>
              )}{" "}
              Best Selling
            </label>
            <label
              className="fs-18 flex w-100 py-1 gap-1 item-center text-dark"
              htmlFor="min"
              onClick={() => handleBestSelling(2)}
            >
              {tab === 2 ? (
                <BiCheck
                  style={{
                    width: "2rem",
                    height: "2rem",
                    color: "var(--dark-1)",
                  }}
                />
              ) : (
                <div
                  className="fs-18"
                  style={{
                    width: "2rem",
                    height: "2rem",
                    color: "var(--dark-1)",
                  }}
                ></div>
              )}{" "}
              Newest Arrivals
            </label>
          </div>
        </div>
      </div>
    );
  }
  if (type === "budget") {
    return (
      <div>
        <div className="flex w-100 py-2 item-center justify-center gap-1">
          {/* min price */}
          <div className="w-100 flex family1 column gap-1">
            <label className="fs-12 family1 text-grey2" htmlFor="minprice">
              Min
            </label>
            <div className="w-100">
              <input
                type="number"
                id="minprice"
                placeholder="Any"
                value={minprice}
                name="minprice"
                onChange={(e) => setMinPrice(e.target.value)}
                className="input w-100 fs-14 family1 text-bold"
                style={{ border: "1px solid rgba(0,0,0,.08)", padding: "1rem" }}
              />
            </div>
          </div>
          {/* maximumn price */}
          <div className="w-100 flex family1 item-start column gap-1">
            <label className="fs-12 family1 text-grey2" htmlFor="max">
              max
            </label>
            <div className="w-100">
              <input
                type="number"
                id="max"
                placeholder="Any"
                value={maxprice}
                name="maxprice"
                onChange={(e) => setMaxPrice(e.target.value)}
                className="input w-100 fs-14 family1 text-bold"
                style={{ border: "1px solid rgba(0,0,0,.08)", padding: "1rem" }}
              />
            </div>
          </div>
        </div>
        <div className="bottom py-2 flex item-center gap-2 justify-center">
          <div
            className="contactBtn py-1 fs-14 family1"
            onClick={() => setBudget(false)}
          >
            Clear All
          </div>
          <div className="contactBtn py-1 fs-14 green family1" onClick={handlePrice}>Submit</div>
        </div>
      </div>
    );
  }
  if (type === "time") {
    return (
      <div>
        <div className="flex py-2 column gap-1">
          <Radio
            handleChange={handleCheckBox}
            valueList={list}
            value={time}
            option={time}
          />
          <div className="bottom py-2 flex item-center gap-2 justify-center">
            <div
              className="contactBtn py-1 fs-14 family1"
              onClick={() => setDeliveryTime(false)}
            >
              Clear All
            </div>
            <div className="contactBtn py-1 fs-14 green family1">Submit</div>
          </div>
        </div>
      </div>
    );
  }
  return <div>FilterTypes</div>;
}
