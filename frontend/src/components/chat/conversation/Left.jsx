import React from "react";
import { BiLaugh } from "react-icons/bi";
import styled from "styled-components";

const converstionData = [
  {
    id: 1,
    senderMessage: [
      {
        image:
          "/images/johanna-richardson.jpg",
        text: "Hi Dear",
      },
      {
        image:
          "/images/johanna-richardson.jpg",
        text: "How was your day",
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
  {
    id: 1,
    senderMessage: [
      {
        image:
          "/images/johanna-richardson.jpg",
        text: "Hi Dear",
      },
      {
        image:
          "/images/johanna-richardson.jpg",
        text: "How was your day",
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
  {
    id: 1,
    senderMessage: [
      {
        image:
          "/images/johanna-richardson.jpg",
        text: "Hi Dear",
      },
      {
        image:
          "/images/johanna-richardson.jpg",
        text: "How was your day",
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
  {
    id: 1,
    senderMessage: [
      {
        image:
          "/images/johanna-richardson.jpg",
        text: "Hi Dear",
      },
      {
        image:
          "/images/johanna-richardson.jpg",
        text: "How was your day",
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
  {
    id: 1,
    senderMessage: [
      {
        image:
          "/images/johanna-richardson.jpg",
        text: "Hi Dear",
      },
      {
        image:
          "/images/johanna-richardson.jpg",
        text: "How was your day",
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
  {
    id: 1,
    senderMessage: [
      {
        image:
          "/images/johanna-richardson.jpg",
        text: "Hi Dear",
      },
      {
        image:
          "/images/johanna-richardson.jpg",
        text: "How was your day",
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

export default function Left() {
  const LeftBottom = () => {
    return (
      <LeftBottomWrapper className="w-100">
        <div className="flex w-90 auto column gap-1">
          <textarea className="area"></textarea>
          <div className="w-100 flex item-center justify-space">
            <div className="icon">
              <BiLaugh />
            </div>
            <button className="send">SEND</button>
          </div>
        </div>
      </LeftBottomWrapper>
    );
  };

  const LeftTop = () => {
    return (
      <LeftTopWrapper className="w-100">
        <div className="w-100 column flex gap-2">
          {converstionData.map((x) => {
            return (
              <div className="flex ">
                <div className="chatCard flex w-100 item-start column gap-1">
                  {x.senderMessage.map((x) => {
                    return (
                      <div className="SenderChat flex py-2 item-center family1 text-light">
                        <div className="flex gap-1">
                          <img src={x.image} alt="" className="avatar" />
                          <div className="flex column gap-1">
                            <div className="w-100 flex gap-1">
                              <h4 className="fs-12 ">ME</h4>
                              <h5 className="text-light fs-12 text-grey">
                                Mar 19, 2023, 1:17 AM
                              </h5>
                            </div>
                            <div className="w-100">
                              <h4 className="fs-16 text-grey text-light">
                                Do you think you can deliver an order by would
                                be suitable
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  {x.recieverMessage.map((x) => {
                    return (
                      <div className="recieverChat flex item-center family1 text-light">
                        <div className="flex gap-1">
                          <img src={x.image} alt="" className="avatar" />
                          <div className="flex column gap-1">
                            <div className="w-100 flex gap-1">
                              <h4 className="fs-12 ">Fiverr</h4>
                              <h5 className="text-light fs-12 text-grey">
                                Mar 19, 2023, 1:17 AM
                              </h5>
                            </div>
                            <div className="w-100">
                              <h4 className="fs-16 text-grey text-light">
                                Do you think you can deliver an order by would
                                be suitable
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
      <LeftTop />
      <LeftBottom />
    </LeftIndexWrapper>
  );
}

const LeftTopWrapper = styled.div`
  width: 100%;
  background-color: #fff;
  z-index: 300;
  height: 42rem;
  overflow: auto;
  padding: 5rem 0;
  padding-top: 10rem;

  @media (max-width: 980px) {
    height: 82rem;
  }
  h4 {
    font-family: "Roboto Condensed", sans-serif;
  }
  .avatar {
    border: 1.4px solid var(--blue-1);
  }
  .recieverChat {
    justify-content: flex-end;
    gap: 1.2rem;
    align-self: flex-end;
    position: relative;
  }
  .SenderChat,
  .recieverChat {
    padding: 2rem;
    width: 100%;
    &:hover {
      background-color: var(--light-grey);
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
  position: absolute;
  bottom: 0;
  height: 15rem;
  background-color: #fff;
  z-index: 300;

  .send {
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 16px;
    color: var(--green);
    font-weight: 600;
  }
  .icon {
    width: 4rem;
    height: 4rem;
    display: grid;
    place-items: center;
    &:hover {
      background-color: var(--light-grey);
    }
    svg {
      width: 70%;
      height: 70%;
      color: var(--grey-1);
    }
  }
  .area {
    border-radius: 10px;
    height: 9rem;
    resize: none;
  }
`;

const LeftIndexWrapper = styled.div`
  width: 100%;
  position: relative;
`;
