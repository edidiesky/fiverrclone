import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Topbar } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import EditGigImage from "./EditProductImages";
import OtherInfo from "./OtherInfo";
import ProductInfo from "./ProductInfo";
import LoaderIndex from "../../../../components/loaders/index";
import {
  UpdateGig,
  clearGigsAlert,
  clearGigsDetails,
} from "../../../../Features";
import Message from "../../../../components/loaders/Message";

export default function CreateProductIndex() {
  // initailizing parameters
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    GigsDetails,
    gigsisLoading,
    alertText,
    alertType,
    showAlert,
  } = useSelector((store) => store.gigs);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(clearGigsDetails());
    dispatch(clearGigsAlert());
  }, [dispatch]);

  const [formdata1, setFormData1] = useState({
    price: "",
    discount: "",
    countInStock: "",
    capacity: 0,
  });
  const [formdata2, setFormData2] = useState({
    title: "",
    brand: "",
    description: "",
    shortdescription: "",
  });

  const onChange1 = (e) => {
    setFormData1({ ...formdata1, [e.target.name]: e.target.value });
  };

  const onChange2 = (e) => {
    setFormData2({ ...formdata2, [e.target.name]: e.target.value });
  };
  const [uploadimage, setUploadImage] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [tags, setTagData] = useState([]);
  const [colors, setColors] = useState([]);

  const filterColors = [
    { id: 1, color: "#222222", title: "black" },
    { id: 2, color: "#BD162D", title: "red" },
    { id: 4, color: "#f7f7f7", title: "grey" },
    { id: 3, color: "#23608c", title: "blue" },
    { id: 5, color: "#fff", title: "White" },
  ];

  const productData = {
    ...formdata1,
    ...formdata2,
    image: uploadimage,
    tags,
    colors,
  };
  // console.log(productData);
  const handleAdminProduct = (e) => {
    e.preventDefault();
    dispatch(clearGigsDetails(productData));
  };

  return (
    <>
      <Message
        showAlert={showAlert}
        alertText={alertText}
        alertType={alertType}
        handleClearAlert={clearGigsAlert}
      />
      <Topbar />
      {gigsisLoading && <LoaderIndex loading={gigsisLoading} />}
      <EditProductContainer>
        <div className="EditProductWrapper">
          <div className="EditProductWrapperTop flex item-center justify-space">
            <h2 className="family1 flex-1 fs-30 text-dark">Create New Gigs</h2>

            <div className="btnWrapper">
              <button
                className="editBtn fs-12 text-bold family1"
                onClick={handleAdminProduct}
              >
                Create your Gig Collection
              </button>
            </div>
          </div>
          <div className="editWrapperContainer flex item-start gap-3">
            <div className="w-100 flex gap-3 column editwrapper">
              <ProductInfo
                onChange2={onChange2}
                formdata2={formdata2}
                setFormData2={setFormData2}
              />
              <EditGigImage
                uploadimage={uploadimage}
                uploading={uploading}
                setUploadImage={setUploadImage}
                setUploading={setUploading}
                tagdata={tags}
                setTagData={setTagData}
                colors={colors}
                setColors={setColors}
                filterColors={filterColors}
              />
            </div>
            <div className="editwrapper">
              <OtherInfo
                onChange1={onChange1}
                formdata1={formdata1}
                setFormData1={setFormData1}
              />
            </div>
          </div>
        </div>
      </EditProductContainer>
    </>
  );
}

const EditProductContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  align-items: center;

  .EditProductWrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 4rem;
    .editWrapperContainer {
      align-items: flex-start;
      @media (max-width: 780px) {
        flex-direction: column;
      }
    }
    .EditProductWrapperTop {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      .btnWrapper {
        /* width: 100%; */
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 2rem 0;
      }

      .EditProductWrapperTopLeft {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 100%;
        h3 {
          font-size: 2rem;
          color: var(--text-color);
          font-weight: 700;
          text-transform: uppercase;
          font-family: "Barlow", sans-serif;
        }
      }
    }
    .editBtn {
      background-color: var(--green);
      padding: 1rem 3rem;
      color: #fff;
      border-radius: 40px;
      &:hover {
        /* background-color: #f5f5f5; */
        opacity: 0.7;
      }
    }

    .editwrapper {
      background-color: #fff;
      border: 1px solid rgba(0, 0, 0, 0.3);
      padding: 3rem 2rem;
      width: 100%;
      place-items: start;
      border-radius: 6px;
    }
  }
`;
