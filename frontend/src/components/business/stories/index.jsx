import React from "react";
import styled from "styled-components";

export default function StoriesIndex() {
  const TopStories = () => {
    return (
      <div className="w-100 flex column gap-2 item-center">
        <h2 className="fs-40 text-center text-bold text-dark">
          Access a catalog of verified, trusted talent
          <div className="fs-14 text-light text-grey">
            Expand your team as needed with experienced freelancers already
            vetted for business projects.
          </div>
        </h2>
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F1269a57212df4631b866219ba2013fa8%2Feb395dc6092e4fe692d4c516d4d9e471?format=webp&width=2000"
          alt=""
          className="w-100"
        />
      </div>
    );
  };
  const TopStories3 = () => {
    return (
      <div className="w-100 py-6 grid grid-3 grid-gap4">
        <h3 className="fs-30 w-85 auto text-start text-bold text-dark">
          Finding the right talent? Leave that to us
          <div className="fs-14 text-light text-grey">
            Collaborate with your team, manage projects, and share freelancers -
            all in one workspace.
          </div>
        </h3>
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F1269a57212df4631b866219ba2013fa8%2F65bab57757d44a32843ca3102639a5a8?format=webp&width=2000"
          alt=""
          className="w-100"
        />
      </div>
    );
  };
  const TopStories2 = () => {
    return (
      <div className="w-100 py-6 grid grid-2 grid-gap4">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F1269a57212df4631b866219ba2013fa8%2F71098c3cbb80478aadccd1b0f918fe21?format=webp&width=2000"
          alt=""
          className="w-100"
        />
        <h3 className="fs-30 w-85 auto text-start text-bold text-dark">
          Finding the right talent? Leave that to us
          <div className="fs-14 text-light text-grey">
            A team of Fiverr Business Success Managers is here to help match you
            with the best talent for your team - no need for endless guessing
            and interviews.
          </div>
        </h3>
      </div>
    );
  };
  return (
    <StoryContent className="w-85 auto">
      <TopStories />
      <TopStories3 />
      <TopStories2 />
    </StoryContent>
  );
}

const StoryContent = styled.div`
  .grid-2 {
    grid-template-columns: 1fr 35vw;
    place-items: center;
    
    h3 {
      @media (max-width:780px) {
        text-align: center;
      }
    }
    @media (max-width:780px) {
      grid-template-columns:1fr;
    }
  }
  .grid-3 {
    grid-template-columns: 35vw 1fr;
    place-itemcenters
    h3 {
      @media (max-width:780px) {
        text-align: center;
      }
    }
    @media (max-width:780px) {
      grid-template-columns:1fr;
    }
  }
`;
