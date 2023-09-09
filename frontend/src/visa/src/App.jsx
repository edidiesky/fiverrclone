import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import {
  Layout,
  // Contact,
  // About,
  // Agents,
  // Cart,
  // Checkout,
} from "./screens";
import Error from "./screens/Error";
import LoaderIndex from "./components/loaders";
const LazyHome = React.lazy(() => import("./screens/Home"));
const LazyTravels = React.lazy(() => import("./screens/Travel"));
const LazyVisa = React.lazy(() => import("./screens/Visa"));
const LazyPassport = React.lazy(() => import("./screens/Passport"));
const LazyCountry = React.lazy(() => import("./screens/Country"));
export default function App() {
 

  return (
    <>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route
            exact
            path=""
            element={
              <React.Suspense fallback={<LoaderIndex type={"Big"} />}>
                <LazyHome />
              </React.Suspense>
            }
          />
          <Route
            path="passport"
            element={
              <React.Suspense fallback={<LoaderIndex type={"Big"} />}>
                <LazyPassport />
              </React.Suspense>
            }
          />
          <Route
            path="visa"
            element={
              <React.Suspense fallback={<LoaderIndex type={"Big"} />}>
                <LazyVisa />
              </React.Suspense>
            }
          />
          <Route
            path="travels"
            element={
              <React.Suspense fallback={<LoaderIndex type={"Big"} />}>
                <LazyTravels />
              </React.Suspense>
            }
          />
          {/* <Route path="contact" element={<Contact />} />
          
          <Route path="cart" element={<Cart />} />
          <Route path="billing" element={<Checkout />} />
          <Route
            path="country/:id"
            element={
              <React.Suspense fallback={<LoaderIndex />}>
                <LazyCountry />
              </React.Suspense>
            }
          />
          <Route path="*" element={<Error />} /> */}
        </Route>
      </Routes>
    </>
  );
}
