import React, { useState } from "react";
import { CustomizedCheckbox, Radio } from "../../forms";
import { BiCheck } from "react-icons/bi";

export default function FilterTypes({ type, setDeliveryTime }) {
  const [time, setTime] = useState("");
  const [tab, setTab] = useState(0);
  const handleCheckBox = (e) => {
    setTime(e.target.value);
  };
  const handleBestSelling = (value)=> {
    setDeliveryTime(false)
    setTab(value)
  }
  const list = ["Express 24H", "Up to 3 Days"];
  if (type === "selling") {
    return (
      <div>
        <div className="flex w-100 item-center justify-center gap-1">
          <div className="w-100 flex column gap-1">
            <label
              className="fs-14 flex w-100 py-1 gap-1 item-center text-dark"
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
              className="fs-14 flex w-100 py-1 gap-1 item-center text-dark"
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
              className="fs-14 flex w-100 py-1 gap-1 item-center text-dark"
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
          <div className="w-100 flex family1 column gap-1">
            <label className="fs-12 family1 text-grey2" htmlFor="min">
              Min
            </label>
            <div className="w-100">
              <input
                type="text"
                id="min"
                placeholder="Any"
                className="input w-100 fs-14 family1 text-bold"
                style={{ border: "1px solid rgba(0,0,0,.08)", padding: "1rem" }}
              />
            </div>
          </div>
          <div className="w-100 flex family1 item-start column gap-1">
            <label className="fs-12 family1 text-grey2" htmlFor="max">
              max
            </label>
            <div className="w-100">
              <input
                type="text"
                id="max"
                placeholder="Any"
                className="input w-100 fs-14 family1 text-bold"
                style={{ border: "1px solid rgba(0,0,0,.08)", padding: "1rem" }}
              />
            </div>
          </div>
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
        </div>
      </div>
    );
  }
  return <div>FilterTypes</div>;
}
