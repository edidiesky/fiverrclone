import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export default function LoaderIndex({ type }) {
  const [open, setOpen] = React.useState(true);
  const handleToggle = () => {
    setOpen(!open);
  };

  if (type === "Big") {
    return (
      <div>
        <div
          className="flex item-center justify-center"
          style={{
            height: "100vh",
            width: "100%",
            zIndex: "10000",
            position: "fixed",
            background: "rgba(0,0,0,.4)",
          }}
        >
          <CircularProgress color="inherit" />
        </div>
      </div>
    );
  }
  return (
    <div>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
