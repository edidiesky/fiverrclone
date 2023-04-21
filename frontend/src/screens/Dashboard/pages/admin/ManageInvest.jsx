import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { Input } from "../../../../components/forms";
import { Links, Header, Alert } from "../../components";

import { useDispatch, useSelector } from "react-redux";
import {
  AdminUpdateMarket,
  getinvestmentById,
  clearUserAlertError,
} from "../../../../Features";
import Message from "../../../../components/loaders/Message";
import LoaderIndex from "../../../../components/loaders/index";

export default function Market() {
  const {id} = useParams()
  const {
    marketIsLoading,
    marketIsError,
    market,
    marketIsSuccess,
  } = useSelector((store) => store.market);
  const dispatch = useDispatch();

    const {
    isLoading,
    investmentDetails,
    investment,
    isError,
    isSuccess,
    alertType,
    alertText,
    userpage,
    totalUser,
    usernoOfpage,
    showAlert,
  } = useSelector((store) => store.investment);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(getinvestmentById(id));
  }, [id]);

  const [formdata, setFormData] = useState({
    price: "",
    plan: "",
    endDate: "",
    volume: "",
    startDate: 0,
    tier:['tier1', 'tier2', 'tier3'],
    profit:'',
    image:'',
    rate:'',
    investors:0,
    network:0,
    companies:0
  });
  useEffect(()=> {
    if(investmentDetails) {
      const {
          price,
          plan,
          endDate,
          volume,
          startDate,
          profit,
          image,
          rate,
          investors,
          network,
          companies
      } = investmentDetails

      setFormData({
        price,
        plan,
        endDate,
        volume,
        startDate,
        profit,
        image,
        rate,
        investors,
        network,
        companies
      })
    }
  }, [investmentDetails, setFormData])

  
  const inputData = [
    {
      id: 1,
      name: "price",
      placeholder: "Market Price",
      type: "number",
      text: "Market Price",
    },
    {
      id: 2,
      name: "profit",
      placeholder: "Market Profit",
      type: "number",
      text: "profit",
    },
    {
      id: 3,
      name: "rate",
      placeholder: "Market rate",
      type: "number",
      text: "rate",
    },
    {
      id: 4,
      name: "volume",
      placeholder: "Market volume",
      type: "number",
      text: "volume",
    },
    {
      id: 7,
      name: "capacity",
      placeholder: "capacity",
      type: "number",
      text: "Capacity",
    },
    {
      id: 8,
      name: "plan",
      placeholder: "plan",
      type: "text",
      text: "plan",
    },
    {
      id: 9,
      name: "network",
      placeholder: "Network value",
      type: "number",
      text: "Network",
    },
    {
      id: 10,
      name: "countries",
      placeholder: "countries value",
      type: "number",
      text: "countries",
    },
  ];

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  // handling the users profile update
  const handleUpdateUserMarket = (e) => {
    e.preventDefault();
    dispatch(AdminUpdateMarket(formdata));
  };

  // navigate back to the user dashboard when update is successfull
  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        dispatch(clearUserAlertError());
      }, 4000);
    }
  }, [showAlert]);

  return (
    <>
      {isSuccess && (
        <Message
          showAlert={showAlert}
          alertText={alertText}
          alertType={alertType}
        />
      )}
      {isLoading && <LoaderIndex loading={isLoading} />}
      {/* <Header text={"Customer Market"} /> */}
      <MarketContainer>
        <div className="profileWrapper">
          {marketIsError && (
            <Message alertText={alertText} alertType={alertType} />
          )}
          <div className="EditMarketWrapperTopLeft">
            <h3>Manage Investment</h3>
          </div>

          <form
            className="profileForm shadow flex column gap-1"
            onSubmit={handleUpdateUserMarket}
          >
            <div className="profileFormBottom">
              {inputData.map((input) => {
                return (
                  <Input
                    id={input.text}
                    onChange={onChange}
                    placeholder={input.placeholder}
                    type={input.type}
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
               Submit
              </button>
            </div>
          </form>
        </div>
      </MarketContainer>
    </>
  );
}

const MarketContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  padding: 3rem 0;
  .profileForm {
      width: 100%;
      display: flex;
      align-items: center;
      padding: 3.7rem 4rem;
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
`;
