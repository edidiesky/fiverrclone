import React, { useState } from "react";
export default function LazyLoad() {

  return (
    <div
      className="flex item-center justify-center column gap-1"
      style={{
        width: "100vw",
        zIndex: "200000",
        position: "fixed",
        height: "100vh",
        top: 0,
        left: 0,
        background: "rgba(255, 255, 255)",
      }}
    >
    </div>
  );
}
