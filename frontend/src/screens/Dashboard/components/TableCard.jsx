import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";
import moment from "moment";
import Delete from "./DeleteModal";
import { FaTimes } from "react-icons/fa";
import { getGigs, getUser } from "../../../Features";
import { useSelector, useDispatch } from "react-redux";
import { MdEdit } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
export default function TableCards({ x, type }) {
  let createddate = moment(x?.createdAt);
  createddate = createddate.format("MMMM Do YYYY");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // delete product function
  const handleDeleteProduct = () => {
    dispatch(getGigs(x));
  };

  // Handling Order Navigation
  const handleOrderNav = () => {
    navigate(`/order/${x?._id}`);
  };

  // edit product function
  const handleEditProduct = () => {
    navigate(`/avada/dashboard/product/${x?._id}`);
  };

  // delete user function
  const handleDeleteUser = () => {
    dispatch(getUser(x));
  };

  // edit user function
  const handleEditUser = () => {
    navigate(`/avada/dashboard/users/${x?._id}`);
  };

  if (type === "users") {
    return (
      <>
        <Delete type="users" />
        <tr key={x?._id}>
          <td>{x?._id}</td>
          <td>{x?.firstname}</td>
          <td>{x?.lastname}</td>
          <td>{x?.email}</td>
          <td>{x?.country}</td>
          <td>
            {x?.isAdmin ? (
              <AiOutlineCheck className="true" />
            ) : (
              <FaTimes className="false" />
            )}
          </td>
          <td>
            <div className="action">
              <div className="icons" onClick={handleDeleteUser}>
                <BsTrash />
              </div>
              <div className="icons" onClick={handleEditUser}>
                <MdEdit />
              </div>
            </div>
          </td>
        </tr>
      </>
    );
  }
  if (type === "orders") {
    return (
      <tr key={x?._id}>
        <td>{x?._id}</td>
        <td>{createddate}</td>
        <td>
          {x?.createdBy?.firstname} {x?.createdBy?.lastname}
        </td>

        <td>${x?.TotalShoppingPrice}</td>
        <td>
          {x?.isPaid ? (
            <span className="tablespan true">Paid</span>
          ) : (
            <span className="tablespan false">Not Paid</span>
          )}
        </td>
        <td>
          {x?.isDelivered ? (
            <span className="tablespan true">Delivered</span>
          ) : (
            <span className="tablespan false">Not Delivered</span>
          )}
        </td>
        <td>
          <div className="action">
            <h4 className="details" onClick={handleOrderNav}>
              See Details
            </h4>
          </div>
        </td>
      </tr>
    );
  }

  if (type === "orders1") {
    return (
      <tr key={x?._id}>
        <td>{x?._id}</td>
        <td>{createddate}</td>
        <td>
          {x?.createdBy?.firstname} {x?.createdBy?.lastname}
        </td>
        <td>{x?.createdBy?.email}</td>
        <td>${x?.TotalShoppingPrice}</td>
        <td>
          <div className="action">
            <h4 className="details" onClick={handleOrderNav}>
              See Details
            </h4>
          </div>
        </td>
      </tr>
    );
  }
  return (
    <>
      <Delete />
      <tr key={x?._id}>
        <td>{x?._id}</td>
        <td>
          <div className="cartProduct">
            <div className="imageWrapper">
              {x?.image && <img src={x?.image[0]?.image} alt="images" />}
            </div>
          </div>
        </td>
        <td>{x?.title}</td>
        <td>${x?.price}</td>
        <td>{x?.countInStock}</td>
        <td>{x?.brand}</td>
        <td>
          <div className="action">
            <div className="icons" onClick={handleDeleteProduct}>
              <BsTrash />
            </div>
            <div className="icons" onClick={handleEditProduct}>
              <MdEdit />
            </div>
          </div>
        </td>
      </tr>
    </>
  );
}
