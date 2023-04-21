import React, { useState } from "react";
import axios from "axios";
import { Navigate, Link } from "react-router-dom";
import styled from "styled-components";
import { GrUpload } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";

import Message from "../../../../components/loaders/Message";
import LoaderIndex from "../../../../components/loaders/index";

export default function EditProductImage({
  uploadimage,
  setUploadImage,
  setUploading,
  uploading,
}) {
  const { productDetails } = useSelector((store) => store.product);

  const [images, setImage] = useState([
    "/bmw-2.jpg",
    "/car_9.jpg",
    "/car_10.jpg",
  ]);



  const handleFileUpload = async (e) => {
    // get the file
    const file = e.target.files;
    setUploading(true);
    // create formdata
    const formData = new FormData();
    for (let i = 0; i < file.length; i++) {
      formData.append("images", file[i]);
    }

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axios.post("/api/v1/upload", formData, config);

      setUploadImage(data.files);
      setUploading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const hanldeRemoveUploadImage = (id) => {
     const data =  images.filter((x, index) => index !== id);
     setImage(data)
  };

  return (
    <EditProductWrapperCenter className="flex column gap-2">
      <h4 className="fs-14 text-extra-bold family1"> Image</h4>
      {/*upload image*/}
      {images.length > 0 ? (
        <div className="w-100 grid">
          {images.map((x, index) => {
            return (
              <div className="uploadCard border w-100 flex item-center justify-space">
                <div className="flex uploadCardLeft item-center gap-1">
                  <div className="images">
                    <img src={x} alt="" />
                  </div>
                  <h5 className="fs-12 text-light family1">{x}</h5>
                </div>
                <div className="h-100 uploadCardRight flex item-center justify-center">
                  <div
                    className="icon flex item-center justify-center"
                    onClick={() => hanldeRemoveUploadImage(index)}
                  >
                    <RxCross2 />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="w-100 border imageWrapper flex justify-content item-center">
          <div className="flex justify-content item-center column gap-1">
            <GrUpload className="fs-24 text-dark" />
            <h4 className="fs-14 family1 block">Upload an image</h4>
          </div>
        </div>
      )}
    </EditProductWrapperCenter>
  );
}

const EditProductWrapperCenter = styled.div`
  padding: 0 3rem;
  display: flex;
  background-color: #fff;
  border-radius: 4px;
  flex-direction: column;
  width: 100%;
  gap: 1.6rem;
  .border {
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  .imageWrapper {
    border: 1px solid rgba(0, 0, 0, 0.3);
    height: 10rem;
    border-radius: 8px;
    display: grid;
    place-items: center;
  }
  .images {
    width: 60px;
    img {
      width: 100%;
    }
  }
  .uploadCardLeft {
    padding: 0.6rem;
    min-width: 15rem;
  }
  .uploadCardRight {
    padding: 0.6rem;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
  }
  .icon {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      background-color: var(--light-grey);
    }

    svg {
      width: 60%;
      height: 60%;
      color: var(--grey-1);
    }
  }
  .uploadCard {
  }
  .grid {
    display: grid;
    width: 80%;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;

    @media (max-width:780px) {
      width: 90%;
      grid-template-columns: repeat(auto-fit,minmax(130px, 1fr));
    }
  }
`;
