import React, { useState } from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "../components/Header";
const LayoutWrapper = styled.div`
  background: var(--grey-4);
  min-height: 100vh;
  width: 100%;
  display: flex;
  .LayoutContainer {
    width: 100%;
    .OutletWrapper {
      width: 100%;
      padding-bottom: 3.5rem;
      @media (max-width: 980px) {
        transform: translateY(0);
        z-index: 9000;
      }
    }
  }
`;

export default function Layout() {
  return (
    <LayoutWrapper>
      <Sidebar />
      {/* <Header /> */}
      <div className="LayoutContainer">
        <div className="OutletWrapper">
          <Outlet />
        </div>
      </div>
    </LayoutWrapper>
  );
}
