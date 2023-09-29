import React from "react";

export default function GigInfo() {
  return (
    <div className="flex w-100 py-4 column gap-3">
      <div className="flex w-100 column gap-2">
        <h3 className="fs-30 family2 text-extra-bold text-grey">About This Gig</h3>
        <h4 style={{lineHeight:"1.2"}} className="fs-20 text-bold text-grey">
          No logo? Bad logo? Ugly logo? Don’t stress! I’ve got you covered with
          high-quality, unique logos tailored to your brand. Make a great first
          impression with a professional, high-end design. With 20+ years of
          design and branding experience, I can make you and your brand look
          good.
        </h4>
      </div>
      {/* <div className="flex w-100 column gap-2">
        <h3 className="fs-35 text-bold text-grey">About This Gig</h3>
        <p className="fs-24 text-light text-dark">
          No logo? Bad logo? Ugly logo? Don’t stress! I’ve got you covered with
          high-quality, unique logos tailored to your brand. Make a great first
          impression with a professional, high-end design. With 20+ years of
          design and branding experience, I can make you and your brand look
          good.
        </p>
      </div> */}
    </div>
  );
}
