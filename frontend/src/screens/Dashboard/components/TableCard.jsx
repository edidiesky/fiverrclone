import React from "react";
import { GiSandsOfTime } from "react-icons/gi";
import { AnimatePresence } from "framer-motion";
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
  let order_gig = x;
  const { deleteGigModalAlert, GigsDetails } = useSelector(
    (store) => store.gigs
  );
  const { userAlert } = useSelector((store) => store.user);
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
    navigate(`/dashboard/create-gig/${x?._id}`);
  };

  // delete user function
  const handleDeleteUser = () => {
    dispatch(getUser(x));
  };

  // edit user function
  const handleEditUser = () => {
    navigate(`/dashboard/users/${x?._id}`);
  };

  if (type === "users") {
    return (
      <>
        {/* <Delete type="users" /> */}
        <AnimatePresence
          initial="false"
          exitBeforeEnter={true}
          onExitComplete={() => null}
        >
          {userAlert && <Delete type={"users"} />}
        </AnimatePresence>
        <tr key={x?._id}>
          <td>{x?._id}</td>
          <td>
            <div className="flex fs-12 text-bold item-center gap-2">
              <img src={x.image} alt="" className="avatar" />
              {x?.username}
            </div>
          </td>
          <td>{x?.email}</td>
          <td>{x?.country}</td>
          <td>
            <h5
              className={
                x?.role === "seller"
                  ? "fs-12 text-bold capitalize seller"
                  : x?.role === "admin"
                  ? "fs-12 text-bold capitalize admin"
                  : "fs-12 text-bold capitalize "
              }
            >
              {x?.role}
            </h5>
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
  if (type === "order") {
    return (
      <>
        {/* <Delete type="users" /> */}
        <AnimatePresence
          initial="false"
          exitBeforeEnter={true}
          onExitComplete={() => null}
        >
          {/* {userAlert && <Delete type={"users"} />} */}
        </AnimatePresence>
        {x?.cart_items?.map((gig) => {
          let createddate = moment(gig?.createdAt);
          createddate = createddate.format("MMMM Do YYYY");
          return (
            <tr key={gig?._id}>
              <td>
                <div className="flex item-center justify-center gap-1">
                  <div
                    style={{ width: "11rem", borderRadius: "10px" }}
                    className="flex detailsImageWrapper justify-center "
                  >
                    <div className="w-100 image">
                      {/* {gig?.image?.map((x) => {
                        return <img src={x} alt="" className="radius1 w-100" />;
                      })} */}
                      <img
                        src={gig?.image[0]}
                        alt=""
                        className="radius1 w-100"
                      />
                    </div>
                  </div>
                  <h4 className="fs-16 text-start text-bold text-dark">
                    {gig?.title}
                    <span className="block fs-12 text-grey">{gig?._id}</span>
                  </h4>
                </div>
              </td>
              <td>
                <div className="flex column">
                  <h4 className="fs-14 text-bold text-dark">{createddate}</h4>
                </div>
              </td>
              <td>{x?.isPaid === true ? "Paid" : "Not paid"}</td>
              <td>
                <h4 className="fs-16 text-extra-bold">${gig?.price}</h4>
              </td>
              <td>${x?.estimatedTax}</td>
              <td>{x?.status}</td>
            </tr>
          );
        })}
      </>
    );
  }

  return (
    <>
      <AnimatePresence
        initial="false"
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {deleteGigModalAlert && <Delete />}
      </AnimatePresence>
      <tr key={x?._id}>
        <td>{x?._id}</td>
        <td>
          <div className="cartProduct">
            <div
              style={{ width: "7rem", borderRadius: "10px", height: "5rem" }}
              className="flex"
            >
              <img
                style={{ borderRadius: "10px" }}
                src={x?.image[0]}
                className="w-100"
                alt=""
              />
            </div>
          </div>
        </td>
        <td>{x?.title}</td>
        <td>
          <div className="flex item-center justify-center">
            <div className="headBtn text-dark">Finish</div>
          </div>
        </td>
        <td>${x?.price}</td>
        <td>{x?.countInStock}</td>
        {/* <td>{x?.brand}</td> */}
        <td>
          <div className="action flex item-center justify-center">
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
