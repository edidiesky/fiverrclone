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
                <div
                  style={{ width: "7rem", borderRadius: "10px" }}
                  className="flex detailsImageWrapper justify-center "
                >
                  <div className="image">
                    {/* {gig?.image?.map((x) => {
                        return <img src={x} alt="" className="radius1 w-100" />;
                      })} */}
                    <img src={gig?.image[0]} alt="" className="radius1 w-100" />
                  </div>
                </div>
              </td>
              <td>
                <h4 className="fs-16 text-center text-bold text-dark">
                  {gig?.title}
                  <span className="block fs-15 text-grey">{gig?._id}</span>
                </h4>
              </td>

              <td>
                <div className="flex column">
                  <h4 className="fs-16 text-bold text-dark">{createddate}</h4>
                </div>
              </td>
              <td>
                <div className="flex fs-16 item-center">
                  <div
                    className={x?.isPaid === false ? "status active" : "status"}
                  >
                    {x?.isPaid === true ? "Paid" : "Not paid"}
                  </div>
                </div>
              </td>
              <td>
                <h4 className="fs-16 text-extra-bold">${gig?.price}</h4>
              </td>
              <td>${x?.estimatedTax}</td>
              <td>
                <div className="flex fs-16 item-center">
                  <div
                    className={
                      x?.status === "Pending" ? "status active" : "status"
                    }
                  >
                    {x?.status}
                  </div>
                </div>
              </td>
            </tr>
          );
        })}
      </>
    );
  }

  // sellers order
  if (type === "sellerorder") {
    return (
      <tr key={x?._id}>
        <td>
          <div style={{ gap: "7px" }} className="flex item-center">
            <div
              style={{ width: "4rem", height: "4rem", borderRadius: "50%" }}
              className="flex detailsImageWrapper justify-center "
            >
              <div className="image h-100 w-100 absolute">
                <img
                  src={x?.buyer_Id?.image}
                  alt=""
                  className="radius1 w-100 h-100"
                  style={{ borderRadius: "50%", objectFit: "cover" }}
                />
              </div>
            </div>
            <h4 className="fs-16 text-start text-extra-bold">
              {x?.buyer_Id?.name}
              <span className="block text-bold fs-12 text-grey family2">
                {x?.buyer_Id?.email.substring(0, 24)} ....
              </span>
            </h4>
          </div>
        </td>
        <td>
          <div
            style={{ width: "7rem", borderRadius: "10px" }}
            className="flex detailsImageWrapper justify-center "
          >
            <div className="image">
              {/* {x?.image?.map((x) => {
                        return <img src={x} alt="" className="radius1 w-100" />;
                      })} */}
              <img
                src={x?.cart_items[0]?.image[0]}
                alt=""
                className="radius1 w-100"
              />
            </div>
          </div>
        </td>
        <td>
          <h4 className="fs-16 text-start text-bold text-dark">
            {x?.cart_items[0]?.title?.substring(0, 36)} ...
            <span className="block fs-16 family2 text-grey">{x?._id}</span>
          </h4>
        </td>

        <td>
          <div className="flex column">
            <h4 className="fs-16 text-bold text-dark">{createddate}</h4>
          </div>
        </td>
        <td>
          <div className="flex fs-16 item-center">
            <div className={x?.isPaid === false ? "status active" : "status"}>
              {x?.isPaid === true ? "Paid" : "Not paid"}
            </div>
          </div>
        </td>
        <td>
          <h4 className="fs-16 text-extra-bold">${x?.cart_items[0]?.price}</h4>
        </td>
        <td>${x?.estimatedTax}</td>
        <td>
          <div className="flex fs-16 item-center">
            <div
              className={x?.status === "Pending" ? "status active" : "status"}
            >
              {x?.status}
            </div>
          </div>
        </td>
      </tr>
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
