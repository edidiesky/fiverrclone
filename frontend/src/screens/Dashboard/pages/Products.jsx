import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getAllGigs, clearGigsAlert } from "../../../Features";
import { getUserId } from "../../../Features/gigs/gigsSlice";

import { useSelector, useDispatch } from "react-redux";
import { Pagination, TableCard, Topbar } from "../components";
import { Table } from "./styles";
import LoaderIndex from "../../../components/loaders/index";
import Message from "../../../components/modals/Message";
import Card from "../../../components/common/Card";
import { Link } from "react-router-dom";

export default function Products() {
  const dispatch = useDispatch();

  const {
    noOfPages,
    page,
    Gigs,
    gigsIsLoading,
    alertText,
    alertType,
    showAlert,
  } = useSelector((store) => store.gigs);
  const { userInfo } = useSelector((store) => store.user);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(getAllGigs());
  }, [page, userInfo?._id]);

  useEffect(() => {
    dispatch(clearGigsAlert());
    dispatch(getUserId(userInfo?._id));
    dispatch(getAllGigs());
  }, [userInfo?._id]);

  // clear the gigs alert
  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        dispatch(clearGigsAlert());
      }, 10000);
    }
  }, [showAlert]);

  // // Search functionality
  const [search, setSearch] = useState("");

  return (
    <>
      {gigsIsLoading && <LoaderIndex loading={gigsIsLoading} />}
      <Message
        alertText={"Your Customers have been succesfully gotten"}
        alertType={"success"}
      />

      <ProductsContainer className="flex column gap-3 ">
        <div className="w-100 flex column gap-3">
          <div className="flex w-100 item-center justify-space gap-2">
            <h2 className="family1 flex-1 fs-30 text-dark">Gigs</h2>
            <Link
              to={"/dashboard/create-gig"}
              className="headBtn fs-18 text-dark text-bold"
            >
              Create New Gigs
            </Link>
          </div>
          <div className="w-100">
            <Table>
              <div className="TableContainer">
                <table className="tableWrapper">
                  <thead>
                    <tr>
                      <th>Gig Id</th>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Status</th>
                      <th>Price</th>
                      <th>Count In Stock</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Gigs?.map((x) => {
                      return <TableCard x={x} key={x?._id} />;
                    })}
                  </tbody>
                </table>
              </div>
            </Table>
          </div>
          {noOfPages > 0 && <Pagination />}
        </div>
      </ProductsContainer>
    </>
  );
}

const ProductsContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-top: 3rem;
  .headBtn {
    border: 1px solid rgba(0, 0, 0, 0.4);
    padding: 1rem 2rem;
    border-radius: 40px;
    cursor: pointer;
    &:hover {
      background-color: #f7f7f7;
    }
  }
  h2 {
    font-size: 50px;
    font-weight: 700;
    @media (max-width: 480px) {
      font-size: 40px;
    }
    span {
      color: var(--green);
    }
  }
  .wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    grid-gap: 3rem;
  }
`;
