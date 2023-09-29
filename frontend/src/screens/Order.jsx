import React, { useEffect } from "react";
import { Header, Meta } from "../components/common";
import styled from "styled-components";
import { Table } from "./Dashboard/pages/styles";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useParams } from "react-router-dom";
import { updateCustomersOrderToPaid } from "../Features";
import TableCards from "./Dashboard/components/TableCard";

export default function Order() {
  const dispatch = useDispatch();
const { id } = useParams();
  useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

   dispatch(updateCustomersOrderToPaid(id));
  }, [id]);

    const { order } = useSelector((store) => store.order);
    let createddate = moment(order?.updatedAt);
    createddate = createddate.format("MMMM Do YYYY");
    
  return (
    <>
      <Meta title={"My Orders"} />
      {/* <Banner1/> */}
      {/* <Banner title="Order Success" /> */}
      <Header />

      <OrderWrapper
        className="py-2 w-90 auto flex column gap-1"
        style={{ border: "1px solid rgba(0,0,0,.1)", margin: "2rem auto" }}
      >
        <h3
          className="py-2 w-90 auto family1 text-bold text-dark"
          style={{ borderBottom: "1px solid rgba(0,0,0,.1)" }}
        >
          Transaction History.
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
                    return <TableCards type={"order"} x={x} key={x?._id} />;
                  })}
                </tbody>
              </table>
            </div>
            {/* {usernoOfpage > 0 && <Pagination type="users" />} */}
          </Table>
        </div>
      </OrderWrapper>
    </>
  );
}

const OrderWrapper = styled.div`
  border-radius: 20px;

  .py-3 {
    padding: 0;
    @media (max-width: 480px) {
      padding: 2rem 0rem;
    }
  }
  h3 {
    font-size: 24px;

    @media (max-width: 680px) {
      font-size: 2.4rem !important;
    }
  }
`;
