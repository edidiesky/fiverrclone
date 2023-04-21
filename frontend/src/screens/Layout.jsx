import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { CartSidebar, Copyright, Footer } from "../components/common";
import Sidebar from "../components/common/Sidebar";
export default function Layout() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const container = document.querySelector(".layout");
    const height = container.getBoundingClientRect().height;
    setHeight(height);
  }, []);

  return (
    <LayoutContainer className="layout" style={{ height }}>
      <Outlet />
      <Sidebar/>
      <Footer />
      <CartSidebar/>
      <Copyright />
    </LayoutContainer>
  );
}

const LayoutContainer = styled.div`
  width: 100%;
`;
