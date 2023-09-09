import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import {Footer, Header, Sidebar, Testimonials } from "../components/common";



export default function Layout() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const container = document.querySelector(".layout");
    const height = container.getBoundingClientRect().height;
    setHeight(height);
  }, []);

  return (
    <LayoutContainer className="layout" style={{ height }}>
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
      <Sidebar />
      <Footer />
      <Header type="passport" />
    </LayoutContainer>
  );
}

const LayoutContainer = styled.div`
  width: 100%;
  min-height:100vh;
`;
