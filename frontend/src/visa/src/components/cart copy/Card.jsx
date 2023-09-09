import React, { useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";
import { TiTimes } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { Delete } from "../modals";
import {
  removeBagItem,
  increaseBagQty,
  decreaseBagQty,
  onCartAlert,
} from "../../Features";

export default function Card({ x }) {
  const [deletemodal, setDeleteModal] = useState(false);

  const dispatch = useDispatch();

  const offDeleteModal = () => setDeleteModal(false);
  const handleRemoveBagItem = () => {
    dispatch(removeBagItem(x));
    setDeleteModal(false);
  };
  const increaseQty = (item) => {
    dispatch(increaseBagQty({ item }));
  };
  const decreaseQty = (item) => {
    dispatch(decreaseBagQty({ item }));
  };
  return (
    <tr key={x?._id}>
      <td>
        <div className="cartProduct flex item-center gap-2">
          <div className="imageWrapper">
            <img src={x?.image} alt="images" />
          </div>
          <h4 className="family1">{x.title}</h4>
        </div>
      </td>
      <td>{x?.country}</td>
      <td>{x?.price}</td>
      <td>
        <div className="w-100 flex">
          <div
            className="flex item-center qty1"
            style={{
              width: "12rem",
              margin: "0 auto",
              borderRadius: "40px",
              border: "1px solid rgba(0,0,0,.09)",
              height: "4rem",
            }}
          >
            <button
              className="flex item-center justify-center fs-16 text-light text-grey"
              style={{
                flex: "1",
                height: "100%",
                background: "transparent",
                border: "none",
                outline: "none",
                borderRight: "1px solid rgba(0,0,0,.09)",
              }}
              disabled={x?.quantity === x?.countInStock}
              onClick={() => dispatch(increaseBagQty(x))}
            >
              <BiPlus />
            </button>
            <h5
              className="flex item-center justify-center fs-16 text-light text-grey"
              style={{ flex: "1" }}
            >
              {x?.quantity && 1}
            </h5>
            <button
              className="flex item-center justify-center fs-16 text-light text-grey"
              style={{
                flex: "1",
                height: "100%",
                background: "transparent",
                border: "none",
                outline: "none",
                borderLeft: "1px solid rgba(0,0,0,.09)",
              }}
              disabled={x?.quantity <= 1}
              onClick={() => dispatch(decreaseBagQty(x))}
            >
              <BiMinus />
            </button>
          </div>
        </div>
      </td>
      <td className="title">{x?.price * x?.quantity}</td>
      <td className="svg">
        <div className="iconsWrapper" onClick={() => dispatch(removeBagItem(x))}>
          <TiTimes />
        </div>
      </td>
    </tr>
  );
}
