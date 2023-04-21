import React, {useState} from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function LoaderIndex({loading}) {
  const [open, setOpen] = useState(true)
  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
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
