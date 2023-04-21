import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Header } from "../../components/common";
import Sidebar from "../../components/common/Sidebar";
export default function SellerLayout() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const container = document.querySelector(".Sellerlayout");
    const height = container.getBoundingClientRect().height;
    setHeight(height);
  }, []);

  return (
    <SellerLayoutContainer className="Sellerlayout" style={{ height }}>
        <Sidebar/>
        <Header type='seller'/>
      <Outlet />
    </SellerLayoutContainer>
  );
}

const SellerLayoutContainer = styled.div`
  width: 100%;
`;
