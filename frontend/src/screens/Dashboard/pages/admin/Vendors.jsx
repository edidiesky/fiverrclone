import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Alert, Pagination, Header, TableCard } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "../styles";
// import {
//   handleUserSearch,
//   getAllCustomer,
//   clearUserAlertError,
// } from "../../../../Features";
import Message from "../../../../components/loaders/Message";
import LoaderIndex from "../../../../components/loaders/index";

export default function Vendors() {
  // user's state
  // const {
  //   isLoading,
  //   users,
  //   isError,
  //   isSuccess,
  //   alertType,
  //   alertText,
  //   userpage,
  //   totalUser,
  //   usernoOfpage,
  //   showAlert,
  // } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  //   dispatch(getAllCustomer());
  // }, [userpage]);

  // useEffect(() => {
  //   if (showAlert || isError) {
  //     setTimeout(() => {
  //       dispatch(clearUserAlertError());
  //     }, 4000);
  //   }
  // }, [showAlert]);

  const users = [
    {
      lastname: "Boram",
      email: "  ",
      phone: "612 484 7315",
      firstname: "Rora",
      address: "3449 Northland Alley",
      country: "Guatemala",
      postalCode: "16005",
      createdAt: "8/6/2022",

      isAdmin: true,
    },
    {
      lastname: "McRobert",
      email: "emcrobert1@yolasite.com",
      phone: "639 404 8339",
      firstname: "Edin",
      address: "58 Merrick Parkway",
      country: "France",
      state: "Nord-Pas-de-Calais",
      postalCode: "59652 CEDEX",
      createdAt: "8/12/2022",

      isAdmin: false,
    },
    {
      lastname: "Hagger",
      email: "chagger2@cisco.com",
      phone: "961 720 3412",
      firstname: "Constantine",
      address: "14 Huxley Crossing",
      country: "Bangladesh",
      postalCode: "9330",
      createdAt: "12/17/2022",

      isAdmin: false,
    },
  ];
  return (
    <>
      {/* {isSuccess && <Message alertText={alertText} alertType={alertType} />}
      {isLoading && <LoaderIndex loading={isLoading} />} */}
      {/* <Header
        text={"My Vendors"}
        subtext={"Here is what is happening with your Vendors today"}
      /> */}
      <VendorsContainer className="flex column gap-2">
        <h3 className="fs-26 text-bold text-dark">
          Vendors List
          <span className="fs-16 family1 text-light block text-grey py-1">
            Managing our vendors
          </span>
        </h3>
        {/* {isError && <Message alertText={alertText} alertType={alertType} />} */}
        <Table className="shadow">
          <div className="TableContainer">
            <table className="tableWrapper">
              <thead>
                <tr>
                  <th>Vendors Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Country</th>
                  <th>Phone</th>
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
          {/* {usernoOfpage > 0 && <Pagination type="users" />} */}
        </Table>
      </VendorsContainer>
    </>
  );
}

const VendorsContainer = styled.div`
  width: 95%;
  margin: 0 auto;
`;
