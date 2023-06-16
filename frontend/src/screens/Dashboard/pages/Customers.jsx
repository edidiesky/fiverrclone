import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Pagination, TableCard, Topbar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "./styles";
import {
  handleUserSearch,
  getAllCustomer,
  clearUserAlertError,
} from "../../../Features";
import Message from "../../../components/loaders/Message";
import LoaderIndex from "../../../components/loaders/index";
import userData from "../../../data/userdata";

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

  // useEffect(() => {
  //   if (showAlert || isError) {
  //     setTimeout(() => {
  //       dispatch(clearUserAlertError());
  //     }, 4000);
  //   }
  // }, [showAlert]);

  // Search functionality
  const [search, setSearch] = useState("");

  // useEffect(() => {
  //   dispatch(handleUserSearch(search));
  //   if (!search) {
  //     dispatch(getAllCustomer());
  //   }
  // }, [search]);

  return (
    <>
      {isLoading && <LoaderIndex loading={isLoading} />}

      <Topbar />
      <CustomersContainer className="flex column gap-2">
        {/* {isError && (
          <Message
            alertText={alertText}
            handleClearAlert={clearUserAlertError}
            alertType={alertType}
          />
        )} */}
        <h2 className="family1 flex-1 fs-30 text-dark">Customers</h2>

        <Table>
          {/* <div className="TableTop">
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
          </div> */}
          <div className="TableContainer">
            <table className="tableWrapper">
              <thead>
                <tr>
                  <th>Customers Id</th>
                  <th>Username</th>
                  <th>Country</th>
                  <th>Phone</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users?.map((x) => {
                  return <TableCard x={x} key={x?._id} type="users" />;
                })}
                {/* {userData?.slice(0,4).map((x) => {
                  return <TableCard x={x} key={x?._id} type="users" />;
                })} */}
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
