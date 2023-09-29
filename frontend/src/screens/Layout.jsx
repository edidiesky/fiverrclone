import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "../index.css";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import AuthModal from "../components/modals/AuthModal";
import { CartSidebar, Copyright, Footer } from "../components/common";
import Sidebar from "../components/common/Sidebar";
import Message from "../components/loaders/Message";
export default function Layout() {
  const [height, setHeight] = useState(0);
  const { authmodal } = useSelector((store) => store.user);


  useEffect(() => {
    const container = document.querySelector(".layout");
    const height = container.getBoundingClientRect().height;
    setHeight(height);
  }, []);

  return (
    <LayoutContainer className="layout" style={{ height }}>
       <AnimatePresence
        initial="false"
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {authmodal && <AuthModal/>}
      </AnimatePresence>
      <Outlet />
      <Message/>
      <Sidebar/>
      <CartSidebar/>
      <Copyright />
    </LayoutContainer>
  );
}

const LayoutContainer = styled.div`
  width: 100%;
  /* overflow:hidden; */
`;
