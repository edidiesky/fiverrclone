import React, { useState } from "react";
import axios from "axios";
import { Navigate, Link } from "react-router-dom";
import styled from "styled-components";
import { ImUpload } from "react-icons/im";
import { FaFileUpload } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import Message from "../../../../components/loaders/Message";
import LoaderIndex from "../../../../components/loaders/index";

export default function EditProductImage({
  uploadimage,
  setUploadImage,
  setUploading,
  uploading,
}) {
  
const {
    productDetails,
  } = useSelector((store) => store.product);

  const [images, setImage] = useState([
    { id: 1, text: "Upload your first image" },
    { id: 2, text: "Upload your second image" },

    { id: 3, text: "Upload your third image" },
    { id: 4, text: "Upload your fourth image" },
  ]);

  let imageCollection = images.map((x, index) => {
    const { id, text } = x;
    return { id, text, image: productDetails?.image[index] };
  });

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

  return (
    <EditProductWrapperCenter>
      <h3>Upload Product Image</h3>
      <p>
        The image format should be in .jpeg .jpg .png and a Minimum of 300 X
        300px (for optimal images use)
      </p>

      <p className="EditProductWrapperCenterPara">
        Select a Product Photo up to 4 photos at one here. Include a Minimum of
        3 photos or 4 photos for buyers
      </p>

      {/*upload image*/}
      <div className="EditProductImageList">
        {productDetails
          ? productDetails?.image?.map((image) => {
              return (
                <div className="imageContainer" key={image?._id}>
                  {image?.image ? (
                    <img
                      src={image?.image}
                      alt="images"
                      className="imageWrapper"
                    />
                  ) : (
                    ""
                  )}
                  <div className="imageWrappers"></div>
                </div>
              );
            })
          : uploadimage.map((image) => {
            return (
              <div className="imageContainer" key={image.id}>
                {
                  <img
                    src={image?.path}
                    alt="images"
                    className="imageWrapper"
                  />
                }
                <div className="imageWrappers"></div>
              </div>
            );
          })}
      </div>
      <div className="UploadBtnWrapper">
        {uploading && <LoaderIndex type="small" />}
        <label className="UploadBtn flex item-center gap-1" htmlFor="upload">
          Upload an Image<FaFileUpload />
          <input
            type="file"
            id="upload"
            placeholder="Product Image"
            autoComplete="off"
            style={{ display: "none" }}
            onChange={handleFileUpload}
            multiple
          />
        </label>
      </div>
    </EditProductWrapperCenter>
  );
}

const EditProductWrapperCenter = styled.div`
  padding: 2rem 3rem;
  display: flex;
  background: var(--white);
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  flex-direction: column;
  width: 100%;
  gap: 1.6rem;
  p {
    font-size: 1.1rem;
    color: var(--grey);
    font-weight: 400;
    &.EditProductWrapperCenterPara {
      padding: 1rem 0;
    }
  }
  .UploadBtnWrapper {
    width: 100%;
    padding: 2rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    .UploadBtn {
      padding: 1.4rem 2rem;
      font-size: 1.6rem;
      font-weight: 400;
      background: var(--blue-2);
      border-radius: 40px;
      font-family: "Barlow", sans-serif;
      color: #fff;
      cursor: pointer;
      z-index: 50;
      &:hover {
        background: var(--red);
      }
    }
  }

  h3 {
    font-size: 1.7rem;
    color: var(--text-color);
    font-weight: 600;
  }
  .EditProductImageList {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    @media (max-width: 780px) {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      grid-gap: 1rem;
    }

    .imageContainer {
      border: 1.7px dotted var(--dark-1);
      height: 20rem;
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 1rem;
      position: relative;
      .imageWrappers {
        position: absolute;
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.4);
        z-index: 30;
      }
      .imageWrapper {
        position: absolute;
        width: 100%;
        height: 100%;
      }

      .uploadLabel {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 1rem;
        cursor: pointer;
        z-index: 50;
        svg {
          font-size: 2rem;
          color: var(--red);
        }
        span {
          font-size: 1.45rem;
          font-weight: 600;
          color: #fff;
          text-decoration: underline;
        }
      }
    }
  }
`;
