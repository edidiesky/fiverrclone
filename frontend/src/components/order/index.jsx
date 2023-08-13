import React, { useEffect } from "react";
import { BiChevronRight } from "react-icons/bi";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import {
  getCustomerOrderById,
  updateCustomersOrderToPaid,
} from "../../Features";

export default function OrderIndex() {
  let [searchParams, setSearchParams] = useSearchParams();
  const orderId = searchParams.get("orderId");
  const dispatch = useDispatch();
  const { order } = useSelector((store) => store.order);
  // console.log(order);

  let createddate = moment(order?.updatedAt);
  createddate = createddate.format("MMMM Do YYYY");
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(updateCustomersOrderToPaid(id));
  }, [id]);

  return (
    <div className="py-3 w-90 auto">
      {order?.map((x) => {
        return (
          <div className="py-4 w-90 auto flex column gap-1">
            {/* order number */}
            <div className="w-100 flex item-center gap-1">
              <div
                className="flex item-center justify-center"
                style={{
                  width: "1.8rem",
                  height: "1.8rem",
                  borderRadius: "50%",
                  background: "var(--green)",
                }}
              >
                <BiChevronRight
                  className="text-white fs-12"
                  style={{ color: "#fff" }}
                />
              </div>
              <div className="fs-18 text-light text-dark">
                Order number:{" "}
                <strong className="text-bold">{x?._id}</strong>
              </div>
            </div>

            {/* date */}
            <div className="w-100 flex item-center gap-1">
              <div
                className="flex item-center justify-center"
                style={{
                  width: "1.8rem",
                  height: "1.8rem",
                  borderRadius: "50%",
                  background: "var(--green)",
                }}
              >
                <BiChevronRight
                  className="text-white fs-12"
                  style={{ color: "#fff" }}
                />
              </div>
              <div className="fs-18 text-light text-dark">
                Date: <strong className="text-bold">{createddate}</strong>
              </div>
            </div>

            {/* total x price */}
            <div className="w-100 flex item-center gap-1">
              <div
                className="flex item-center justify-center"
                style={{
                  width: "1.8rem",
                  height: "1.8rem",
                  borderRadius: "50%",
                  background: "var(--green)",
                }}
              >
                <BiChevronRight
                  className="text-white fs-12"
                  style={{ color: "#fff" }}
                />
              </div>
              <div className="fs-18 text-light text-dark">
                Total:{" "}
                <strong className="text-bold">
                  ${x?.TotalShoppingPrice}
                </strong>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
