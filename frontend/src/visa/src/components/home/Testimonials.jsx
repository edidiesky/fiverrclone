import React from "react";
import styled from "styled-components";


export default function Testimonials() {
  return (
    <TestimonialsContent>
      <div className="container">
        <div className="icon">
          <img src="img/logos/logo-8.png" alt style={{ maxWidth: "90px" }} />
        </div>
        <div className="icon">
          <img src="img/logos/logo-9.png" alt style={{ maxWidth: "140px" }} />
        </div>
        <div className="icon">
          <img src="img/logos/logo-10.png" alt style={{ maxWidth: "140px" }} />
        </div>
        <div className="icon">
          <img src="img/logos/logo-11.png" alt style={{ maxWidth: "140px" }} />
        </div>
        <div className="icon">
          <img src="img/logos/logo-12.png" alt style={{ maxWidth: "100px" }} />
        </div>
        <div className="icon">
          <img src="img/logos/logo-13.png" alt style={{ maxWidth: "100px" }} />
        </div>
      </div>
    </TestimonialsContent>
  );
}

const TestimonialsContent = styled.div`
  width: 100%;
  .container {
    display: grid;
    padding: 10rem 0;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    grid-row-gap: 8rem;
    .icon {
      flex: 1;
    }
  }
`;
