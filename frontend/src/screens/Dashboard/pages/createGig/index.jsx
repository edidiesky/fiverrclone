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
        price: GigsDetails?.price,
        countInStock: GigsDetails?.countInStock,
        deliveryDays: GigsDetails?.deliveryDays,
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
    <div className="w-100">
      <Message
        showAlert={showAlert}
        alertText={alertText}
        alertType={alertType}
        handleClearAlert={clearGigsAlert}
      />
      {gigsIsLoading && <LoaderIndex loading={gigsIsLoading} />}
      <EditProductContainer>
        <div className="EditProductWrapper w-85 auto">
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
          {/* <div className="editWrapperContainer flex item-start gap-3">
           
          </div> */}
          <div className="w-100 flex item-start top justify-space">
            <div className="flex column w-100 gap-3">
              <div className="w-100 flex gap-3 column">
                <div className="w-100 editwrapper flex column gap-2">
                  <span className="text-dark text-bold fs-30">
                    Gig's Name and Description
                    <span className="text-grey text-light block fs-18">
                      Place add a title and description of the service to
                      provide to the user
                    </span>
                  </span>
                  <ProductInfo
                    onChange2={onChange2}
                    formdata2={formdata2}
                    setFormData2={setFormData2}
                  />
                </div>
                <div className="w-100 editwrapper flex column gap-2">
                  <span className="text-dark text-bold fs-30">
                    Upload gig's image
                    <span className="text-grey text-light block fs-18">
                      Place add the image of the gig
                    </span>
                  </span>
                  <EditGigImage
                    uploadimage={uploadimage}
                    uploading={uploading}
                    setUploadImage={setUploadImage}
                    setUploading={setUploading}
                  />
                </div>
              </div>
              <div className="editwrapper flex column gap-2">
                <span className="text-dark text-bold fs-30">
                  Gig Price, Tags, and countInStock
                  <span className="text-grey text-light block fs-18">
                    Place add the gig price, Tags, and countInStock
                  </span>
                </span>
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
              <div className="editwrapper flex column gap-2">
                <span className="text-dark text-bold fs-30">
                  Gig Category and Tags
                  <span className="text-grey text-light block fs-18">
                    Place select and add the category of the gig and its tags
                  </span>
                </span>
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
                  type={true}
                />
              </div>
            </div>
            <div style={{paddingTop:"1.5rem"}} className="right editwrapper">
              <span className="text-dark text-bold fs-30">
                Preview
              </span>
            </div>
          </div>
        </div>
      </EditProductContainer>
    </div>
  );
}

const EditProductContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  .right {
    position: sticky;
    top: 20%;
     @media (max-width: 780px)  {
      position: relative;
     }
  }
  h2 {
    font-size: 50px;
    font-weight: 700;
    @media (max-width: 480px) {
      font-size: 35px;
    }
    span {
      color: var(--green);
    }
  }

  .EditProductWrapper {
    display: flex;
    flex-direction: column;
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
      padding: 1rem 3rem !important;
      color: #fff;
      border-radius: 40px;
      font-size: 18px;
      &:hover {
        /* background-color: #f5f5f5; */
        opacity: 0.7;
      }
    }
    .top {
      display: grid;
      /* padding: 3rem; */
      grid-template-columns: 1fr 30%;
      grid-gap: 4rem;
      place-items: start;
      @media (min-width: 1500px) {
        grid-template-columns: 1fr 30%;
      }
      @media (max-width: 980px) {
        grid-template-columns: 1fr;
        display: flex;
        padding: 3rem 0;
        flex-direction: column-reverse;
      }
    }

    .editwrapper {
      background-color: #fff;
      padding: 5rem 4rem;
      padding-top: 7rem;
      border: 1px solid rgba(0, 0, 0, 0.1);
      width: 100%;
      place-items: start;
      border-radius: 6px;
       @media (max-width: 980px) {
      padding: 3rem 1.5rem;

       }
    }
  }
`;
