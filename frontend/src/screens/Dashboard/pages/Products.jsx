import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import {
  getAllProduct,
  handleProductSearch,
  clearProductAlert,
  clearProductDetails,
} from "../../../Features";
import { TableList, Pagination, Header } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { TableCard, Links, Alert } from "../components";
import { Table } from "./styles";
import Message from "../../../components/loaders/Message";
import LoaderIndex from "../../../components/loaders/index";

export default function Products() {
  const dispatch = useDispatch();

  const {
    noOfPages,
    page,
    product,
    isLoading,
    isError,
    alertText,
    alertType,
    isSuccess,
    showAlert,
  } = useSelector((store) => store.product);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(getAllProduct());
  }, [page]);

  // clear the product alert
  // useEffect(() => {
  // 	if (showAlert) {
  // 	  setTimeout(() => {
  // 		dispatch(clearProductAlert());
  // 	  }, 10000);
  // 	}
  //   }, [showAlert]);

  // Search functionality
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(clearProductDetails());
    dispatch(handleProductSearch(search));
    if (!search) {
      dispatch(getAllProduct());
    }
  }, [search]);

  return (
    <>
      <Alert
        showAlert={showAlert}
        alertText={alertText}
        alertType={alertType}
        handleClearAlert={clearProductAlert}
      />
      {isLoading && <LoaderIndex loading={isLoading} />}
      <Header
        text={"My Products"}
        subtext={"Here is what is happening with your products today"}
      />
      <ProductsContainer>
        <Table>
          {isSuccess && (
            <Message
              alertText={"Your Customers have been succesfully gotten"}
              alertType={"success"}
            />
          )}
          <div className="TableTop">
            <div className="TableTopRight">
              <h3>Product List </h3>
            </div>
            <div className="TableTopLeft">
              <form>
                <FaSearch />
                <input
                  type="text"
                  placeholder="Search for product"
                  name="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </form>
              <Link to={"create-product"} className="addBtn">
                Add Product
              </Link>
            </div>
          </div>
          <div className="TableContainer">
            <table className="tableWrapper">
              <thead>
                <tr>
                  <th>Product id</th>
                  <th>Product Image</th>
                  <th>Product Name</th>
                  <th>Product Price</th>
                  <th>Product CountInStock</th>
                  <th>Product Brand</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {product?.map((x) => {
                  return <TableCard x={x} key={x?._id} />;
                })}
              </tbody>
            </table>
          </div>
          {noOfPages > 0 && <Pagination />}
        </Table>
      </ProductsContainer>
    </>
  );
}

const ProductsContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  padding-top: 3rem;
`;
