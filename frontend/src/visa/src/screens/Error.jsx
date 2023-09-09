import React from "react";
import { BiChevronRight, BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Meta } from "../components/common";

export default function Error() {
  return (
    <>
      <Meta title="Page not found - Classic vendor shop" />
      <div className="py-4">
        <div className="w-90 auto flex column gap-2">
          <h2 className="fs-35 text-extra-bold text-dark">
            Oops, This Page Could Not Be Found!
          </h2>
          <div
            className="w-100 grid grid-auto"
            style={{
              placeItems: "start",
              gridGap: "3rem",
            }}
          >
            <h1
              className="family1"
              style={{
                color: "rgb(240, 240, 240)",
                fontSize: "17rem",
                fontWeight: "700",
              }}
            >
              404
            </h1>
            <ul className="flex column gap-1">
              <h5 className="text-dark text-extra-bold fs-16">Helpful Links</h5>
              <div className="w-100 flex column gap-1">
                <Link to={"/"} className="w-100 flex item-center gap-1">
                  <div
                    className="flex item-center justify-center"
                    style={{
                      width: "3rem",
                      height: "3rem",
                      borderRadius: "50%",
                      background: "var(--primary)",
                    }}
                  >
                    <BiChevronRight
                      className="text-white fs-12"
                      style={{ color: "#fff" }}
                    />
                  </div>
                  <div className="fs-14 family1 text-bold text-dark">Home</div>
                </Link>
                <Link to={"/shop"} className="w-100 flex item-center gap-1">
                  <div
                    className="flex item-center justify-center"
                    style={{
                      width: "3rem",
                      height: "3rem",
                      borderRadius: "50%",
                      background: "var(--primary)",
                    }}
                  >
                    <BiChevronRight
                      className="text-white fs-12"
                      style={{ color: "#fff" }}
                    />
                  </div>
                  <div className="fs-14 family1 text-bold text-dark">Shop</div>
                </Link>
                <Link to={"/product"} className="w-100 flex item-center gap-1">
                  <div
                    className="flex item-center justify-center"
                    style={{
                      width: "3rem",
                      height: "3rem",
                      borderRadius: "50%",
                      background: "var(--primary)",
                    }}
                  >
                    <BiChevronRight
                      className="text-white fs-12"
                      style={{ color: "#fff" }}
                    />
                  </div>
                  <div className="fs-14 family1 text-bold text-dark">
                    Products
                  </div>
                </Link>
                <Link to={"/news"} className="w-100 flex item-center gap-1">
                  <div
                    className="flex item-center justify-center"
                    style={{
                      width: "3rem",
                      height: "3rem",
                      borderRadius: "50%",
                      background: "var(--primary)",
                    }}
                  >
                    <BiChevronRight
                      className="text-white fs-12"
                      style={{ color: "#fff" }}
                    />
                  </div>
                  <div className="fs-14 family1 text-bold text-dark">News</div>
                </Link>
              </div>
            </ul>
            <div className="w-100 flex column gap-1">
              <h5 className="fs-16 text-bold text-dark">Search Our Website</h5>
              <p
                className="fs-16 text-light text-grey family1"
                style={{ lineHeight: "1.8" }}
              >
                Can't find what you need? Take a moment and do a search below!
              </p>
              <div className="w-100 flex item-center">
                <input
                  type="text"
                  placeholder="Search..."
                  className="fs-14 w-100"
                  style={{
                    border: "1px solid rgba(0,0,0,.09)",
                    padding: "1.2rem 2rem",
                  }}
                />
                <button
                  className="btn flex item-center justify-center"
                  style={{
                    padding: "1.2rem 2rem",
                  }}
                >
                  <BiSearch className="fs-18 text-white"/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
