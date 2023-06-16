import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getAllGigs, clearGigsAlert } from "../../../Features";
import { useSelector, useDispatch } from "react-redux";
import { Pagination, TableCard, Topbar } from "../components";
import { Table } from "./styles";
import LoaderIndex from "../../../components/loaders/index";
import Message from "../../../components/modals/Message";

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

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(getAllGigs());
  }, [page]);

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
      <Topbar />
      <Message
        alertText={"Your Customers have been succesfully gotten"}
        alertType={"success"}
      />

      <ProductsContainer className="flex column gap-3 ">
        <div className="w-100 flex column gap-3">
          <h2 className="family1 flex-1 fs-30 text-dark">Gigs</h2>
          <Table>
            <div className="TableContainer">
              <table className="tableWrapper">
                <thead>
                  <tr>
                    <th>No.</th>
                    {/* <th>Image</th> */}
                    <th>Image</th>
                    <th>description</th>
                    <th>Price</th>
                    <th>CountInStock</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {Gigs?.map((x) => {
                    return <TableCard x={x} key={x?._id} />;
                  })}
                </tbody>
              </table>
            </div>
            {noOfPages > 0 && <Pagination />}
          </Table>
        </div>
      </ProductsContainer>
    </>
  );
}

const ProductsContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-top: 3rem;
`;
