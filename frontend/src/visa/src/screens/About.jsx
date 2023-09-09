import React, { useEffect } from "react";
import styled from "styled-components";
import AboutIndex from "../components/about";
import { Meta } from "../components/common";

export default function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Meta title={"About Us"} />
      <AboutContainer>
        <AboutIndex />
      </AboutContainer>
    </>
  );
}

const AboutContainer = styled.div`
  width: 100%;
  overflow: hidden;
  min-height: 100vh;
  margin: 0;
  padding: 0;
`;
