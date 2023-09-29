import React, { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
export default function LoaderIndex({ loading, type, color }) {
  const [open, setOpen] = useState(true);
  if (type === "dots") {
    return (
      <ThreeDots
        height="27"
        width="27"
        radius="9"
        color={color}
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    );
  }
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
        background: "rgba(255, 255, 255, 0.435)",
      }}
    >
      <ThreeDots
        height="50"
        width="50"
        radius="10"
        color={'var(--blue-1)'}
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
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
