import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import {
  TableList,
  Alert,
  Pagination,
  Header,
  TableCard,
  Links,
} from "../components";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "./styles";
import {
  handleUserSearch,
  getAllCustomer,
  clearUserAlertError,
} from "../../../Features";
import Message from "../../../components/loaders/Message";
import LoaderIndex from "../../../components/loaders/index";

export default function Customers() {
  // getting the userinfo

  // user's state
  const {
    isLoading,
    users,
    isError,
    isSuccess,
    alertType,
    alertText,
    userpage,
    totalUser,
    usernoOfpage,
    showAlert,
  } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(getAllCustomer());
  }, [userpage]);

  useEffect(() => {
    if (showAlert || isError) {
      setTimeout(() => {
        dispatch(clearUserAlertError());
      }, 4000);
    }
  }, [showAlert]);

  // Search functionality
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(handleUserSearch(search));
    if (!search) {
      dispatch(getAllCustomer());
    }
  }, [search]);

  return (
    <>
      {isLoading && <LoaderIndex loading={isLoading} />}
      <Header
        text={"My Customers"}
        subtext={"Here is what is happening with your Customers today"}
      />
      <CustomersContainer>
        {isError && (
          <Message
            alertText={alertText}
            handleClearAlert={clearUserAlertError}
            alertType={alertType}
          />
        )}
        <Table>
          <div className="TableTop">
            <div className="TableTopRight">
              <h3>Customers List </h3>
            </div>
            <div className="TableTopLeft">
              <form>
                <FaSearch />
                <input
                  type="text"
                  placeholder="Search for Customers"
                  name="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </form>
            </div>
          </div>
          <div className="TableContainer">
            <table className="tableWrapper">
              <thead>
                <tr>
                  <th>Customers Id</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Country</th>
                  <th>Phone</th>
                  <th>isAdmin</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users?.map((x) => {
                  return <TableCard x={x} key={x?._id} type="users" />;
                })}
              </tbody>
            </table>
          </div>
          {usernoOfpage > 0 && <Pagination type="users" />}
        </Table>
      </CustomersContainer>
    </>
  );
}

const CustomersContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  padding-top: 3rem;
`;
