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
  getSingleGigsDetails,
  CreateSingleGig,
} from "../../../../Features";
import Message from "../../../../components/loaders/Message";

export default function CreateProductIndex() {
  // initailizing parameters
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    GigsDetails,
    gigsIsLoading,
    alertText,
    alertType,
    showAlert,
  } = useSelector((store) => store.gigs);

  const [formdata1, setFormData1] = useState({
    price: "",
    countInStock: "",
    deliveryDays: 0,
  });
  const [formdata2, setFormData2] = useState({
    title: "",
    brand: "",
    description: "",
    shortDescription: "",
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
  const [category, setCategory] = useState([]);
  const [subInfo, setSubinfo] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(clearGigsDetails());
    // dispatch(clearGigsAlert());
    if (id) {
      dispatch(getSingleGigsDetails(id));
    }
  }, [id]);
  useEffect(() => {
    if (GigsDetails && id) {
      setFormData2({
        title: GigsDetails?.title,
        description: GigsDetails?.description,
        shortDescription: GigsDetails?.shortDescription,
      });
      setFormData1({
        price:GigsDetails?.price,
        countInStock:GigsDetails?.countInStock,
        deliveryDays :GigsDetails?.deliveryDays,
      });
      setTagData(GigsDetails.tags);
      setCategory(GigsDetails.category);
      setSubinfo(GigsDetails.subInfo);
    } else {
      dispatch(clearGigsDetails());
      setFormData1({
        price: "",
        countInStock: "",
        deliveryDays: 0,
      });
      setFormData2({
        title: "",
        brand: "",
        description: "",
        shortDescription: "",
      });
      setTagData([]);
      setCategory([]);
      setSubinfo([]);
    }
  }, [
    GigsDetails,
    setFormData1,
    setFormData2,
    setTagData,
    setCategory,
    setSubinfo,
    id,
  ]);
  // console.log(GigsDetails,id);

  // console.log(GigsData);
  const GigsData = {
    ...formdata1,
    ...formdata2,
    image: uploadimage,
    tags,
    category,
    subInfo,
  };
  const handleAdminProduct = (e) => {
    e.preventDefault();
    if (GigsDetails) {
      dispatch(UpdateGig({ GigsData }));
    } else {
      dispatch(CreateSingleGig({ GigsData }));
    }
  };

  // console.log(GigsData);

  return (
    <>
      <Message
        showAlert={showAlert}
        alertText={alertText}
        alertType={alertType}
        handleClearAlert={clearGigsAlert}
      />
      <Topbar />
      {gigsIsLoading && <LoaderIndex loading={gigsIsLoading} />}
      <EditProductContainer>
        <div className="EditProductWrapper">
          <div className="EditProductWrapperTop flex item-center justify-space">
            <h2 className="family1 flex-1 fs-30 text-dark">
              {GigsDetails ? "Edit Gigs" : "Create New Gigs"}
            </h2>

            <div className="btnWrapper">
              <button
                className="editBtn fs-12 text-bold family1"
                onClick={handleAdminProduct}
              >
                {GigsDetails
                  ? "Edit your Gig Collection"
                  : "Create your Gig Collection"}
              </button>
            </div>
          </div>
          <div className="editWrapperContainer flex item-start gap-3">
            <div className="w-100 flex gap-1 column editwrapper">
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
              />
            </div>
            <div className="editwrapper">
              <OtherInfo
                onChange1={onChange1}
                formdata1={formdata1}
                tagdata={tags}
                setTagData={setTagData}
                categorydata={category}
                setCategory={setCategory}
                subinfodata={subInfo}
                setSubinfodata={setSubinfo}
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
  padding-top: 4rem;

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
      @media (max-width: 480px) {
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
      }

      .btnWrapper {
        /* width: 100%; */
        display: flex;
        align-items: center;
        justify-content: flex-end;
        /* padding: 2rem 0; */
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
