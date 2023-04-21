import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Input } from "../../../../components/forms";
import { Header, Alert } from "../../components";

import { useDispatch, useSelector } from "react-redux";
import {
  // AdminUpdateManageCoupon,
  // getAllManageCoupon,
  clearUserAlertError,
} from "../../../../Features";
import Message from "../../../../components/loaders/Message";
import LoaderIndex from "../../../../components/loaders/index";

export default function ManageCoupon() {
  // const {
  //   ManageCouponIsLoading,
  //   ManageCouponIsError,
  //   alertType,
  //   alertText,
  //   showAlert,
  //   ManageCoupon,
  //   ManageCouponIsSuccess,
  // } = useSelector((store) => store.ManageCoupon);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  //   dispatch(getAllManageCoupon());
  // }, []);

  const [formdata, setFormData] = useState({
    coupon: "",
    date: "",
  });

  // useEffect(() => {
  //   if (ManageCoupon) {
  //     setFormData({
  //       price: ManageCoupon[0]?.price,
  //       date: ManageCoupon[0]?.profit,
  //       rate: ManageCoupon[0]?.rate,
  //     });
  //   }
  // }, [setFormData, ManageCoupon]);

  const inputData = [
    {
      id: 1,
      name: "coupon",
      placeholder: "coupon",
      type: "text",
      text: "coupon",
    },
    {
      id: 2,
      name: "date",
      placeholder: "Coupon Date",
      type: "text",
      text: "date",
    },
  ];

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  // handling the users profile update
  const handleUpdateCoupon = (e) => {
    e.preventDefault();
    // dispatch(AdminUpdateManageCoupon(formdata));
  };

  // // navigate back to the user dashboard when update is successfull
  // useEffect(() => {
  //   if (showAlert) {
  //     setTimeout(() => {
  //       dispatch(clearUserAlertError());
  //     }, 4000);
  //   }
  // }, [showAlert]);

  return (
    <>
      {/* {ManageCouponIsSuccess && (
        <Message
          showAlert={showAlert}
          alertText={alertText}
          alertType={alertType}
        />
      )}
      {ManageCouponIsLoading && <LoaderIndex loading={ManageCouponIsLoading} />} */}
      {/* <Header text={"Customer ManageCoupon"} /> */}
      <ManageCouponContainer>
        <div className="profileWrapper">
          {/* {ManageCouponIsError && (
            <Message alertText={alertText} alertType={alertType} />
          )} */}
          <div className="EditTopLeft">
            <h3 className="fs-26 text-bold text-dark">
              Coupon
              <span className="fs-16 family1 text-light block text-grey py-1">
                Managing your product's coupon
              </span>
            </h3>
          </div>

          <form
            className="profileForm shadow flex column gap-1"
            onSubmit={handleUpdateCoupon}
          >
            <div className="profileFormBottom">
              {inputData.map((input) => {
                return (
                  <Input
                    id={input.text}
                    onChange={onChange}
                    placeholder={input.placeholder}
                    name={input.name}
                    value={formdata[input.name]}
                    input={input}
                    key={input.id}
                    required={input.required}
                    pattern={input.pattern}
                    errorMessage={input.errorMessage}
                  />
                );
              })}
            </div>
            <div className="btnWrapper">
              <button type="submit" className="btn">
                Edit / Create Coupon
              </button>
            </div>
          </form>
        </div>
      </ManageCouponContainer>
    </>
  );
}

const ManageCouponContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  padding: 3rem 0;
  .profileWrapper {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 100%;
    .EditProfileWrapperTopLeft {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      width: 100%;
      h3 {
        font-size: 2rem;
        color: var(--dark-1);
        font-weight: 700;
        text-transform: uppercase;
      }
    }
    .profileForm {
      width: 100%;
      display: flex;
      align-items: center;
      padding: 3rem 4rem;
      background: #fff;
      border-radius: 6px;
      flex-direction: column;
      @media (max-width: 780px) {
        padding: 3.7rem;
      }
      .btnWrapper {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 2rem 0;
        .btn {
          border: none;
          outline: none;
          font-size: 1.6rem;
          font-weight: 600;
          color: #fff;
          background: var(--primary);
          padding: 1.4rem 4rem;
          border-radius: 40px;
          cursor: pointer;
          &:hover {
            background: var(--red);
          }
        }
      }
      .ProfileBottom {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 100%;
        padding: 2.4rem 0;
        h3 {
          font-size: 1.8rem;
          color: var(--dark-1);
          font-weight: 700;
          text-transform: uppercase;
          font-family: "Karla", sans-serif;
        }
      }
      .profileFormBottom {
        display: grid;
        width: 100%;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        grid-gap: 1.4rem;
        padding: 0.4rem 0;
        @media (max-width: 780px) {
          grid-template-columns: 1fr;
        }
      }
    }
  }
`;
