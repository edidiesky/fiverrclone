import React from "react";
import { BiLaugh } from "react-icons/bi";
import styled from "styled-components";
import Top from "./Top";

const converstionData = [
  {
    id: 1,
    senderMessage: [
      {
        image:
          "https://a0.muscache.com/im/pictures/user/9f63574d-3b11-44c5-937b-5a2eeef401db.jpg?im_w=240",
        text: "Hi Dear",
      },
    ],
    recieverMessage: [
      {
        image:
          "https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/56a09771086f0077fcfe38f13d80ff28-1639316525935/140c8b5f-0558-4460-8c47-c2ba3af3b736.jpg",
        text: "I am fine",
      },
      {
        image:
          "https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/56a09771086f0077fcfe38f13d80ff28-1639316525935/140c8b5f-0558-4460-8c47-c2ba3af3b736.jpg",
        text: "How was the wekend",
      },
    ],
  },
];

export default function Left({onsidebar,setOnSidebar}) {
  const LeftBottom = () => {
    return (
      <LeftBottomWrapper className="w-100 flex item-center justify-center">
        <div className="flex w-90 auto item-center justify-center gap-1">
          <textarea className="area flex item-center fs-16" placeholder="Type a message"></textarea>
          
        </div>
      </LeftBottomWrapper>
    );
  };

  const LeftTop = () => {
    return (
      <LeftTopWrapper className="w-100">
        <div className="w-100 column leftTopWrapper flex gap-2">
          {converstionData.map((x) => {
            return (
              <div className="flex ">
                <div className="chatCard flex w-100 item-start column gap-1">
                  {x.senderMessage.map((x) => {
                    return (
                      <div className="SenderChat flex py-2 item-center family1 text-light">
                        <div className="flex w-85 auto gap-1">
                          <img src={x.image} alt="" className="avatar" />
                          <div className="flex column" style={{ gap: "6px" }}>
                            <div
                              className="w-100 flex item-center"
                              style={{ gap: "2px" }}
                            >
                              <h4
                                className="fs-18"
                                style={{ fontWeight: "800" }}
                              >
                                Bookipy
                              </h4>
                              <h5
                                className="text-bold fs-10 text-grey"
                                style={{ fontSize: "11px" }}
                              >
                                1:17 AM
                              </h5>
                            </div>
                            <div className="w-100">
                              <h4 className="fs-16 text-dark text-light">
                                {x.text}
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  {x.recieverMessage.map((x) => {
                    return (
                      <div className="recieverChat flex py-2 item-center family1 text-light">
                        <div className="flex w-85 auto gap-1">
                          <img src={x.image} alt="" className="avatar" />
                          <div className="flex column" style={{ gap: "6px" }}>
                            <div
                              className="w-100 flex item-center"
                              style={{ gap: "2px" }}
                            >
                              <h4
                                className="fs-18"
                                style={{ fontWeight: "800" }}
                              >
                                Edidiong
                              </h4>
                              <h5
                                className="text-bold fs-10 text-grey"
                                style={{ fontSize: "11px" }}
                              >
                                1:17 AM
                              </h5>
                            </div>
                            <div className="w-100">
                              <h4 style={{fontSize:"16px",lineHeight:"1.4"}} className=" text-dark text-light">
                                Thank you for your message. How can we help you?
                                Please don't hesitate to contact us again should
                                you have any further requests or questions. Kind
                                regards, Fatlind - Bookiply Customer Happiness
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </LeftTopWrapper>
    );
  };
  return (
    <LeftIndexWrapper>
      <Top setOnSidebar={setOnSidebar} onsidebar={onsidebar}  />
      <LeftTop />
      <LeftBottom />
    </LeftIndexWrapper>
  );
}

const LeftTopWrapper = styled.div`
  width: 100%;
  height: 60%;
  overflow: auto;
  background-color: #fff;
  z-index: 300;
  .leftTopWrapper {
    padding: 2rem 0;
  }
  @media (max-width: 980px) {
    height: 82rem;
  }
  .avatar {
    border: 1.4px solid var(--blue-1);
    width: 2.5rem;
    height: 2.5rem;
  }
  .recieverChat {
    justify-content: flex-end;
    gap: 1.2rem;
    align-self: flex-end;
    position: relative;
  }
  .SenderChat,
  .recieverChat {
    padding: 1rem 0;
    width: 100%;
    border-radius: 10px;
    &:hover {
      background-color: #f2f2f2;
    }
    @media (max-width: 980px) {
      background-color: #fff;
      padding: 2rem 4rem;
    }
  }
  .chatCard {
    display: flex;
    display: flex;
    align-items: flex-start;
  }
`;
const LeftBottomWrapper = styled.div`
  width: 100%;
  height: 30%;
  background-color: #fff;
  z-index: 300;
  .area {
    /* margin-bottom: 4rem; */
    border: 1px solid rgba(0,0,0,.4);
    border-radius: 10px;
    padding:20px 30px;
    resize: none;
    /* padding-top: 4px; */
    height: 100%;
    width: 100%;
    font-family: inherit;
    height: 120px;
  }
  .icon {
    width: 4rem;
    height: 4rem;
    display: grid;
    place-items: center;
    &:hover {
      background-color: #f2f2f2;
    }
    svg {
      width: 70%;
      height: 70%;
      color: var(--grey-1);
    }
  }
`;

const LeftIndexWrapper = styled.div`
  width: 100%;
  position: relative;
`;
