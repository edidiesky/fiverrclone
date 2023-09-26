import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import LoaderIndex from "../../../../components/loaders/index";
import { RxCross1 } from "react-icons/rx";
import { BiUpload } from "react-icons/bi";

export default function EditGigImage({
  uploadimage,
  setUploadImage,
  setUploading,
  uploading,
}) {
  console.log(uploadimage);
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

  const removeUploadedImage = (id) => {
    const outcome = uploadimage.filter((x, index) => index !== id);
    console.log(outcome);
    setUploadImage(outcome);
  };
  return (
    <EditGigWrapperCenter>
      {/* image upload */}
      <div className="w-100 flex column gap-1">
        {/*upload image*/}
        {uploadimage.length > 0 ? (
          <div className="EditGigImageList">
            {uploadimage.map((x, index) => {
              return (
                <div
                  className="imageContainer flex item-center gap-2 justify-space"
                  key={index}
                >
                  <img src={x} alt="images" className="img" />
                  <div
                    className="icon flex item-center justify-center"
                    onClick={() => removeUploadedImage(index)}
                  >
                    <RxCross1 fontSize={"18px"} />
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="UploadBtnWrapper">
            {uploading && <LoaderIndex type="small" />}
            <label
              className=" column gap-2 family1 flex gap-1 item-center text-light fs-18"
              htmlFor="upload"
            >
              <BiUpload fontSize={"18px"} /> Upload Gig image here
              <input
                type="file"
                id="upload"
                placeholder="Gig Image"
                autoComplete="off"
                style={{ display: "none" }}
                onChange={handleFileUpload}
                multiple
              />
            </label>
          </div>
        )}
      </div>
    </EditGigWrapperCenter>
  );
}
const EditGigWrapperCenter = styled.div`
  display: flex;
  border-radius: 4px;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
  p {
    font-size: 1.1rem;
    color: var(--grey);
    font-weight: 400;
    &.EditGigWrapperCenterPara {
      padding: 1rem 0;
    }
  }
  .colorSpan {
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    &.active {
      border: 2px solid rgba(0, 0, 0, 0.2);
    }
  }

  .UploadBtnWrapper {
    width: 100%;
    padding: 3rem 2rem;
    padding-top: 3rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    .UploadBtn {
      padding: 1.6rem 2rem;
      font-weight: 600;
      color: #fff;
      cursor: pointer;
      z-index: 50;
    }
  }

  .EditGigImageList {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 3rem;
    @media (max-width: 780px) {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      grid-gap: 1rem;
    }
    .icon {
      height: 3.6rem;
      width: 3.6rem;
      position: absolute;
      right: 5%;
      border-left: 1px solid rgba(0, 0, 0, 0.2);
      cursor: pointer;
      top: 5%;
      border-radius: 50%;
      background-color: #130e0e61;
      svg {
        color: #fff;
      }
    }

    .imageContainer {
      border: 1px solid rgba(0, 0, 0, 0.2);
      position: relative;
      border-radius: 10px;
      .img {
        width: 100%;
        min-height: 10rem;
        border-radius: inherit;
      }
    }
  }
  label {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    cursor: pointer;
    z-index: 50;
    width: 100%;
    svg {
      font-size: 2rem;
      color: var(--green);
    }
    span {
      color: #fff;
      text-decoration: underline;
    }
  }
`;
