import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Pagination, Header, Topbar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "./styles";
import { getSellerOrder } from "../../../Features/order/orderReducer";
import TableCards from "../components/TableCard";
import LoaderIndex from "../../../components/loaders";

export default function Order() {
  const dispatch = useDispatch();
  const orderList = [
    {
      id: 1,
      name: "All Status",
    },
    {
      id: 2,
      name: "Pending",
    },
    {
      id: 3,
      name: "Paid",
    },
    {
      id: 4,
      name: "Cancelled",
    },
  ];

  const [tab, setTab] = useState(1);

   const { order, isLoading } = useSelector((store) => store.order);


  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(getSellerOrder());
  }, []);

  return (
    <>
      {isLoading && <LoaderIndex loading={isLoading} />}
      <OrderWrapper
        className="py-2 w-90 auto flex column gap-1"
        style={{ border: "1px solid rgba(0,0,0,.1)", margin: "2rem auto" }}
      >
        {order?.length === 0 ? (
          <div className="w-90 auto flex item-center justify-space">
            <h3 className="py-2 family1 text-bold text-dark">
              You have no orders
            </h3>
            <Link to={"/"} className="btn fs-18 text-dark">
              Go Back
            </Link>
          </div>
        ) : (
          <div className="w-100">
            <h3
              className="py-2 w-90 auto family1 text-bold text-dark"
              style={{ borderBottom: "1px solid rgba(0,0,0,.1)" }}
            >
              Transaction
            </h3>
            <div className="flex item-center w-90 auto flex item-start justify-space">
              <Table>
                <div className="TableContainer">
                  <div className="flex column gap-2 justify-space w-100 flex-wrap">
                    {/* <h3 className="fs-24 text-bold">Transaction History</h3> */}
                  </div>
                  <table className="tableWrapper">
                    <thead>
                      <tr>
                        <th>Customer</th>
                        <th>Gig Image</th>
                        <th>Gig Name</th>
                        <th>Date</th>
                        <th>Paid</th>
                        <th>Price</th>
                        <th>Estimated Tax</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order?.map((x) => {
                        return (
                          <TableCards type={"sellerorder"} x={x} key={x?._id} />
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                {/* {usernoOfpage > 0 && <Pagination type="users" />} */}
              </Table>
            </div>
          </div>
        )}
      </OrderWrapper>
    </>
  );
}

const OrderWrapper = styled.div`
border-radius:20px;
  .py-3 {
    padding: 0;
    @media (max-width: 480px) {
      padding: 2rem 0rem;
    }
  }
  .btn {
    padding: 1.3rem 2rem;
    background-color: #f7faf7 !important;
    color: var(--dark-1);
  }
  h3 {
    font-size: 30px;

    @media (max-width: 680px) {
      font-size: 2.4rem !important;
    }
  }
`;
