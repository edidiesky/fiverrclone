import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
// import {
//   getAllProduct,
//   handleProductSearch,
//   clearProductAlert,
//   clearProductDetails,
// } from "../../../Features";
import { useSelector, useDispatch } from "react-redux";
import { Header, TableCard, Topbar } from "../components";
import { Table } from "./styles";
import Message from "../../../components/loaders/Message";
import LoaderIndex from "../../../components/loaders/index";
import { projectData } from "../../../data";

export default function Products() {
  // const dispatch = useDispatch();

  // const {
  //   noOfPages,
  //   page,
  //   product,
  //   isLoading,
  //   isError,
  //   alertText,
  //   alertType,
  //   isSuccess,
  //   showAlert,
  // } = useSelector((store) => store.product);

  // useEffect(() => {
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  //   dispatch(getAllProduct());
  // }, [page]);

  // // clear the product alert
  // // useEffect(() => {
  // // 	if (showAlert) {
  // // 	  setTimeout(() => {
  // // 		dispatch(clearProductAlert());
  // // 	  }, 10000);
  // // 	}
  // //   }, [showAlert]);

  // // Search functionality
  // const [search, setSearch] = useState("");

  // useEffect(() => {
  //   dispatch(clearProductDetails());
  //   dispatch(handleProductSearch(search));
  //   if (!search) {
  //     dispatch(getAllProduct());
  //   }
  // }, [search]);

  return (
    <>
      {/* <Alert
        showAlert={showAlert}
        alertText={alertText}
        alertType={alertType}
        handleClearAlert={clearProductAlert}
      /> */}
      {/* {isLoading && <LoaderIndex loading={isLoading} />} */}
      {/* <Header type={"product"} /> */}
      <Topbar />

      <ProductsContainer className="flex column gap-3 ">
        <div className="w-100 flex column gap-3">
          <h2 className="family1 flex-1 fs-30 text-dark">Gigs</h2>
          <Table>
            {/* {isSuccess && (
            <Message
              alertText={"Your Customers have been succesfully gotten"}
              alertType={"success"}
            />
          )} */}

            <div className="TableContainer">
              <table className="tableWrapper">
                <thead>
                  <tr>
                    <th>No.</th>
                    {/* <th>Image</th> */}
                    <th>Name</th>
                    <th>Price</th>
                    <th>CountInStock</th>
                    <th>Brand</th>
                    <th>Actions</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {product?.map((x) => {
                  return <TableCard x={x} key={x?._id} />;
                })} */}
                  {projectData?.slice(0, 3).map((x) => {
                    return <TableCard x={x} key={x?._id} />;
                  })}
                </tbody>
              </table>
            </div>
            {/* {noOfPages > 0 && <Pagination />} */}
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
