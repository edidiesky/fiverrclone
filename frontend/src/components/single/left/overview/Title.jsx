import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Rating from "../../../common/Rating";


export default function Title() {
  return (
    <div>
      <div className="flex w-100 column item-start gap-1">
        <h2 className="fs-30 text-dark text-extra-bold">
          I will create a modern minimalist luxury logo design for your business
        </h2>
        {/* author pics */}
        <div className="w-100 flex gap-1 item-center" style={{paddingBottom:'2rem', borderBottom:'1px solid rgba(0,0,0,.1)'}}>
          <img
            src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/ed16a994fb873e0815435aa19250a098-1663604096116/614b9a69-0365-4a0e-a076-f47392dd383b.jpg"
            alt=""
            className="avatar"
          />
          {/* author name */}
          <Link to={"/"}>
            <h4 className="fs-16 text-bold text-dark">vanillattack</h4>
          </Link>
          {/* level */}
          <div className="flex relative">
            <h4 className="fs-16 text-grey text-light">Level 2 Seller</h4>
          </div>
          {/* rating */}
          <div className="flex item-center gap-1 fs-16" style={{paddingLeft:"1rem", borderLeft:"1px solid #777"}}>
            <Rating value={4}/>
            {" "} 5
            {/* no of reviews */}
            <h4 className="fs-16 text-grey text-light">(102)</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
