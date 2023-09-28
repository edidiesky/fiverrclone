import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
export default function LoaderIndex({ loading, type }) {
  const [open, setOpen] = useState(true);
  if (type === "small") {
    return (
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <CircularProgress sx={{ width: "1rem" }} />
      </Box>
    );
  }
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
        background: "rgba(0,0,0,.3)",
      }}
    >
      <div className="loading"></div>
      <div className="text-center w-100 text-bold fs-18">Loading ...</div>
    </div>
  );
}

// import React from "react";

// export default function LoaderIndex() {
//   return (
//     <div id="preloader">
//       <div class="sk-three-bounce">
//         <div class="sk-child sk-bounce1"></div>
//         <div class="sk-child sk-bounce2"></div>
//         <div class="sk-child sk-bounce3"></div>
//       </div>
//     </div>
//   );
// }
