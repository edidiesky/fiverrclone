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
  tagdata,
  setTagData,
  colors,
  setColors,
  filterColors,
}) {
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

  const [coloractive, setColorActive] = useState(false);

  const removeUploadedImage = (id) => {
    const outcome = uploadimage.filter((x, index) => index !== id);
    console.log(outcome);
    setUploadImage(outcome);
  };
  const handleTagInput = (e) => {
    // check if the entetr key is pressed
    if (e.key !== "Enter") return;
    // check if the there is emppty value
    const value = e.target.value;
    if (!value.trim()) return;
    // set the list
    setTagData([...tagdata, value]);
  };
  const deleteTagInput = (id) => {
    const tagFilterResult = tagdata.filter((x, index) => index !== id);
    setTagData(tagFilterResult);
  };
  const handleColors = (color) => {
    setColors([...colors, color]);
    if (colors.includes(color)) {
      setColorActive(true);
    }
  };
  return (
    <EditGigWrapperCenter>
      {/* image upload */}
      <div className="w-100 flex column gap-1">
        <h4 className="family1 fs-14 text-bold">Upload Gig Image</h4>
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
              className="fs-15 column gap-2 family1 fs-14 flex gap-1 item-center text-light"
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
      {/* tag upload */}
      <div className="w-100 flex column gap-1">
        <h4 className="family1 fs-14 text-bold">Upload Gig Tag</h4>
        <div className="tagForm item-center">
          {tagdata.map((x, index) => {
            return (
              <div className="tagWrapper family1 text-light fs-14 text-bold flex item-center gap-1">
                {x}{" "}
                <RxCross1
                  onClick={() => deleteTagInput(index)}
                  fontSize={"16px"}
                  style={{ cursor: "pointer" }}
                />
              </div>
            );
          })}
          <input
            type="text"
            onKeyDown={handleTagInput}
            className="taginput"
            placeholder="Add Gig Tags"
          />
        </div>
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
  .taginput {
    outline: none;
    font-size: 1.5rem;
    font-weight: 400;
    transition: all 0.2s;
    font-family: "Barlow", sans-serif;
    color: var(--dark-1);
    border: none;
    height: 100%;
  }
  .tagForm {
    min-height: 5rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    padding: 1rem 2rem;
    border-radius: 6px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.4);
      box-shadow: 0 2px 3px rgba(0, 0, 0, 0.08);
    }
    .tagWrapper {
      padding: 0.5rem 1rem;
      background-color: rgba(0, 0, 0, 0.08);
      border-radius: 40px;
    }
  }
  .UploadBtnWrapper {
    width: 100%;
    padding: 2rem;
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
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 3rem;
    @media (max-width: 780px) {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      grid-gap: 1rem;
    }
    .icon {
      height: 100%;
      width: 3.6rem;
      border-left: 1px solid rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }

    .imageContainer {
      border: 1px solid rgba(0, 0, 0, 0.2);
      padding-left: 1rem;
      position: relative;
      .img {
        width: 12rem;
        min-height: 7rem;
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
          color: #fff;
          text-decoration: underline;
        }
      }
    }
  }
`;
